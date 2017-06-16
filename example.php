<?php
require_once("NetellerAPI.php");

extract($_POST);

//Change the configuration below to your Client ID and Client Secret values.
define('NETELLER_BASE_URL', 'https://test.api.neteller.com/');
define('NETELLER_CLIENT_ID', "AAABXK_CYJrj4b5m");
define('NETELLER_CLIENT_SECRET', "0.MYi-RaehvgvQiCnAxUsIHIHl_NaghK2ztHjaVvHKQuQ.lszTFiv7_4PdYb-r_mERe4Ar2Ho");

//Amounts should be sent to the API in the smallest currency unit. For example $5 should be sent to the API as amount = 500.
//Exceptions to this rule are the JPY, KRW and HUF currencies. If you are going to accept payments in these currencies, you will need to skip the line below.
if($Ntlr_DepositCurrency != "JPY" || $Ntlr_DepositCurrency != "HUF" || $Ntlr_DepositCurrency != "KRW" )
{
    $Ntlr_DepositAmount = $Ntlr_DepositAmount * 100;
}

//Also, decimal values are not allowed - only integers.
$Ntlr_DepositAmount = round($Ntlr_DepositAmount);

$deposit = new RequestPayment();
$deposit->setPaymentMethodValue($Ntlr_DepositEmail)
        //this should be generating a unique string, for example using the current date/time
        ->setTransactionMerchantRefId((string)date('Y-m-d H:i:s'))
        ->setTransactionAmount($Ntlr_DepositAmount)
        //you should set here the transaction currency. USD is just an example here. Depending on your implementation, you might need to make this a customer input.
        ->setTransactionCurrency($Ntlr_DepositCurrency)
        ->setVerificationCode($Ntlr_DepositSecureId);
$result = $deposit->doRequest();
//These lines are just for debugging purposes, you don't need them in your live code
/*
$errors = $deposit->getExecutionErrors();
$ip = $deposit->getIP();

var_dump($result);
var_dump($errors);
var_dump($ip);
*/

if($result != false)
{
    //This means that the transaction was successful. You can choose what to do with the result here.
    //For example, show success message to the customer, or redirect him somewhere.
    echo "Your deposit was successful.";
}
else
{
    //This means that there was something wrong with the transactions. You can choose what to do in this case.
    //For example, show an (meaningful) error message to the customer, or redirect him somewhere.
    $errors = $deposit->getExecutionErrors();
  var_dump($errors);
    //In the example below, we intercept the error code 20020, which the API returned. This error code means that the customer doesn't have sufficient funds to pay for the transaction. You can find a list of all error codes in section "REST API Errors" in the NETELLER REST API manual.
    if($errors['api_error_code'] == "20020")
    {
        echo "Your deposit has been declined because there are insufficient funds in your NETELLER account. Please <a href=\"https://member.neteller.com/\">click here</a> to top up your NETELLER balance";
    }
}
 ?>
