

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.5 -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">

    <!-- JavaScript -->
    <script src="//cdn.jsdelivr.net/alertifyjs/1.9.0/alertify.min.js"></script>


    <!-- jQuery 2.1.4 -->
    <script src="plugins/jQuery/jQuery-2.1.4.min.js"></script>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
<body>
<?php
//post values variables##############

if (isset($_POST['merchant'])) {

	# code...
date_default_timezone_set('Asia/Manila');
$merchant=$_POST['merchant'];
$reference=$_POST['reference'];
$customer=$_POST['customer'];
$amount=$_POST['amount'];
$currency=$_POST['currency'];
$fronturi=$_POST['fronturi'];
$backuri=$_POST['backuri'];
$language=$_POST['language'];
$bank=$_POST['bank'];
$datetimekey = date("YmdHis");
$datetime = date("Y/m/d H:i:s");
$securitycode='jQYXRSMVmxAS';
$clientip='43.231.229.134';
$key = md5($merchant.$reference.$customer.$amount.$currency.$datetimekey.$securitycode.$clientip);

$postfieldvalue =
"Merchant=".$merchant.
"&Currency=".$currency.
"&Customer=".$customer.
"&Amount=".$amount.
"&Bank=".$bank.
"&Datetime=".$datetime.
"&FrontURI=".$fronturi.
"&BackURI=".$backuri.
"&Language=".$language.
"&ClientIP=".$clientip.
"&Reference=".$reference.
"&Key=".$key;

// echo $postfieldvalue;
//die();


//save to database##################
$servername = "localhost";
$username = "testserveruser";
$password = "password123!!";
$dbname = "paymentdb";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO  tbl_depositrecord (fld_merchant,fld_currency,fld_customer,fld_amount,fld_bank,fld_reference,fld_key,fld_datetime
)
VALUES ('$merchant', '$currency', '$customer','$amount','$bank','$reference','$key','$datetime')";

if ($conn->query($sql) === TRUE) {
    echo "
    <center>
		<div class='bg-primary'>
		New record created successfully
		</div>
        </center>
		";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


$ch = curl_init();

curl_setopt($ch, CURLOPT_URL,"http://api.besthappylife.biz/MerchantTransfer?");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postfieldvalue);

// receive server response ...
//curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$server_output = curl_exec ($ch);

//$echo $server_output;

curl_close ($ch);

//echo $merchant.$reference.$customer.$amount.$currency.$datetimekey.$securitycode.$clientip;
//die();
// further processing ....
// if ($server_output == "OK") {
// 	echo 'ok';
// }
// else
// {
// 	echo 'not ok';
// }

}
?>
<style>
	.inv {
	display: none;
	}
	.vis{
		display: block;
	}
	</style>


	<center>
		<br>
    <br>
<form method="post" action="deposit3.php">
	<table>
		<tr><td>Merchant:</td><td><input type="text" name="merchant"class="form-control" value="M0068" /></td></tr>

		<tr>
			<td>Currency:</td>
			<td>

				<select id="currency" name="currency"class="form-control" >
					<option value="">--- SELECT CURRENCY ---</option>
					<option value="MYR">MYR</option>
					<option value="THB">THB</option>
					<option value="VND">VND</option>
					<option value="IDR">IDR</option>
				</select>
			</td>
		</tr>

		<tr><td>Customer:</td><td><input type="text" name="customer" class="form-control" value="220099" /></td></tr>
		<tr><td>Amount:</td><td><input type="text" name="amount"class="form-control" value="50.00" /></td></tr>
		<tr>
			<td>Bank:</td>
			<td>
				<div id="None" name="None" >
					<select id="bank1" name="bank1"class="form-control">
						<option value="">--- SELECT BANK ---</option>
					</select>
				</div>
				<div id="MYR" name="MYR" class="inv">
					<select id="bank2" name="bank2" class="form-control">
						<option value="">--- SELECT BANK ---</option>
						<option value="MBB">MBB</option>
						<option value="PBB">PBB</option>
						<option value="CIMB">CIMB</option>
						<option value="HLB">HLB</option>
						<option value="RHB">RHB</option>
						<option value="AMB">AMB</option>
					</select>
				</div>
				<div id="THB" name="THB" class="inv">
					<select id="bank3" name="bank3" class="form-control">
						<option value="">--- SELECT BANK ---</option>
						<option value="KKR">KKR</option>
						<option value="BBL">BBL</option>
						<option value="SCB">SCB</option>
						<option value="KTB">KTB</option>
						<option value="BOA">BOA</option>
						<option value="GSB">GSB</option>
					</select>
				</div>
				<div id="VND" name="VND" class="inv ">
					<select id="bank4" name="bank4" class="form-control">
						<option value="">--- SELECT BANK ---</option>
						<option value="TCB">TCB</option>
						<option value="SACOM">SACOM</option>
						<option value="VCB">VCB</option>
						<option value="ACB">ACB</option>
						<option value="DAB">DAB</option>
						<option value="VTB">VTB</option>
						<option value="BIDV">BIDV</option>
						<option value="EXIM">EXIM</option>
					</select>
				</div>
				<div id="IDR" name="IDR" class="inv ">
					<select id="bank5" name="bank5"class="form-control" >
						<option value="">--- SELECT BANK ---</option>
						<option value="BCA">BCA</option>
						<option value="BNI">BNI</option>
						<option value="BRI">BRI</option>
						<option value="MDR">MDR</option>
					</select>
				</div>

				<input type="hidden" name="bank" id="bank" value="">

			</td></tr>
		<tr>
			<td><input type="Submit" value="Confirm" class="form-control"></td>
		</tr><br>

		<input type="hidden" name="reference" value="<?php echo date("YmdHis"); ?>" />
		<input type="hidden" name="fronturi" value="http://merchant.com/Front.aspx"/>
		<input type="hidden" name="backuri" value="http://merchant.com/Back.aspx" />
		<input type="hidden" name="language" value="en-us" />
	</table>
</form>
<a href="index.php">Home</a>
</center>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script>

		document
				.getElementById('currency')
				.addEventListener('change', function () {
						'use strict';
						var vis = document.querySelector('.vis'),
								target = document.getElementById(this.value);
						if (vis !== null) {
									document.getElementById('None').style.display = "none";
								vis.className = 'inv';

						}
						if (target !== null ) {
								target.className = 'vis';
								document.getElementById('None').style.display = "none";
						}
		});

</script>
<script type="text/javascript">
$(document).ready(function () {
	$("#bank1").change(function () {
		$('#bank').val($("#bank1").val());
	});
	$("#bank2").change(function () {
		$('#bank').val($("#bank2").val());
	});
	$("#bank3").change(function () {
		$('#bank').val($("#bank3").val());
	});
	$("#bank4").change(function () {
		$('#bank').val($("#bank4").val());
	});
	$("#bank5").change(function () {
		$('#bank').val($("#bank5").val());
	});

});

</script>

<!-- ./wrapper -->

<!-- jQuery UI 1.11.4 -->
<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->

<!-- Morris.js charts -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>

<!-- daterangepicker -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js"></script>



</body>
</html> 
