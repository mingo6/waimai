<?php
 goto O9FG8; dJRTc: $item = pdo_fetch("\123\105\x4c\x45\x43\x54\x20\x2a\40\x46\x52\x4f\115\40" . tablename("\155\x69\150\x75\x61\137\155\x61\x6c\x6c\x5f\x76\x69\162\x74\x75\x61\154\137\164\x79\x70\x65") . "\x20\127\110\105\122\x45\40\151\144\x3d\72\151\144\x20\141\x6e\x64\x20\x75\156\151\141\143\151\x64\75\x3a\x75\x6e\151\x61\143\x69\144\x20", array("\x3a\151\x64" => $id, "\x3a\165\x6e\151\x61\143\151\144" => $_W["\x75\156\151\x61\143\151\x64"])); goto YtzSX; JGOsH: if (!($operation == "\151\155\160\157\162\x74")) { goto U1ghl; } goto Mg0be; lMgmV: if (!empty($noinsert)) { goto eECKA; } goto pUT02; D4Y2T: T9eyZ: goto VT2Az; ehzHQ: pkE2u: goto YLnVC; ELx9a: $item["\x66\151\x65\154\x64\163"] = iunserializer($item["\146\x69\145\154\x64\163"]); goto sfUfu; FSUGG: $this->adminMessage("\350\231\232\346\x8b\237\347\211\xa9\xe5\223\201\xe6\xa8\xa1\346\235\xbf\xe4\xb8\215\345\xad\230\345\234\xa8", referer(), "\x65\162\x72\x6f\162"); goto mQukm; YtzSX: if (!empty($item)) { goto tJc98; } goto MedMh; jmL1r: U1ghl: goto HgY77; FK2yY: $columns = array(); goto jusvK; jusvK: foreach ($item["\146\151\145\154\x64\x73"] as $key => $name) { $columns[] = array("\x74\151\x74\154\145" => $name . "\50" . $key . "\x29", "\146\x69\145\x6c\144" => '', "\x77\151\x64\x74\150" => 24); m21em: } goto debWS; tGeFW: eECKA: goto UQ_Rh; KYJPD: goto HLSlt; goto tGeFW; KKGaX: $this->adminMessage("\xe9\203\250\xe5\x88\x86\xe6\225\xb0\346\215\xae\xe4\277\x9d\xe5\255\230\346\210\x90\345\x8a\x9f\xef\xbc\201" . $tip, '', "\x77\x61\x72\x6e\x69\x6e\147"); goto BEV0c; ruO19: if ($operation == "\x74\145\x6d\x70") { goto HV13f; } goto JGOsH; YocyP: $operation = !empty($_GPC["\x6f\x70"]) ? $_GPC["\x6f\160"] : "\151\155\x70\x6f\162\x74"; goto ruO19; vqqO1: $item = pdo_fetch("\x53\105\114\x45\103\124\40\x2a\40\x46\x52\117\115\x20" . tablename("\155\151\x68\165\x61\137\155\141\x6c\154\137\166\151\162\x74\x75\x61\154\137\164\x79\x70\x65") . "\40\x57\110\105\x52\105\x20\x69\144\x3d\72\151\144\40\141\x6e\x64\40\165\156\151\x61\143\151\144\75\x3a\x75\156\151\x61\x63\151\144\x20", array("\x3a\x69\144" => $id, "\x3a\x75\x6e\151\x61\x63\x69\144" => $_W["\165\x6e\x69\x61\x63\151\144"])); goto o3t2Q; qhcOY: $virtual = new VirtualModel(); goto YocyP; BEV0c: HLSlt: goto jmL1r; UQ_Rh: $tip = "\x3c\142\162\76\346\234\xaa\344\277\x9d\345\xad\x98\xe6\210\x90\xe5\212\237\xe7\x9a\204\xe6\x95\xb0\xe6\x8d\xae\xef\274\232\344\270\273\xe9\x94\256\x3d" . $noinsert . "\74\142\162\76\xe5\xa4\xb1\350\264\xa5\xe5\x8e\x9f\xe5\233\xa0\xef\274\232\345\267\xb2\xe7\273\217\xe4\xbd\277\xe7\224\250\xe6\x97\xa0\xe6\xb3\225\xe6\233\264\xe6\224\xb9"; goto KKGaX; mQukm: zPIpp: goto MOnPQ; yMTvl: HV13f: goto PjDRx; YLnVC: foreach ($datas as $d) { goto TVwdN; J3Cl_: pdo_update("\155\151\150\x75\141\137\x6d\x61\154\154\x5f\166\151\x72\x74\x75\x61\x6c\x5f\x64\x61\x74\141", $d, array("\x69\144" => $olddata["\151\x64"])); goto i05WB; TaMLe: k6xpd: goto MD6S6; dfkrN: if (empty($olddata["\157\160\145\x6e\151\144"])) { goto JgYMg; } goto k3Fhh; dhWrM: if (empty($olddata)) { goto IyZV2; } goto dfkrN; X9cDV: pdo_update("\x6d\x69\150\165\x61\137\155\x61\x6c\154\x5f\x76\x69\162\164\x75\x61\154\x5f\x74\171\x70\145", "\141\x6c\154\x64\141\164\x61\x3d\x61\154\x6c\144\x61\164\141\53\61", array("\x69\x64" => $item["\151\x64"])); goto TaMLe; wZDye: IyZV2: goto fgUD6; MD6S6: $noinsert = ''; goto isbd3; jeZ0N: JgYMg: goto J3Cl_; fgUD6: pdo_insert("\x6d\x69\150\165\x61\137\x6d\141\154\x6c\x5f\x76\x69\x72\x74\165\x61\x6c\x5f\x64\x61\164\141", $d); goto X9cDV; RZZU1: goto AG185; goto jeZ0N; isbd3: vHifS: goto HNOoe; i05WB: AG185: goto Xtudb; TVwdN: $olddata = pdo_fetch("\x53\105\x4c\105\x43\124\40\52\40\x46\122\x4f\x4d\40" . tablename("\155\151\150\165\141\137\x6d\141\154\154\137\x76\151\x72\x74\165\x61\x6c\x5f\144\x61\x74\x61") . "\40\x57\x48\105\x52\x45\40\x70\x76\141\154\165\x65\x3d\x3a\160\166\x61\154\165\145\x20\141\x6e\x64\x20\x74\171\160\x65\151\x64\x3d\x3a\164\x79\160\x65\151\144\x20\141\x6e\x64\x20\x75\x6e\x69\x61\143\151\x64\x3d\72\x75\156\x69\x61\143\x69\144\40", array("\x3a\x70\166\141\x6c\165\x65" => $d["\160\x76\141\154\165\x65"], "\x3a\x74\171\160\x65\x69\x64" => $_GPC["\x74\171\160\145\151\x64"], "\72\x75\x6e\151\x61\x63\x69\144" => $_W["\165\x6e\x69\x61\143\x69\x64"])); goto dhWrM; Xtudb: goto k6xpd; goto wZDye; k3Fhh: $noinsert .= $d["\160\x76\141\x6c\x75\x65"] . "\x2c"; goto RZZU1; HNOoe: } goto D4Y2T; Mg0be: $id = intval($_GPC["\164\x79\160\145\151\144"]); goto dJRTc; KPU69: $rows = $excel->import("\x65\x78\143\145\x6c\x66\151\x6c\x65"); goto ELx9a; sfUfu: foreach ($rows as $rownum => $col) { goto qxmV0; yaUs0: Hm5WQ: goto bcjvU; wtfvR: $index = 0; goto iXPzV; iXPzV: foreach ($item["\146\x69\x65\x6c\x64\163"] as $k => $f) { goto xrYyp; NZdgu: z75sP: goto EmWd2; CRHW6: $index++; goto NZdgu; xrYyp: $data["\x66\x69\x65\x6c\144\x73"][$k] = $col[$index]; goto CRHW6; EmWd2: } goto zS6Qo; ckkdx: $datas[] = $data; goto yaUs0; qxmV0: $data = array("\x74\171\x70\x65\x69\144" => $id, "\x70\x76\141\154\165\x65" => $col[0], "\x66\151\x65\154\144\x73" => array(), "\165\x6e\x69\141\x63\x69\x64" => $_W["\x75\x6e\151\141\x63\x69\144"]); goto wtfvR; QBw1A: $data["\146\x69\145\x6c\x64\x73"] = iserializer($data["\146\151\x65\x6c\144\163"]); goto ckkdx; zS6Qo: RIeRF: goto QBw1A; bcjvU: } goto ehzHQ; MOnPQ: $item["\x66\151\x65\x6c\144\x73"] = iunserializer($item["\146\151\145\x6c\144\163"]); goto FK2yY; O9FG8: global $_W, $_GPC; goto lotEM; debWS: FGF1U: goto bkvj3; wzgtC: tJc98: goto KPU69; pUT02: $this->adminMessage("\xe5\xaf\xbc\xe5\205\245\xe6\x88\220\xe5\x8a\237\357\274\x81" . $tip, $this->createWebUrl("\x76\x69\x72\164\x75\x61\x6c\x5f\144\x61\x74\x61", array("\x74\171\160\x65\x69\144" => $_GPC["\164\x79\x70\145\x69\x64"]))); goto KYJPD; bkvj3: $excel->export(array(), array("\x74\151\x74\x6c\145" => "\xe6\x95\260\346\x8d\xae\xe6\250\241\346\235\xbf", "\143\157\154\165\x6d\x6e\163" => $columns)); goto wQ8sG; o3t2Q: if (!empty($item)) { goto zPIpp; } goto FSUGG; PjDRx: $id = intval($_GPC["\151\144"]); goto vqqO1; HgY77: goto suJcp; goto yMTvl; VT2Az: $virtual->updateStock($typeid); goto lMgmV; lotEM: $excel = new ExcelModel(); goto qhcOY; MedMh: $this->adminMessage("\350\231\x9a\xe6\213\237\xe7\x89\251\345\x93\x81\346\xa8\241\346\x9d\277\xe4\xb8\x8d\345\255\x98\xe5\x9c\250", referer(), "\145\x72\x72\157\162"); goto wzgtC; wQ8sG: suJcp: