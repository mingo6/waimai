<?php
 goto WdOaI; yBh_B: $sharedata = array("\164\151\164\x6c\145" => $share[0]["\160\141\x72\141\x6d\x73"]["\x74\x69\x74\x6c\145"], "\x64\x65\163\x63" => $share[0]["\160\x61\162\141\155\x73"]["\144\x65\x73\x63"], "\x6c\151\x6e\x6b" => '', "\151\155\147\x55\162\154" => tomedia($this->module["\x63\x6f\156\x66\x69\x67"]["\154\x6f\x67\x6f"])); goto stane; vAc1f: $share = json_decode($page["\x62\x61\x73\x69\143\160\x61\x72\x61\x6d\163"], true); goto SyCj0; vHets: $title = $share[0]["\x70\141\x72\141\x6d\x73"]["\164\151\164\x6c\x65"]; goto CR7SR; SyCj0: if (empty($share)) { goto r73_N; } goto yBh_B; WdOaI: global $_W, $_GPC; goto iTypL; CR7SR: $template = $this->selectTemplate("\164\x65\155\x70\57\151\x6e\144\x65\170\x2f\151\x6e\144\145\170"); goto viYme; iTypL: $page = $this->getSinglePage($_GPC["\151\144"]); goto vAc1f; HzNBi: $initParams = array("\157\160" => "\151\156\x64\145\x78", "\163\150\x61\x72\145\144\x61\x74\141" => empty($sharedata) ? "\x22\x22" : $sharedata); goto vHets; stane: r73_N: goto HzNBi; viYme: include $this->template($template); goto RfVc2; RfVc2: exit;