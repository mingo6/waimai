<?php
/**
 * [WeEngine System] Copyright (c) 2014 WE7.CC
 * WeEngine is NOT a free software, it under the license terms, visited http://www.m213.cn/ for more details.
 */
defined('IN_IA') or exit('Access Denied');
isetcookie('__session', '', -10000);
$forward = $_GPC['forward'];
if(empty($forward)) {
	$forward = './?refersh';
}
header('Location:' . url('user/login'));
