<?php

	$currentTime = date('g:i:s a');

	$lastMinute = intval(date('i'))-1;

	if(date('a') == 'am'){
		$amPmAbbr = 'Ante Meridien';
	}else{
		$amPmAbbr = 'Post Meridien';
	}
	


	function buildLastMinute($multiple, $min, $amPmAbbr){
		echo date('g:') . $min . ':' . ($multiple * 10) . ' <abbr title="' . $amPmAbbr .'">' . date('a') . '</abbr>';
	}

?>