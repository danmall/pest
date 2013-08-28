<?php require($_SERVER["DOCUMENT_ROOT"]."/-/_inc/functions.php"); echo "\n"; ?>
<?php require($_SERVER["DOCUMENT_ROOT"]."/-/_inc/doctype.php"); echo "\n"; ?>
<head>    
    <title>Progressively Enhanced Stock Table</title>
    <?php require($_SERVER["DOCUMENT_ROOT"]."/-/_inc/meta.php"); echo "\n"; ?>        

    <?php require($_SERVER["DOCUMENT_ROOT"]."/-/_inc/cssReference.php"); echo "\n"; ?>        

</head>
<body>
    <!--[if lt IE 7]>
        <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
    <![endif]-->

    <div class="wrap">

	    <h1 class="page-title">Progressively Enhanced Stock Table</h1>

	    <section class="last-updated">
	    	<h1>Last updated <span class="current-time"><?php echo $currentTime; ?></span>. <strong class="static-page-warning"><a href="../">Refresh</a> for updates.</strong></h1>
	    </section><!-- .last-updated -->

	    <div class="stock-table-wrapper">

		    <table class="stock-table">
		    	<thead>
		    		<th scope="col">Time</th>
		    		<th scope="col">Stock Price</th>
		    	</thead>
		    	<tbody>
			    	<tr>
			    		<th scope="row"><?php buildLastMinute(1, $lastMinute, $amPmAbbr); ?></th>
			    		<td class="share-price">$10</td>
			    	</tr>
			    	<tr>
			    		<th scope="row"><?php buildLastMinute(2, $lastMinute, $amPmAbbr); ?></th>
			    		<td class="share-price">$10</td>
			    	</tr>
			    	<tr>
			    		<th scope="row"><?php buildLastMinute(3, $lastMinute, $amPmAbbr); ?></th>
			    		<td class="share-price">$10</td>
			    	</tr>
			    	<tr>
			    		<th scope="row"><?php buildLastMinute(4, $lastMinute, $amPmAbbr); ?></th>
			    		<td class="share-price">$10</td>
			    	</tr>
			    	<tr>
			    		<th scope="row"><?php buildLastMinute(5, $lastMinute, $amPmAbbr); ?></th>
			    		<td class="share-price">$10</td>
			    	</tr>		    	
			    </tbody>
		    </table><!-- .stock-table -->

		</div><!-- .stock-table-wrapper -->

	</div><!-- .wrap -->


<?php require($_SERVER["DOCUMENT_ROOT"]."/-/_inc/close.php"); echo "\n"; ?>    