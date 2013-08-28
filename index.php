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
	    	<h1>Last updated <span class="current-time"><?php echo date('g:i:s a'); ?></span>. <strong class="static-page-message"><a href="../">Refresh</a> for updates.</strong></h1>
	    </section><!-- .last-updated -->

	    <div class="stock-table-wrapper">

		    <table class="stock-table">
		    	<thead>
		    		<th class="table-headers" scope="col">Time</th>
		    		<th class="table-headers" scope="col">Share Price</th>
		    	</thead>
		    	<tbody>
		    		<?php

			    		$lastMinute = intval(date('i'))-1;
						if($lastMinute < 10){
							$lastMinute = '0' . strval($lastMinute);
						}

						if(date('a') == 'am'){
							$amPmAbbr = 'Ante Meridien';
						}else{
							$amPmAbbr = 'Post Meridien';
						}

		    			for($i == 0; $i < 5; $i++){
		    				$output = '';
		    				if($i > 0){
		    					$output .= "\t\t\t\t"; 
		    				}
		    				$output .= '<tr>' . "\n\t\t\t\t\t";
		    				$output .= '<th class="time-label" scope="row">';
		    				$output .= date('g:') . $lastMinute . ':' . (($i+1) * 10) . ' <abbr title="' . $amPmAbbr .'">' . date('a') . '</abbr>';
		    				$output .= '</th>' . "\n\t\t\t\t\t";
		    				$output .= '<td class="share-price"><span class="share-price-tooltip">$<b class="share-price-num">';
		    				$output .= rand(0, 200);
		    				$output .= '</b></span></td>' . "\n\t\t\t\t";
		    				$output .= '</tr>' . "\n";

		    				echo $output;
		    			}

		    		?>		    	
			    </tbody>
		    </table><!-- .stock-table -->

		</div><!-- .stock-table-wrapper -->

	</div><!-- .wrap -->


<?php require($_SERVER["DOCUMENT_ROOT"]."/-/_inc/close.php"); echo "\n"; ?>    