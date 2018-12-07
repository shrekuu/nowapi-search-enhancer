const cities = [
  {
    display_text: '阿拉伯联合酋长国，迪拜（Dubai）',
    search_text: 'alblhqzg, db; a la bo lian he qiu zhang guo, di bai; 阿拉伯联合酋长国，迪拜（Dubai）',
    weaid: 2190
  },
  {
    display_text: '安徽，合肥，城区',
    search_text: 'ah, hf, cq; an hui, he fei, cheng qu; 安徽，合肥，城区',
    weaid: 77
  },
  {
    display_text: '安徽，合肥，长丰',
    search_text: 'ah, hf, zf; an hui, he fei, zhang feng; 安徽，合肥，长丰',
    weaid: 536
  },
  {
    display_text: '安徽，合肥，肥东',
    search_text: 'ah, hf, fd; an hui, he fei, fei dong; 安徽，合肥，肥东',
    weaid: 710
  },
  {
    display_text: '安徽，合肥，肥西',
    search_text: 'ah, hf, fx; an hui, he fei, fei xi; 安徽，合肥，肥西',
    weaid: 750
  },
  {
    display_text: '安徽，合肥，巢湖',
    search_text: 'ah, hf, ch; an hui, he fei, chao hu; 安徽，合肥，巢湖',
    weaid: 2502
  },
  {
    display_text: '安徽，合肥，庐江',
    search_text: 'ah, hf, lj; an hui, he fei, lu jiang; 安徽，合肥，庐江',
    weaid: 2503
  },
  {
    display_text: '安徽，蚌埠，城区',
    search_text: 'ah, bb, cq; an hui, beng bu, cheng qu; 安徽，蚌埠，城区',
    weaid: 93
  },
  {
    display_text: '安徽，蚌埠，怀远',
    search_text: 'ah, bb, hy; an hui, beng bu, huai yuan; 安徽，蚌埠，怀远',
    weaid: 961
  },
  {
    display_text: '安徽，蚌埠，固镇',
    search_text: 'ah, bb, gz; an hui, beng bu, gu zhen; 安徽，蚌埠，固镇',
    weaid: 841
  },
  {
    display_text: '安徽，蚌埠，五河',
    search_text: 'ah, bb, wh; an hui, beng bu, wu he; 安徽，蚌埠，五河',
    weaid: 1768
  },
  {
    display_text: '安徽，芜湖，城区',
    search_text: 'ah, wh, cq; an hui, wu hu, cheng qu; 安徽，芜湖，城区',
    weaid: 78
  },
  {
    display_text: '安徽，芜湖，繁昌',
    search_text: 'ah, wh, fc; an hui, wu hu, fan chang; 安徽，芜湖，繁昌',
    weaid: 705
  },
  {
    display_text: '安徽，芜湖，芜湖县',
    search_text: 'ah, wh, whx; an hui, wu hu, wu hu xian; 安徽，芜湖，芜湖县',
    weaid: 2504
  },
  {
    display_text: '安徽，芜湖，南陵',
    search_text: 'ah, wh, nl; an hui, wu hu, nan ling; 安徽，芜湖，南陵',
    weaid: 1376
  },
  {
    display_text: '安徽，芜湖，无为',
    search_text: 'ah, wh, ww; an hui, wu hu, wu wei; 安徽，芜湖，无为',
    weaid: 2505
  },
  {
    display_text: '安徽，淮南，城区',
    search_text: 'ah, hn, cq; an hui, huai nan, cheng qu; 安徽，淮南，城区',
    weaid: 79
  },
  {
    display_text: '安徽，淮南，凤台',
    search_text: 'ah, hn, ft; an hui, huai nan, feng tai; 安徽，淮南，凤台',
    weaid: 745
  },
  {
    display_text: '安徽，淮南，潘集',
    search_text: 'ah, hn, pj; an hui, huai nan, pan ji; 安徽，淮南，潘集',
    weaid: 2506
  },
  {
    display_text: '安徽，淮南，寿县',
    search_text: 'ah, hn, sx; an hui, huai nan, shou xian; 安徽，淮南，寿县',
    weaid: 2650
  },
  {
    display_text: '安徽，马鞍山，城区',
    search_text: 'ah, mas, cq; an hui, ma an shan, cheng qu; 安徽，马鞍山，城区',
    weaid: 80
  },
  {
    display_text: '安徽，马鞍山，当涂',
    search_text: 'ah, mas, dt; an hui, ma an shan, dang tu; 安徽，马鞍山，当涂',
    weaid: 665
  },
  {
    display_text: '安徽，马鞍山，含山',
    search_text: 'ah, mas, hs; an hui, ma an shan, han shan; 安徽，马鞍山，含山',
    weaid: 2507
  },
  {
    display_text: '安徽，马鞍山，和县',
    search_text: 'ah, mas, hx; an hui, ma an shan, he xian; 安徽，马鞍山，和县',
    weaid: 2508
  },
  {
    display_text: '安徽，安庆，城区',
    search_text: 'ah, aq, cq; an hui, an qing, cheng qu; 安徽，安庆，城区',
    weaid: 81
  },
  {
    display_text: '安徽，安庆，太湖',
    search_text: 'ah, aq, th; an hui, an qing, tai hu; 安徽，安庆，太湖',
    weaid: 1693
  },
  {
    display_text: '安徽，安庆，潜山',
    search_text: 'ah, aq, qs; an hui, an qing, qian shan; 安徽，安庆，潜山',
    weaid: 1490
  },
  {
    display_text: '安徽，安庆，怀宁',
    search_text: 'ah, aq, hn; an hui, an qing, huai ning; 安徽，安庆，怀宁',
    weaid: 909
  },
  {
    display_text: '安徽，安庆，宿松',
    search_text: 'ah, aq, ss; an hui, an qing, su song; 安徽，安庆，宿松',
    weaid: 1627
  },
  {
    display_text: '安徽，安庆，望江',
    search_text: 'ah, aq, wj; an hui, an qing, wang jiang; 安徽，安庆，望江',
    weaid: 1773
  },
  {
    display_text: '安徽，安庆，岳西',
    search_text: 'ah, aq, yx; an hui, an qing, yue xi; 安徽，安庆，岳西',
    weaid: 2065
  },
  {
    display_text: '安徽，安庆，桐城',
    search_text: 'ah, aq, tc; an hui, an qing, tong cheng; 安徽，安庆，桐城',
    weaid: 1673
  },
  {
    display_text: '安徽，宿州，城区',
    search_text: 'ah, sz, cq; an hui, su zhou, cheng qu; 安徽，宿州，城区',
    weaid: 82
  },
  {
    display_text: '安徽，宿州，砀山',
    search_text: 'ah, sz, ds; an hui, su zhou, dang shan; 安徽，宿州，砀山',
    weaid: 653
  },
  {
    display_text: '安徽，宿州，灵璧',
    search_text: 'ah, sz, lb; an hui, su zhou, ling bi; 安徽，宿州，灵璧',
    weaid: 2185
  },
  {
    display_text: '安徽，宿州，泗县',
    search_text: 'ah, sz, sx; an hui, su zhou, si xian; 安徽，宿州，泗县',
    weaid: 1639
  },
  {
    display_text: '安徽，宿州，萧县',
    search_text: 'ah, sz, xx; an hui, su zhou, xiao xian; 安徽，宿州，萧县',
    weaid: 1920
  },
  {
    display_text: '安徽，阜阳，城区',
    search_text: 'ah, fy, cq; an hui, fu yang, cheng qu; 安徽，阜阳，城区',
    weaid: 83
  },
  {
    display_text: '安徽，阜阳，阜南',
    search_text: 'ah, fy, fn; an hui, fu yang, fu nan; 安徽，阜阳，阜南',
    weaid: 726
  },
  {
    display_text: '安徽，阜阳，颍上',
    search_text: 'ah, fy, ys; an hui, fu yang, ying shang; 安徽，阜阳，颍上',
    weaid: 2039
  },
  {
    display_text: '安徽，阜阳，临泉',
    search_text: 'ah, fy, lq; an hui, fu yang, lin quan; 安徽，阜阳，临泉',
    weaid: 1196
  },
  {
    display_text: '安徽，阜阳，界首',
    search_text: 'ah, fy, js; an hui, fu yang, jie shou; 安徽，阜阳，界首',
    weaid: 1026
  },
  {
    display_text: '安徽，阜阳，太和',
    search_text: 'ah, fy, th; an hui, fu yang, tai he; 安徽，阜阳，太和',
    weaid: 1690
  },
  {
    display_text: '安徽，亳州，城区',
    search_text: 'ah, bz, cq; an hui, bo zhou, cheng qu; 安徽，亳州，城区',
    weaid: 84
  },
  {
    display_text: '安徽，亳州，涡阳',
    search_text: 'ah, bz, wy; an hui, bo zhou, wo yang; 安徽，亳州，涡阳',
    weaid: 828
  },
  {
    display_text: '安徽，亳州，利辛',
    search_text: 'ah, bz, lx; an hui, bo zhou, li xin; 安徽，亳州，利辛',
    weaid: 1239
  },
  {
    display_text: '安徽，亳州，蒙城',
    search_text: 'ah, bz, mc; an hui, bo zhou, meng cheng; 安徽，亳州，蒙城',
    weaid: 1284
  },
  {
    display_text: '安徽，黄山，城区',
    search_text: 'ah, hs, cq; an hui, huang shan, cheng qu; 安徽，黄山，城区',
    weaid: 85
  },
  {
    display_text: '安徽，黄山，黄山区',
    search_text: 'ah, hs, hsq; an hui, huang shan, huang shan qu; 安徽，黄山，黄山区',
    weaid: 2509
  },
  {
    display_text: '安徽，黄山，屯溪',
    search_text: 'ah, hs, tx; an hui, huang shan, tun xi; 安徽，黄山，屯溪',
    weaid: 2510
  },
  {
    display_text: '安徽，黄山，祁门',
    search_text: 'ah, hs, qm; an hui, huang shan, qi men; 安徽，黄山，祁门',
    weaid: 1484
  },
  {
    display_text: '安徽，黄山，黟县',
    search_text: 'ah, hs, yx; an hui, huang shan, yi xian; 安徽，黄山，黟县',
    weaid: 2064
  },
  {
    display_text: '安徽，黄山，歙县',
    search_text: 'ah, hs, sx; an hui, huang shan, she xian; 安徽，黄山，歙县',
    weaid: 1638
  },
  {
    display_text: '安徽，黄山，休宁',
    search_text: 'ah, hs, xn; an hui, huang shan, xiu ning; 安徽，黄山，休宁',
    weaid: 1890
  },
  {
    display_text: '安徽，滁州，城区',
    search_text: 'ah, cz, cq; an hui, chu zhou, cheng qu; 安徽，滁州，城区',
    weaid: 86
  },
  {
    display_text: '安徽，滁州，凤阳',
    search_text: 'ah, cz, fy; an hui, chu zhou, feng yang; 安徽，滁州，凤阳',
    weaid: 758
  },
  {
    display_text: '安徽，滁州，明光',
    search_text: 'ah, cz, mg; an hui, chu zhou, ming guang; 安徽，滁州，明光',
    weaid: 1294
  },
  {
    display_text: '安徽，滁州，定远',
    search_text: 'ah, cz, dy; an hui, chu zhou, ding yuan; 安徽，滁州，定远',
    weaid: 684
  },
  {
    display_text: '安徽，滁州，全椒',
    search_text: 'ah, cz, qj; an hui, chu zhou, quan jiao; 安徽，滁州，全椒',
    weaid: 1476
  },
  {
    display_text: '安徽，滁州，来安',
    search_text: 'ah, cz, la; an hui, chu zhou, lai an; 安徽，滁州，来安',
    weaid: 1105
  },
  {
    display_text: '安徽，滁州，天长',
    search_text: 'ah, cz, tz; an hui, chu zhou, tian zhang; 安徽，滁州，天长',
    weaid: 1674
  },
  {
    display_text: '安徽，淮北，城区',
    search_text: 'ah, hb, cq; an hui, huai bei, cheng qu; 安徽，淮北，城区',
    weaid: 87
  },
  {
    display_text: '安徽，淮北，濉溪',
    search_text: 'ah, hb, sx; an hui, huai bei, sui xi; 安徽，淮北，濉溪',
    weaid: 1637
  },
  {
    display_text: '安徽，铜陵，城区',
    search_text: 'ah, tl, cq; an hui, tong ling, cheng qu; 安徽，铜陵，城区',
    weaid: 88
  },
  {
    display_text: '安徽，铜陵，枞阳',
    search_text: 'ah, tl, zy; an hui, tong ling, zong yang; 安徽，铜陵，枞阳',
    weaid: 2166
  },
  {
    display_text: '安徽，宣城，城区',
    search_text: 'ah, xc, cq; an hui, xuan cheng, cheng qu; 安徽，宣城，城区',
    weaid: 89
  },
  {
    display_text: '安徽，宣城，泾县',
    search_text: 'ah, xc, jx; an hui, xuan cheng, jing xian; 安徽，宣城，泾县',
    weaid: 1048
  },
  {
    display_text: '安徽，宣城，旌德',
    search_text: 'ah, xc, jd; an hui, xuan cheng, jing de; 安徽，宣城，旌德',
    weaid: 983
  },
  {
    display_text: '安徽，宣城，宁国',
    search_text: 'ah, xc, ng; an hui, xuan cheng, ning guo; 安徽，宣城，宁国',
    weaid: 1361
  },
  {
    display_text: '安徽，宣城，绩溪',
    search_text: 'ah, xc, jx; an hui, xuan cheng, ji xi; 安徽，宣城，绩溪',
    weaid: 1047
  },
  {
    display_text: '安徽，宣城，广德',
    search_text: 'ah, xc, gd; an hui, xuan cheng, guang de; 安徽，宣城，广德',
    weaid: 779
  },
  {
    display_text: '安徽，宣城，郎溪',
    search_text: 'ah, xc, lx; an hui, xuan cheng, lang xi; 安徽，宣城，郎溪',
    weaid: 1238
  },
  {
    display_text: '安徽，六安，城区',
    search_text: 'ah, la, cq; an hui, lu an, cheng qu; 安徽，六安，城区',
    weaid: 90
  },
  {
    display_text: '安徽，六安，霍邱',
    search_text: 'ah, la, hq; an hui, lu an, huo qiu; 安徽，六安，霍邱',
    weaid: 919
  },
  {
    display_text: '安徽，六安，金寨',
    search_text: 'ah, la, jz; an hui, lu an, jin zhai; 安徽，六安，金寨',
    weaid: 1077
  },
  {
    display_text: '安徽，六安，霍山',
    search_text: 'ah, la, hs; an hui, lu an, huo shan; 安徽，六安，霍山',
    weaid: 928
  },
  {
    display_text: '安徽，六安，舒城',
    search_text: 'ah, la, sc; an hui, lu an, shu cheng; 安徽，六安，舒城',
    weaid: 1558
  },
  {
    display_text: '安徽，池州，城区',
    search_text: 'ah, cz, cq; an hui, chi zhou, cheng qu; 安徽，池州，城区',
    weaid: 92
  },
  {
    display_text: '安徽，池州，东至',
    search_text: 'ah, cz, dz; an hui, chi zhou, dong zhi; 安徽，池州，东至',
    weaid: 687
  },
  {
    display_text: '安徽，池州，青阳',
    search_text: 'ah, cz, qy; an hui, chi zhou, qing yang; 安徽，池州，青阳',
    weaid: 1511
  },
  {
    display_text: '安徽，池州，九华山',
    search_text: 'ah, cz, jhs; an hui, chi zhou, jiu hua shan; 安徽，池州，九华山',
    weaid: 2512
  },
  {
    display_text: '安徽，池州，石台',
    search_text: 'ah, cz, st; an hui, chi zhou, shi tai; 安徽，池州，石台',
    weaid: 1628
  },
  {
    display_text: '澳大利亚，悉尼（Sydney）',
    search_text: 'adly, xn; ao da li ya, xi ni; 澳大利亚，悉尼（Sydney）',
    weaid: 2192
  },
  {
    display_text: '澳大利亚，墨尔本（Melbourne）',
    search_text: 'adly, meb; ao da li ya, mo er ben; 澳大利亚，墨尔本（Melbourne）',
    weaid: 2193
  },
  {
    display_text: '澳大利亚，惠灵顿（Wellington）',
    search_text: 'adly, hld; ao da li ya, hui ling dun; 澳大利亚，惠灵顿（Wellington）',
    weaid: 2209
  },
  {
    display_text: '澳门，城区',
    search_text: 'am, cq; ao men, cheng qu; 澳门，城区',
    weaid: 2631
  },
  {
    display_text: '澳门，氹仔岛',
    search_text: 'am, dzd; ao men, dang zai dao; 澳门，氹仔岛',
    weaid: 2632
  },
  {
    display_text: '澳门，路环岛',
    search_text: 'am, lhd; ao men, lu huan dao; 澳门，路环岛',
    weaid: 2633
  },
  {
    display_text: '巴西，巴巴塞纳（Barbacena）',
    search_text: 'bx, bbsn; ba xi, ba ba sai na; 巴西，巴巴塞纳（Barbacena）',
    weaid: 2701
  },
  {
    display_text: '巴西，阿拉加尔萨斯（Aragarcas）',
    search_text: 'bx, aljess; ba xi, a la jia er sa si; 巴西，阿拉加尔萨斯（Aragarcas）',
    weaid: 2708
  },
  {
    display_text: '巴西，阿尔梅纳拉（Almenara）',
    search_text: 'bx, aemnl; ba xi, a er mei na la; 巴西，阿尔梅纳拉（Almenara）',
    weaid: 2713
  },
  {
    display_text: '巴西，阿波罗荷斯（Abrolhos）',
    search_text: 'bx, ablhs; ba xi, a bo luo he si; 巴西，阿波罗荷斯（Abrolhos）',
    weaid: 2702
  },
  {
    display_text: '巴西，阿圭达瓦讷（Aquidauana）',
    search_text: 'bx, agdwn; ba xi, a gui da wa ne; 巴西，阿圭达瓦讷（Aquidauana）',
    weaid: 2707
  },
  {
    display_text: '巴西，阿尔弗雷多查维斯（Alfredochaves）',
    search_text: 'bx, aefldcws; ba xi, a er fu lei duo cha wei si; 巴西，阿尔弗雷多查维斯（Alfredochaves）',
    weaid: 2704
  },
  {
    display_text: '巴西，阿凯劳（Acarau）',
    search_text: 'bx, akl; ba xi, a kai lao; 巴西，阿凯劳（Acarau）',
    weaid: 2705
  },
  {
    display_text: '巴西，阿拉瓜伊纳（Araguaina）',
    search_text: 'bx, algyn; ba xi, a la gua yi na; 巴西，阿拉瓜伊纳（Araguaina）',
    weaid: 2710
  },
  {
    display_text: '巴西，阿凯劳（Acarau）',
    search_text: 'bx, akl; ba xi, a kai lao; 巴西，阿凯劳（Acarau）',
    weaid: 2711
  },
  {
    display_text: '巴西，阿尔塔米拉（Altamira）',
    search_text: 'bx, aetml; ba xi, a er ta mi la; 巴西，阿尔塔米拉（Altamira）',
    weaid: 2706
  },
  {
    display_text: '巴西，阿尔塔米拉机场（Altamira Airport）',
    search_text: 'bx, aetmljc; ba xi, a er ta mi la ji chang; 巴西，阿尔塔米拉机场（Altamira Airport）',
    weaid: 2712
  },
  {
    display_text: '巴西，阿拉瓜伊纳（Araguaina）',
    search_text: 'bx, algyn; ba xi, a la gua yi na; 巴西，阿拉瓜伊纳（Araguaina）',
    weaid: 2703
  },
  {
    display_text: '巴西，阿波罗荷斯（Abrolhos）',
    search_text: 'bx, ablhs; ba xi, a bo luo he si; 巴西，阿波罗荷斯（Abrolhos）',
    weaid: 2709
  },
  {
    display_text: '北京，城区',
    search_text: 'bj, cq; bei jing, cheng qu; 北京，城区',
    weaid: 1
  },
  {
    display_text: '北京，海淀',
    search_text: 'bj, hd; bei jing, hai dian; 北京，海淀',
    weaid: 22
  },
  {
    display_text: '北京，朝阳',
    search_text: 'bj, zy; bei jing, zhao yang; 北京，朝阳',
    weaid: 2
  },
  {
    display_text: '北京，顺义',
    search_text: 'bj, sy; bei jing, shun yi; 北京，顺义',
    weaid: 3
  },
  {
    display_text: '北京，怀柔',
    search_text: 'bj, hr; bei jing, huai rou; 北京，怀柔',
    weaid: 4
  },
  {
    display_text: '北京，通州',
    search_text: 'bj, tz; bei jing, tong zhou; 北京，通州',
    weaid: 5
  },
  {
    display_text: '北京，昌平',
    search_text: 'bj, cp; bei jing, chang ping; 北京，昌平',
    weaid: 6
  },
  {
    display_text: '北京，延庆',
    search_text: 'bj, yq; bei jing, yan qing; 北京，延庆',
    weaid: 7
  },
  {
    display_text: '北京，丰台',
    search_text: 'bj, ft; bei jing, feng tai; 北京，丰台',
    weaid: 8
  },
  {
    display_text: '北京，石景山',
    search_text: 'bj, sjs; bei jing, shi jing shan; 北京，石景山',
    weaid: 9
  },
  {
    display_text: '北京，大兴',
    search_text: 'bj, dx; bei jing, da xing; 北京，大兴',
    weaid: 10
  },
  {
    display_text: '北京，房山',
    search_text: 'bj, fs; bei jing, fang shan; 北京，房山',
    weaid: 11
  },
  {
    display_text: '北京，密云',
    search_text: 'bj, my; bei jing, mi yun; 北京，密云',
    weaid: 12
  },
  {
    display_text: '北京，门头沟',
    search_text: 'bj, mtg; bei jing, men tou gou; 北京，门头沟',
    weaid: 13
  },
  {
    display_text: '北京，平谷',
    search_text: 'bj, pg; bei jing, ping gu; 北京，平谷',
    weaid: 14
  },
  {
    display_text: '德国，法兰克福（Frankfurt）',
    search_text: 'dg, flkf; de guo, fa lan ke fu; 德国，法兰克福（Frankfurt）',
    weaid: 2198
  },
  {
    display_text: '德国，慕尼黑（Munich）',
    search_text: 'dg, mnh; de guo, mu ni hei; 德国，慕尼黑（Munich）',
    weaid: 2202
  },
  {
    display_text: '俄罗斯，莫斯科（Moscow）',
    search_text: 'els, msk; e luo si, mo si ke; 俄罗斯，莫斯科（Moscow）',
    weaid: 2200
  },
  {
    display_text: '法国，巴黎（Paris）',
    search_text: 'fg, bl; fa guo, ba li; 法国，巴黎（Paris）',
    weaid: 2205
  },
  {
    display_text: '福建，福州，城区',
    search_text: 'fj, fz, cq; fu jian, fu zhou, cheng qu; 福建，福州，城区',
    weaid: 141
  },
  {
    display_text: '福建，福州，闽清',
    search_text: 'fj, fz, mq; fu jian, fu zhou, min qing; 福建，福州，闽清',
    weaid: 1321
  },
  {
    display_text: '福建，福州，闽侯',
    search_text: 'fj, fz, mh; fu jian, fu zhou, min hou; 福建，福州，闽侯',
    weaid: 2513
  },
  {
    display_text: '福建，福州，罗源',
    search_text: 'fj, fz, ly; fu jian, fu zhou, luo yuan; 福建，福州，罗源',
    weaid: 1266
  },
  {
    display_text: '福建，福州，连江',
    search_text: 'fj, fz, lj; fu jian, fu zhou, lian jiang; 福建，福州，连江',
    weaid: 1163
  },
  {
    display_text: '福建，福州，永泰',
    search_text: 'fj, fz, yt; fu jian, fu zhou, yong tai; 福建，福州，永泰',
    weaid: 2053
  },
  {
    display_text: '福建，福州，平潭',
    search_text: 'fj, fz, pt; fu jian, fu zhou, ping tan; 福建，福州，平潭',
    weaid: 1440
  },
  {
    display_text: '福建，福州，长乐',
    search_text: 'fj, fz, cl; fu jian, fu zhou, chang le; 福建，福州，长乐',
    weaid: 551
  },
  {
    display_text: '福建，福州，福清',
    search_text: 'fj, fz, fq; fu jian, fu zhou, fu qing; 福建，福州，福清',
    weaid: 733
  },
  {
    display_text: '福建，厦门，城区',
    search_text: 'fj, xm, cq; fu jian, xia men, cheng qu; 福建，厦门，城区',
    weaid: 147
  },
  {
    display_text: '福建，厦门，同安',
    search_text: 'fj, xm, ta; fu jian, xia men, tong an; 福建，厦门，同安',
    weaid: 1668
  },
  {
    display_text: '福建，宁德，城区',
    search_text: 'fj, nd, cq; fu jian, ning de, cheng qu; 福建，宁德，城区',
    weaid: 148
  },
  {
    display_text: '福建，宁德，古田',
    search_text: 'fj, nd, gt; fu jian, ning de, gu tian; 福建，宁德，古田',
    weaid: 820
  },
  {
    display_text: '福建，宁德，霞浦',
    search_text: 'fj, nd, xp; fu jian, ning de, xia pu; 福建，宁德，霞浦',
    weaid: 1896
  },
  {
    display_text: '福建，宁德，寿宁',
    search_text: 'fj, nd, sn; fu jian, ning de, shou ning; 福建，宁德，寿宁',
    weaid: 1606
  },
  {
    display_text: '福建，宁德，周宁',
    search_text: 'fj, nd, zn; fu jian, ning de, zhou ning; 福建，宁德，周宁',
    weaid: 2135
  },
  {
    display_text: '福建，宁德，福安',
    search_text: 'fj, nd, fa; fu jian, ning de, fu an; 福建，宁德，福安',
    weaid: 702
  },
  {
    display_text: '福建，宁德，柘荣',
    search_text: 'fj, nd, zr; fu jian, ning de, zhe rong; 福建，宁德，柘荣',
    weaid: 1721
  },
  {
    display_text: '福建，宁德，福鼎',
    search_text: 'fj, nd, fd; fu jian, ning de, fu ding; 福建，宁德，福鼎',
    weaid: 709
  },
  {
    display_text: '福建，宁德，屏南',
    search_text: 'fj, nd, pn; fu jian, ning de, ping nan; 福建，宁德，屏南',
    weaid: 1428
  },
  {
    display_text: '福建，莆田，城区',
    search_text: 'fj, pt, cq; fu jian, pu tian, cheng qu; 福建，莆田，城区',
    weaid: 149
  },
  {
    display_text: '福建，莆田，仙游',
    search_text: 'fj, pt, xy; fu jian, pu tian, xian you; 福建，莆田，仙游',
    weaid: 1939
  },
  {
    display_text: '福建，莆田，涵江',
    search_text: 'fj, pt, hj; fu jian, pu tian, han jiang; 福建，莆田，涵江',
    weaid: 2515
  },
  {
    display_text: '福建，莆田，秀屿',
    search_text: 'fj, pt, xy; fu jian, pu tian, xiu yu; 福建，莆田，秀屿',
    weaid: 2516
  },
  {
    display_text: '福建，莆田，荔城',
    search_text: 'fj, pt, lc; fu jian, pu tian, li cheng; 福建，莆田，荔城',
    weaid: 2517
  },
  {
    display_text: '福建，莆田，城厢',
    search_text: 'fj, pt, cx; fu jian, pu tian, cheng xiang; 福建，莆田，城厢',
    weaid: 2518
  },
  {
    display_text: '福建，泉州，城区',
    search_text: 'fj, qz, cq; fu jian, quan zhou, cheng qu; 福建，泉州，城区',
    weaid: 142
  },
  {
    display_text: '福建，泉州，安溪',
    search_text: 'fj, qz, ax; fu jian, quan zhou, an xi; 福建，泉州，安溪',
    weaid: 472
  },
  {
    display_text: '福建，泉州，永春',
    search_text: 'fj, qz, yc; fu jian, quan zhou, yong chun; 福建，泉州，永春',
    weaid: 1959
  },
  {
    display_text: '福建，泉州，德化',
    search_text: 'fj, qz, dh; fu jian, quan zhou, de hua; 福建，泉州，德化',
    weaid: 625
  },
  {
    display_text: '福建，泉州，南安',
    search_text: 'fj, qz, na; fu jian, quan zhou, nan an; 福建，泉州，南安',
    weaid: 1350
  },
  {
    display_text: '福建，泉州，惠安',
    search_text: 'fj, qz, ha; fu jian, quan zhou, hui an; 福建，泉州，惠安',
    weaid: 2520
  },
  {
    display_text: '福建，泉州，晋江',
    search_text: 'fj, qz, jj; fu jian, quan zhou, jin jiang; 福建，泉州，晋江',
    weaid: 145
  },
  {
    display_text: '福建，泉州，石狮',
    search_text: 'fj, qz, ss; fu jian, quan zhou, shi shi; 福建，泉州，石狮',
    weaid: 2521
  },
  {
    display_text: '福建，漳州，城区',
    search_text: 'fj, zz, cq; fu jian, zhang zhou, cheng qu; 福建，漳州，城区',
    weaid: 143
  },
  {
    display_text: '福建，漳州，长泰',
    search_text: 'fj, zz, zt; fu jian, zhang zhou, zhang tai; 福建，漳州，长泰',
    weaid: 573
  },
  {
    display_text: '福建，漳州，南靖',
    search_text: 'fj, zz, nj; fu jian, zhang zhou, nan jing; 福建，漳州，南靖',
    weaid: 1370
  },
  {
    display_text: '福建，漳州，平和',
    search_text: 'fj, zz, ph; fu jian, zhang zhou, ping he; 福建，漳州，平和',
    weaid: 1417
  },
  {
    display_text: '福建，漳州，龙海',
    search_text: 'fj, zz, lh; fu jian, zhang zhou, long hai; 福建，漳州，龙海',
    weaid: 1149
  },
  {
    display_text: '福建，漳州，漳浦',
    search_text: 'fj, zz, zp; fu jian, zhang zhou, zhang pu; 福建，漳州，漳浦',
    weaid: 2145
  },
  {
    display_text: '福建，漳州，诏安',
    search_text: 'fj, zz, za; fu jian, zhang zhou, zhao an; 福建，漳州，诏安',
    weaid: 2095
  },
  {
    display_text: '福建，漳州，东山',
    search_text: 'fj, zz, ds; fu jian, zhang zhou, dong shan; 福建，漳州，东山',
    weaid: 656
  },
  {
    display_text: '福建，漳州，云霄',
    search_text: 'fj, zz, yx; fu jian, zhang zhou, yun xiao; 福建，漳州，云霄',
    weaid: 2066
  },
  {
    display_text: '福建，漳州，华安',
    search_text: 'fj, zz, ha; fu jian, zhang zhou, hua an; 福建，漳州，华安',
    weaid: 849
  },
  {
    display_text: '福建，龙岩，城区',
    search_text: 'fj, ly, cq; fu jian, long yan, cheng qu; 福建，龙岩，城区',
    weaid: 144
  },
  {
    display_text: '福建，龙岩，长汀',
    search_text: 'fj, ly, ct; fu jian, long yan, chang ting; 福建，龙岩，长汀',
    weaid: 574
  },
  {
    display_text: '福建，龙岩，连城',
    search_text: 'fj, ly, lc; fu jian, long yan, lian cheng; 福建，龙岩，连城',
    weaid: 1119
  },
  {
    display_text: '福建，龙岩，武平',
    search_text: 'fj, ly, wp; fu jian, long yan, wu ping; 福建，龙岩，武平',
    weaid: 1790
  },
  {
    display_text: '福建，龙岩，上杭',
    search_text: 'fj, ly, sh; fu jian, long yan, shang hang; 福建，龙岩，上杭',
    weaid: 1579
  },
  {
    display_text: '福建，龙岩，永定',
    search_text: 'fj, ly, yd; fu jian, long yan, yong ding; 福建，龙岩，永定',
    weaid: 1977
  },
  {
    display_text: '福建，龙岩，漳平',
    search_text: 'fj, ly, zp; fu jian, long yan, zhang ping; 福建，龙岩，漳平',
    weaid: 2141
  },
  {
    display_text: '福建，三明，城区',
    search_text: 'fj, sm, cq; fu jian, san ming, cheng qu; 福建，三明，城区',
    weaid: 150
  },
  {
    display_text: '福建，三明，宁化',
    search_text: 'fj, sm, nh; fu jian, san ming, ning hua; 福建，三明，宁化',
    weaid: 1365
  },
  {
    display_text: '福建，三明，清流',
    search_text: 'fj, sm, ql; fu jian, san ming, qing liu; 福建，三明，清流',
    weaid: 1482
  },
  {
    display_text: '福建，三明，泰宁',
    search_text: 'fj, sm, tn; fu jian, san ming, tai ning; 福建，三明，泰宁',
    weaid: 1716
  },
  {
    display_text: '福建，三明，将乐',
    search_text: 'fj, sm, jl; fu jian, san ming, jiang le; 福建，三明，将乐',
    weaid: 1006
  },
  {
    display_text: '福建，三明，建宁',
    search_text: 'fj, sm, jn; fu jian, san ming, jian ning; 福建，三明，建宁',
    weaid: 1017
  },
  {
    display_text: '福建，三明，明溪',
    search_text: 'fj, sm, mx; fu jian, san ming, ming xi; 福建，三明，明溪',
    weaid: 1333
  },
  {
    display_text: '福建，三明，沙县',
    search_text: 'fj, sm, sx; fu jian, san ming, sha xian; 福建，三明，沙县',
    weaid: 1561
  },
  {
    display_text: '福建，三明，尤溪',
    search_text: 'fj, sm, yx; fu jian, san ming, you xi; 福建，三明，尤溪',
    weaid: 2067
  },
  {
    display_text: '福建，三明，永安',
    search_text: 'fj, sm, ya; fu jian, san ming, yong an; 福建，三明，永安',
    weaid: 1950
  },
  {
    display_text: '福建，三明，大田',
    search_text: 'fj, sm, dt; fu jian, san ming, da tian; 福建，三明，大田',
    weaid: 662
  },
  {
    display_text: '福建，南平，城区',
    search_text: 'fj, np, cq; fu jian, nan ping, cheng qu; 福建，南平，城区',
    weaid: 146
  },
  {
    display_text: '福建，南平，顺昌',
    search_text: 'fj, np, sc; fu jian, nan ping, shun chang; 福建，南平，顺昌',
    weaid: 1560
  },
  {
    display_text: '福建，南平，光泽',
    search_text: 'fj, np, gz; fu jian, nan ping, guang ze; 福建，南平，光泽',
    weaid: 838
  },
  {
    display_text: '福建，南平，邵武',
    search_text: 'fj, np, sw; fu jian, nan ping, shao wu; 福建，南平，邵武',
    weaid: 1633
  },
  {
    display_text: '福建，南平，武夷山',
    search_text: 'fj, np, wys; fu jian, nan ping, wu yi shan; 福建，南平，武夷山',
    weaid: 1820
  },
  {
    display_text: '福建，南平，浦城',
    search_text: 'fj, np, pc; fu jian, nan ping, pu cheng; 福建，南平，浦城',
    weaid: 1409
  },
  {
    display_text: '福建，南平，建阳',
    search_text: 'fj, np, jy; fu jian, nan ping, jian yang; 福建，南平，建阳',
    weaid: 1060
  },
  {
    display_text: '福建，南平，松溪',
    search_text: 'fj, np, sx; fu jian, nan ping, song xi; 福建，南平，松溪',
    weaid: 1640
  },
  {
    display_text: '福建，南平，政和',
    search_text: 'fj, np, zh; fu jian, nan ping, zheng he; 福建，南平，政和',
    weaid: 2115
  },
  {
    display_text: '福建，南平，建瓯',
    search_text: 'fj, np, jo; fu jian, nan ping, jian ou; 福建，南平，建瓯',
    weaid: 1020
  },
  {
    display_text: '福建，钓鱼岛，城区',
    search_text: 'fj, dyd, cq; fu jian, diao yu dao, cheng qu; 福建，钓鱼岛，城区',
    weaid: 2522
  },
  {
    display_text: '甘肃，兰州，城区',
    search_text: 'gs, lz, cq; gan su, lan zhou, cheng qu; 甘肃，兰州，城区',
    weaid: 151
  },
  {
    display_text: '甘肃，兰州，皋兰',
    search_text: 'gs, lz, gl; gan su, lan zhou, gao lan; 甘肃，兰州，皋兰',
    weaid: 793
  },
  {
    display_text: '甘肃，兰州，永登',
    search_text: 'gs, lz, yd; gan su, lan zhou, yong deng; 甘肃，兰州，永登',
    weaid: 1975
  },
  {
    display_text: '甘肃，兰州，榆中',
    search_text: 'gs, lz, yz; gan su, lan zhou, yu zhong; 甘肃，兰州，榆中',
    weaid: 2094
  },
  {
    display_text: '甘肃，定西，城区',
    search_text: 'gs, dx, cq; gan su, ding xi, cheng qu; 甘肃，定西，城区',
    weaid: 163
  },
  {
    display_text: '甘肃，定西，通渭',
    search_text: 'gs, dx, tw; gan su, ding xi, tong wei; 甘肃，定西，通渭',
    weaid: 1728
  },
  {
    display_text: '甘肃，定西，陇西',
    search_text: 'gs, dx, lx; gan su, ding xi, long xi; 甘肃，定西，陇西',
    weaid: 1248
  },
  {
    display_text: '甘肃，定西，渭源',
    search_text: 'gs, dx, wy; gan su, ding xi, wei yuan; 甘肃，定西，渭源',
    weaid: 1825
  },
  {
    display_text: '甘肃，定西，临洮',
    search_text: 'gs, dx, lt; gan su, ding xi, lin tao; 甘肃，定西，临洮',
    weaid: 1222
  },
  {
    display_text: '甘肃，定西，漳县',
    search_text: 'gs, dx, zx; gan su, ding xi, zhang xian; 甘肃，定西，漳县',
    weaid: 2163
  },
  {
    display_text: '甘肃，定西，岷县',
    search_text: 'gs, dx, mx; gan su, ding xi, min xian; 甘肃，定西，岷县',
    weaid: 1336
  },
  {
    display_text: '甘肃，定西，安定',
    search_text: 'gs, dx, ad; gan su, ding xi, an ding; 甘肃，定西，安定',
    weaid: 450
  },
  {
    display_text: '甘肃，平凉，城区',
    search_text: 'gs, pl, cq; gan su, ping liang, cheng qu; 甘肃，平凉，城区',
    weaid: 152
  },
  {
    display_text: '甘肃，平凉，泾川',
    search_text: 'gs, pl, jc; gan su, ping liang, jing chuan; 甘肃，平凉，泾川',
    weaid: 982
  },
  {
    display_text: '甘肃，平凉，灵台',
    search_text: 'gs, pl, lt; gan su, ping liang, ling tai; 甘肃，平凉，灵台',
    weaid: 1223
  },
  {
    display_text: '甘肃，平凉，崇信',
    search_text: 'gs, pl, cx; gan su, ping liang, chong xin; 甘肃，平凉，崇信',
    weaid: 585
  },
  {
    display_text: '甘肃，平凉，华亭',
    search_text: 'gs, pl, ht; gan su, ping liang, hua ting; 甘肃，平凉，华亭',
    weaid: 938
  },
  {
    display_text: '甘肃，平凉，庄浪',
    search_text: 'gs, pl, zl; gan su, ping liang, zhuang lang; 甘肃，平凉，庄浪',
    weaid: 794
  },
  {
    display_text: '甘肃，平凉，静宁',
    search_text: 'gs, pl, jn; gan su, ping liang, jing ning; 甘肃，平凉，静宁',
    weaid: 1019
  },
  {
    display_text: '甘肃，平凉，崆峒',
    search_text: 'gs, pl, kd; gan su, ping liang, kong dong; 甘肃，平凉，崆峒',
    weaid: 2449
  },
  {
    display_text: '甘肃，庆阳，城区',
    search_text: 'gs, qy, cq; gan su, qing yang, cheng qu; 甘肃，庆阳，城区',
    weaid: 153
  },
  {
    display_text: '甘肃，庆阳，环县',
    search_text: 'gs, qy, hx; gan su, qing yang, huan xian; 甘肃，庆阳，环县',
    weaid: 947
  },
  {
    display_text: '甘肃，庆阳，华池',
    search_text: 'gs, qy, hc; gan su, qing yang, hua chi; 甘肃，庆阳，华池',
    weaid: 860
  },
  {
    display_text: '甘肃，庆阳，合水',
    search_text: 'gs, qy, hs; gan su, qing yang, he shui; 甘肃，庆阳，合水',
    weaid: 934
  },
  {
    display_text: '甘肃，庆阳，正宁',
    search_text: 'gs, qy, zn; gan su, qing yang, zheng ning; 甘肃，庆阳，正宁',
    weaid: 2137
  },
  {
    display_text: '甘肃，庆阳，宁县',
    search_text: 'gs, qy, nx; gan su, qing yang, ning xian; 甘肃，庆阳，宁县',
    weaid: 1395
  },
  {
    display_text: '甘肃，庆阳，镇原',
    search_text: 'gs, qy, zy; gan su, qing yang, zhen yuan; 甘肃，庆阳，镇原',
    weaid: 2177
  },
  {
    display_text: '甘肃，庆阳，庆城',
    search_text: 'gs, qy, qc; gan su, qing yang, qing cheng; 甘肃，庆阳，庆城',
    weaid: 2450
  },
  {
    display_text: '甘肃，武威，城区',
    search_text: 'gs, ww, cq; gan su, wu wei, cheng qu; 甘肃，武威，城区',
    weaid: 154
  },
  {
    display_text: '甘肃，武威，民勤',
    search_text: 'gs, ww, mq; gan su, wu wei, min qin; 甘肃，武威，民勤',
    weaid: 1322
  },
  {
    display_text: '甘肃，武威，古浪',
    search_text: 'gs, ww, gl; gan su, wu wei, gu lang; 甘肃，武威，古浪',
    weaid: 795
  },
  {
    display_text: '甘肃，武威，天祝',
    search_text: 'gs, ww, tz; gan su, wu wei, tian zhu; 甘肃，武威，天祝',
    weaid: 1743
  },
  {
    display_text: '甘肃，金昌，城区',
    search_text: 'gs, jc, cq; gan su, jin chang, cheng qu; 甘肃，金昌，城区',
    weaid: 155
  },
  {
    display_text: '甘肃，金昌，永昌',
    search_text: 'gs, jc, yc; gan su, jin chang, yong chang; 甘肃，金昌，永昌',
    weaid: 1970
  },
  {
    display_text: '甘肃，张掖，城区',
    search_text: 'gs, zy, cq; gan su, zhang ye, cheng qu; 甘肃，张掖，城区',
    weaid: 164
  },
  {
    display_text: '甘肃，张掖，肃南',
    search_text: 'gs, zy, sn; gan su, zhang ye, su nan; 甘肃，张掖，肃南',
    weaid: 1604
  },
  {
    display_text: '甘肃，张掖，民乐',
    search_text: 'gs, zy, my; gan su, zhang ye, min yue; 甘肃，张掖，民乐',
    weaid: 1307
  },
  {
    display_text: '甘肃，张掖，临泽',
    search_text: 'gs, zy, lz; gan su, zhang ye, lin ze; 甘肃，张掖，临泽',
    weaid: 1270
  },
  {
    display_text: '甘肃，张掖，高台',
    search_text: 'gs, zy, gt; gan su, zhang ye, gao tai; 甘肃，张掖，高台',
    weaid: 819
  },
  {
    display_text: '甘肃，张掖，山丹',
    search_text: 'gs, zy, sd; gan su, zhang ye, shan dan; 甘肃，张掖，山丹',
    weaid: 1567
  },
  {
    display_text: '甘肃，酒泉，城区',
    search_text: 'gs, jq, cq; gan su, jiu quan, cheng qu; 甘肃，酒泉，城区',
    weaid: 157
  },
  {
    display_text: '甘肃，酒泉，金塔',
    search_text: 'gs, jq, jt; gan su, jiu quan, jin ta; 甘肃，酒泉，金塔',
    weaid: 1038
  },
  {
    display_text: '甘肃，酒泉，阿克塞',
    search_text: 'gs, jq, aks; gan su, jiu quan, a ke sai; 甘肃，酒泉，阿克塞',
    weaid: 2451
  },
  {
    display_text: '甘肃，酒泉，瓜州',
    search_text: 'gs, jq, gz; gan su, jiu quan, gua zhou; 甘肃，酒泉，瓜州',
    weaid: 845
  },
  {
    display_text: '甘肃，酒泉，肃北',
    search_text: 'gs, jq, sb; gan su, jiu quan, su bei; 甘肃，酒泉，肃北',
    weaid: 1552
  },
  {
    display_text: '甘肃，酒泉，玉门',
    search_text: 'gs, jq, ym; gan su, jiu quan, yu men; 甘肃，酒泉，玉门',
    weaid: 2016
  },
  {
    display_text: '甘肃，酒泉，敦煌',
    search_text: 'gs, jq, dh; gan su, jiu quan, dun huang; 甘肃，酒泉，敦煌',
    weaid: 626
  },
  {
    display_text: '甘肃，天水，城区',
    search_text: 'gs, ts, cq; gan su, tian shui, cheng qu; 甘肃，天水，城区',
    weaid: 158
  },
  {
    display_text: '甘肃，天水，清水',
    search_text: 'gs, ts, qs; gan su, tian shui, qing shui; 甘肃，天水，清水',
    weaid: 1493
  },
  {
    display_text: '甘肃，天水，秦安',
    search_text: 'gs, ts, qa; gan su, tian shui, qin an; 甘肃，天水，秦安',
    weaid: 1465
  },
  {
    display_text: '甘肃，天水，甘谷',
    search_text: 'gs, ts, gg; gan su, tian shui, gan gu; 甘肃，天水，甘谷',
    weaid: 786
  },
  {
    display_text: '甘肃，天水，武山',
    search_text: 'gs, ts, ws; gan su, tian shui, wu shan; 甘肃，天水，武山',
    weaid: 1804
  },
  {
    display_text: '甘肃，天水，张家川',
    search_text: 'gs, ts, zjc; gan su, tian shui, zhang jia chuan; 甘肃，天水，张家川',
    weaid: 2119
  },
  {
    display_text: '甘肃，天水，麦积',
    search_text: 'gs, ts, mj; gan su, tian shui, mai ji; 甘肃，天水，麦积',
    weaid: 2452
  },
  {
    display_text: '甘肃，陇南，武都',
    search_text: 'gs, ln, wd; gan su, long nan, wu dou; 甘肃，陇南，武都',
    weaid: 159
  },
  {
    display_text: '甘肃，陇南，成县',
    search_text: 'gs, ln, cx; gan su, long nan, cheng xian; 甘肃，陇南，成县',
    weaid: 586
  },
  {
    display_text: '甘肃，陇南，文县',
    search_text: 'gs, ln, wx; gan su, long nan, wen xian; 甘肃，陇南，文县',
    weaid: 1813
  },
  {
    display_text: '甘肃，陇南，宕昌',
    search_text: 'gs, ln, dc; gan su, long nan, dang chang; 甘肃，陇南，宕昌',
    weaid: 2453
  },
  {
    display_text: '甘肃，陇南，康县',
    search_text: 'gs, ln, kx; gan su, long nan, kang xian; 甘肃，陇南，康县',
    weaid: 1102
  },
  {
    display_text: '甘肃，陇南，西和',
    search_text: 'gs, ln, xh; gan su, long nan, xi he; 甘肃，陇南，西和',
    weaid: 1860
  },
  {
    display_text: '甘肃，陇南，礼县',
    search_text: 'gs, ln, lx; gan su, long nan, li xian; 甘肃，陇南，礼县',
    weaid: 1249
  },
  {
    display_text: '甘肃，陇南，徽县',
    search_text: 'gs, ln, hx; gan su, long nan, hui xian; 甘肃，陇南，徽县',
    weaid: 948
  },
  {
    display_text: '甘肃，陇南，两当',
    search_text: 'gs, ln, ld; gan su, long nan, liang dang; 甘肃，陇南，两当',
    weaid: 1133
  },
  {
    display_text: '甘肃，临夏，城区',
    search_text: 'gs, lx, cq; gan su, lin xia, cheng qu; 甘肃，临夏，城区',
    weaid: 160
  },
  {
    display_text: '甘肃，临夏，康乐',
    search_text: 'gs, lx, kl; gan su, lin xia, kang le; 甘肃，临夏，康乐',
    weaid: 1092
  },
  {
    display_text: '甘肃，临夏，永靖',
    search_text: 'gs, lx, yj; gan su, lin xia, yong jing; 甘肃，临夏，永靖',
    weaid: 1999
  },
  {
    display_text: '甘肃，临夏，广河',
    search_text: 'gs, lx, gh; gan su, lin xia, guang he; 甘肃，临夏，广河',
    weaid: 789
  },
  {
    display_text: '甘肃，临夏，和政',
    search_text: 'gs, lx, hz; gan su, lin xia, he zheng; 甘肃，临夏，和政',
    weaid: 970
  },
  {
    display_text: '甘肃，临夏，东乡',
    search_text: 'gs, lx, dx; gan su, lin xia, dong xiang; 甘肃，临夏，东乡',
    weaid: 2454
  },
  {
    display_text: '甘肃，临夏，积石山',
    search_text: 'gs, lx, jss; gan su, lin xia, ji shi shan; 甘肃，临夏，积石山',
    weaid: 2455
  },
  {
    display_text: '甘肃，甘南，合作',
    search_text: 'gs, gn, hz; gan su, gan nan, he zuo; 甘肃，甘南，合作',
    weaid: 161
  },
  {
    display_text: '甘肃，甘南，临潭',
    search_text: 'gs, gn, lt; gan su, gan nan, lin tan; 甘肃，甘南，临潭',
    weaid: 1224
  },
  {
    display_text: '甘肃，甘南，卓尼',
    search_text: 'gs, gn, zn; gan su, gan nan, zhuo ni; 甘肃，甘南，卓尼',
    weaid: 2138
  },
  {
    display_text: '甘肃，甘南，舟曲',
    search_text: 'gs, gn, zq; gan su, gan nan, zhou qu; 甘肃，甘南，舟曲',
    weaid: 2149
  },
  {
    display_text: '甘肃，甘南，迭部',
    search_text: 'gs, gn, db; gan su, gan nan, die bu; 甘肃，甘南，迭部',
    weaid: 604
  },
  {
    display_text: '甘肃，甘南，玛曲',
    search_text: 'gs, gn, mq; gan su, gan nan, ma qu; 甘肃，甘南，玛曲',
    weaid: 1325
  },
  {
    display_text: '甘肃，甘南，碌曲',
    search_text: 'gs, gn, lq; gan su, gan nan, lu qu; 甘肃，甘南，碌曲',
    weaid: 1199
  },
  {
    display_text: '甘肃，甘南，夏河',
    search_text: 'gs, gn, xh; gan su, gan nan, xia he; 甘肃，甘南，夏河',
    weaid: 1861
  },
  {
    display_text: '甘肃，白银，城区',
    search_text: 'gs, by, cq; gan su, bai yin, cheng qu; 甘肃，白银，城区',
    weaid: 162
  },
  {
    display_text: '甘肃，白银，靖远',
    search_text: 'gs, by, jy; gan su, bai yin, jing yuan; 甘肃，白银，靖远',
    weaid: 1073
  },
  {
    display_text: '甘肃，白银，会宁',
    search_text: 'gs, by, hn; gan su, bai yin, hui ning; 甘肃，白银，会宁',
    weaid: 912
  },
  {
    display_text: '甘肃，白银，平川',
    search_text: 'gs, by, pc; gan su, bai yin, ping chuan; 甘肃，白银，平川',
    weaid: 2456
  },
  {
    display_text: '甘肃，白银，景泰',
    search_text: 'gs, by, jt; gan su, bai yin, jing tai; 甘肃，白银，景泰',
    weaid: 1039
  },
  {
    display_text: '甘肃，嘉峪关，城区',
    search_text: 'gs, jyg, cq; gan su, jia yu guan, cheng qu; 甘肃，嘉峪关，城区',
    weaid: 156
  },
  {
    display_text: '广东，广州，城区',
    search_text: 'gd, gz, cq; guang dong, guang zhou, cheng qu; 广东，广州，城区',
    weaid: 165
  },
  {
    display_text: '广东，广州，番禺',
    search_text: 'gd, gz, py; guang dong, guang zhou, pan yu; 广东，广州，番禺',
    weaid: 763
  },
  {
    display_text: '广东，广州，从化',
    search_text: 'gd, gz, ch; guang dong, guang zhou, cong hua; 广东，广州，从化',
    weaid: 546
  },
  {
    display_text: '广东，广州，增城',
    search_text: 'gd, gz, zc; guang dong, guang zhou, zeng cheng; 广东，广州，增城',
    weaid: 2102
  },
  {
    display_text: '广东，广州，花都',
    search_text: 'gd, gz, hd; guang dong, guang zhou, hua dou; 广东，广州，花都',
    weaid: 868
  },
  {
    display_text: '广东，广州，荔湾',
    search_text: 'gd, gz, lw; guang dong, guang zhou, li wan; 广东，广州，荔湾',
    weaid: 2720
  },
  {
    display_text: '广东，广州，越秀',
    search_text: 'gd, gz, yx; guang dong, guang zhou, yue xiu; 广东，广州，越秀',
    weaid: 2715
  },
  {
    display_text: '广东，广州，海珠',
    search_text: 'gd, gz, hz; guang dong, guang zhou, hai zhu; 广东，广州，海珠',
    weaid: 2721
  },
  {
    display_text: '广东，广州，天河',
    search_text: 'gd, gz, th; guang dong, guang zhou, tian he; 广东，广州，天河',
    weaid: 2722
  },
  {
    display_text: '广东，广州，白云',
    search_text: 'gd, gz, by; guang dong, guang zhou, bai yun; 广东，广州，白云',
    weaid: 2723
  },
  {
    display_text: '广东，广州，黄埔',
    search_text: 'gd, gz, hp; guang dong, guang zhou, huang pu; 广东，广州，黄埔',
    weaid: 2724
  },
  {
    display_text: '广东，广州，南沙',
    search_text: 'gd, gz, ns; guang dong, guang zhou, nan sha; 广东，广州，南沙',
    weaid: 2725
  },
  {
    display_text: '广东，韶关，城区',
    search_text: 'gd, sg, cq; guang dong, shao guan, cheng qu; 广东，韶关，城区',
    weaid: 185
  },
  {
    display_text: '广东，韶关，乳源',
    search_text: 'gd, sg, ry; guang dong, shao guan, ru yuan; 广东，韶关，乳源',
    weaid: 1549
  },
  {
    display_text: '广东，韶关，始兴',
    search_text: 'gd, sg, sx; guang dong, shao guan, shi xing; 广东，韶关，始兴',
    weaid: 1643
  },
  {
    display_text: '广东，韶关，翁源',
    search_text: 'gd, sg, wy; guang dong, shao guan, weng yuan; 广东，韶关，翁源',
    weaid: 1823
  },
  {
    display_text: '广东，韶关，乐昌',
    search_text: 'gd, sg, lc; guang dong, shao guan, le chang; 广东，韶关，乐昌',
    weaid: 1123
  },
  {
    display_text: '广东，韶关，仁化',
    search_text: 'gd, sg, rh; guang dong, shao guan, ren hua; 广东，韶关，仁化',
    weaid: 1532
  },
  {
    display_text: '广东，韶关，南雄',
    search_text: 'gd, sg, nx; guang dong, shao guan, nan xiong; 广东，韶关，南雄',
    weaid: 1392
  },
  {
    display_text: '广东，韶关，新丰',
    search_text: 'gd, sg, xf; guang dong, shao guan, xin feng; 广东，韶关，新丰',
    weaid: 1852
  },
  {
    display_text: '广东，韶关，曲江',
    search_text: 'gd, sg, qj; guang dong, shao guan, qu jiang; 广东，韶关，曲江',
    weaid: 1477
  },
  {
    display_text: '广东，韶关，浈江',
    search_text: 'gd, sg, zj; guang dong, shao guan, zhen jiang; 广东，韶关，浈江',
    weaid: 2594
  },
  {
    display_text: '广东，韶关，武江',
    search_text: 'gd, sg, wj; guang dong, shao guan, wu jiang; 广东，韶关，武江',
    weaid: 2595
  },
  {
    display_text: '广东，惠州，城区',
    search_text: 'gd, hz, cq; guang dong, hui zhou, cheng qu; 广东，惠州，城区',
    weaid: 166
  },
  {
    display_text: '广东，惠州，博罗',
    search_text: 'gd, hz, bl; guang dong, hui zhou, bo luo; 广东，惠州，博罗',
    weaid: 504
  },
  {
    display_text: '广东，惠州，惠阳',
    search_text: 'gd, hz, hy; guang dong, hui zhou, hui yang; 广东，惠州，惠阳',
    weaid: 953
  },
  {
    display_text: '广东，惠州，惠东',
    search_text: 'gd, hz, hd; guang dong, hui zhou, hui dong; 广东，惠州，惠东',
    weaid: 866
  },
  {
    display_text: '广东，惠州，龙门',
    search_text: 'gd, hz, lm; guang dong, hui zhou, long men; 广东，惠州，龙门',
    weaid: 1180
  },
  {
    display_text: '广东，梅州，城区',
    search_text: 'gd, mz, cq; guang dong, mei zhou, cheng qu; 广东，梅州，城区',
    weaid: 167
  },
  {
    display_text: '广东，梅州，兴宁',
    search_text: 'gd, mz, xn; guang dong, mei zhou, xing ning; 广东，梅州，兴宁',
    weaid: 1892
  },
  {
    display_text: '广东，梅州，蕉岭',
    search_text: 'gd, mz, jl; guang dong, mei zhou, jiao ling; 广东，梅州，蕉岭',
    weaid: 1009
  },
  {
    display_text: '广东，梅州，大埔',
    search_text: 'gd, mz, db; guang dong, mei zhou, da bu; 广东，梅州，大埔',
    weaid: 645
  },
  {
    display_text: '广东，梅州，丰顺',
    search_text: 'gd, mz, fs; guang dong, mei zhou, feng shun; 广东，梅州，丰顺',
    weaid: 741
  },
  {
    display_text: '广东，梅州，平远',
    search_text: 'gd, mz, py; guang dong, mei zhou, ping yuan; 广东，梅州，平远',
    weaid: 1458
  },
  {
    display_text: '广东，梅州，五华',
    search_text: 'gd, mz, wh; guang dong, mei zhou, wu hua; 广东，梅州，五华',
    weaid: 1770
  },
  {
    display_text: '广东，梅州，梅县',
    search_text: 'gd, mz, mx; guang dong, mei zhou, mei xian; 广东，梅州，梅县',
    weaid: 2596
  },
  {
    display_text: '广东，汕头，城区',
    search_text: 'gd, st, cq; guang dong, shan tou, cheng qu; 广东，汕头，城区',
    weaid: 168
  },
  {
    display_text: '广东，汕头，潮阳',
    search_text: 'gd, st, cy; guang dong, shan tou, chao yang; 广东，汕头，潮阳',
    weaid: 590
  },
  {
    display_text: '广东，汕头，澄海',
    search_text: 'gd, st, ch; guang dong, shan tou, cheng hai; 广东，汕头，澄海',
    weaid: 622
  },
  {
    display_text: '广东，汕头，南澳',
    search_text: 'gd, st, na; guang dong, shan tou, nan ao; 广东，汕头，南澳',
    weaid: 1351
  },
  {
    display_text: '广东，深圳，城区',
    search_text: 'gd, sz, cq; guang dong, shen zhen, cheng qu; 广东，深圳，城区',
    weaid: 169
  },
  {
    display_text: '广东，珠海，城区',
    search_text: 'gd, zh, cq; guang dong, zhu hai, cheng qu; 广东，珠海，城区',
    weaid: 170
  },
  {
    display_text: '广东，珠海，斗门',
    search_text: 'gd, zh, dm; guang dong, zhu hai, dou men; 广东，珠海，斗门',
    weaid: 639
  },
  {
    display_text: '广东，珠海，金湾',
    search_text: 'gd, zh, jw; guang dong, zhu hai, jin wan; 广东，珠海，金湾',
    weaid: 2597
  },
  {
    display_text: '广东，佛山，城区',
    search_text: 'gd, fs, cq; guang dong, fo shan, cheng qu; 广东，佛山，城区',
    weaid: 171
  },
  {
    display_text: '广东，佛山，顺德',
    search_text: 'gd, fs, sd; guang dong, fo shan, shun de; 广东，佛山，顺德',
    weaid: 1568
  },
  {
    display_text: '广东，佛山，三水',
    search_text: 'gd, fs, ss; guang dong, fo shan, san shui; 广东，佛山，三水',
    weaid: 1623
  },
  {
    display_text: '广东，佛山，南海',
    search_text: 'gd, fs, nh; guang dong, fo shan, nan hai; 广东，佛山，南海',
    weaid: 1363
  },
  {
    display_text: '广东，佛山，高明',
    search_text: 'gd, fs, gm; guang dong, fo shan, gao ming; 广东，佛山，高明',
    weaid: 2598
  },
  {
    display_text: '广东，肇庆，城区',
    search_text: 'gd, zq, cq; guang dong, zhao qing, cheng qu; 广东，肇庆，城区',
    weaid: 172
  },
  {
    display_text: '广东，肇庆，广宁',
    search_text: 'gd, zq, gn; guang dong, zhao qing, guang ning; 广东，肇庆，广宁',
    weaid: 807
  },
  {
    display_text: '广东，肇庆，四会',
    search_text: 'gd, zq, sh; guang dong, zhao qing, si hui; 广东，肇庆，四会',
    weaid: 1585
  },
  {
    display_text: '广东，肇庆，德庆',
    search_text: 'gd, zq, dq; guang dong, zhao qing, de qing; 广东，肇庆，德庆',
    weaid: 647
  },
  {
    display_text: '广东，肇庆，怀集',
    search_text: 'gd, zq, hj; guang dong, zhao qing, huai ji; 广东，肇庆，怀集',
    weaid: 880
  },
  {
    display_text: '广东，肇庆，封开',
    search_text: 'gd, zq, fk; guang dong, zhao qing, feng kai; 广东，肇庆，封开',
    weaid: 721
  },
  {
    display_text: '广东，肇庆，高要',
    search_text: 'gd, zq, gy; guang dong, zhao qing, gao yao; 广东，肇庆，高要',
    weaid: 830
  },
  {
    display_text: '广东，湛江，城区',
    search_text: 'gd, zj, cq; guang dong, zhan jiang, cheng qu; 广东，湛江，城区',
    weaid: 173
  },
  {
    display_text: '广东，湛江，吴川',
    search_text: 'gd, zj, wc; guang dong, zhan jiang, wu chuan; 广东，湛江，吴川',
    weaid: 1756
  },
  {
    display_text: '广东，湛江，雷州',
    search_text: 'gd, zj, lz; guang dong, zhan jiang, lei zhou; 广东，湛江，雷州',
    weaid: 1278
  },
  {
    display_text: '广东，湛江，徐闻',
    search_text: 'gd, zj, xw; guang dong, zhan jiang, xu wen; 广东，湛江，徐闻',
    weaid: 1910
  },
  {
    display_text: '广东，湛江，廉江',
    search_text: 'gd, zj, lj; guang dong, zhan jiang, lian jiang; 广东，湛江，廉江',
    weaid: 1164
  },
  {
    display_text: '广东，湛江，赤坎',
    search_text: 'gd, zj, ck; guang dong, zhan jiang, chi kan; 广东，湛江，赤坎',
    weaid: 2599
  },
  {
    display_text: '广东，湛江，遂溪',
    search_text: 'gd, zj, sx; guang dong, zhan jiang, sui xi; 广东，湛江，遂溪',
    weaid: 1644
  },
  {
    display_text: '广东，湛江，坡头',
    search_text: 'gd, zj, pt; guang dong, zhan jiang, po tou; 广东，湛江，坡头',
    weaid: 2600
  },
  {
    display_text: '广东，湛江，霞山',
    search_text: 'gd, zj, xs; guang dong, zhan jiang, xia shan; 广东，湛江，霞山',
    weaid: 2601
  },
  {
    display_text: '广东，湛江，麻章',
    search_text: 'gd, zj, mz; guang dong, zhan jiang, ma zhang; 广东，湛江，麻章',
    weaid: 2602
  },
  {
    display_text: '广东，江门，城区',
    search_text: 'gd, jm, cq; guang dong, jiang men, cheng qu; 广东，江门，城区',
    weaid: 174
  },
  {
    display_text: '广东，江门，开平',
    search_text: 'gd, jm, kp; guang dong, jiang men, kai ping; 广东，江门，开平',
    weaid: 1097
  },
  {
    display_text: '广东，江门，新会',
    search_text: 'gd, jm, xh; guang dong, jiang men, xin hui; 广东，江门，新会',
    weaid: 1869
  },
  {
    display_text: '广东，江门，恩平',
    search_text: 'gd, jm, ep; guang dong, jiang men, en ping; 广东，江门，恩平',
    weaid: 697
  },
  {
    display_text: '广东，江门，台山',
    search_text: 'gd, jm, ts; guang dong, jiang men, tai shan; 广东，江门，台山',
    weaid: 1725
  },
  {
    display_text: '广东，江门，蓬江',
    search_text: 'gd, jm, pj; guang dong, jiang men, peng jiang; 广东，江门，蓬江',
    weaid: 2603
  },
  {
    display_text: '广东，江门，鹤山',
    search_text: 'gd, jm, hs; guang dong, jiang men, he shan; 广东，江门，鹤山',
    weaid: 931
  },
  {
    display_text: '广东，江门，江海',
    search_text: 'gd, jm, jh; guang dong, jiang men, jiang hai; 广东，江门，江海',
    weaid: 2604
  },
  {
    display_text: '广东，河源，城区',
    search_text: 'gd, hy, cq; guang dong, he yuan, cheng qu; 广东，河源，城区',
    weaid: 175
  },
  {
    display_text: '广东，河源，紫金',
    search_text: 'gd, hy, zj; guang dong, he yuan, zi jin; 广东，河源，紫金',
    weaid: 2123
  },
  {
    display_text: '广东，河源，连平',
    search_text: 'gd, hy, lp; guang dong, he yuan, lian ping; 广东，河源，连平',
    weaid: 1187
  },
  {
    display_text: '广东，河源，和平',
    search_text: 'gd, hy, hp; guang dong, he yuan, he ping; 广东，河源，和平',
    weaid: 914
  },
  {
    display_text: '广东，河源，龙川',
    search_text: 'gd, hy, lc; guang dong, he yuan, long chuan; 广东，河源，龙川',
    weaid: 1124
  },
  {
    display_text: '广东，河源，东源',
    search_text: 'gd, hy, dy; guang dong, he yuan, dong yuan; 广东，河源，东源',
    weaid: 2605
  },
  {
    display_text: '广东，清远，城区',
    search_text: 'gd, qy, cq; guang dong, qing yuan, cheng qu; 广东，清远，城区',
    weaid: 176
  },
  {
    display_text: '广东，清远，连南',
    search_text: 'gd, qy, ln; guang dong, qing yuan, lian nan; 广东，清远，连南',
    weaid: 1182
  },
  {
    display_text: '广东，清远，连州',
    search_text: 'gd, qy, lz; guang dong, qing yuan, lian zhou; 广东，清远，连州',
    weaid: 1273
  },
  {
    display_text: '广东，清远，连山',
    search_text: 'gd, qy, ls; guang dong, qing yuan, lian shan; 广东，清远，连山',
    weaid: 1212
  },
  {
    display_text: '广东，清远，阳山',
    search_text: 'gd, qy, ys; guang dong, qing yuan, yang shan; 广东，清远，阳山',
    weaid: 2044
  },
  {
    display_text: '广东，清远，佛冈',
    search_text: 'gd, qy, fg; guang dong, qing yuan, fu gang; 广东，清远，佛冈',
    weaid: 712
  },
  {
    display_text: '广东，清远，英德',
    search_text: 'gd, qy, yd; guang dong, qing yuan, ying de; 广东，清远，英德',
    weaid: 1974
  },
  {
    display_text: '广东，清远，清新',
    search_text: 'gd, qy, qx; guang dong, qing yuan, qing xin; 广东，清远，清新',
    weaid: 2606
  },
  {
    display_text: '广东，云浮，城区',
    search_text: 'gd, yf, cq; guang dong, yun fu, cheng qu; 广东，云浮，城区',
    weaid: 177
  },
  {
    display_text: '广东，云浮，罗定',
    search_text: 'gd, yf, ld; guang dong, yun fu, luo ding; 广东，云浮，罗定',
    weaid: 1136
  },
  {
    display_text: '广东，云浮，新兴',
    search_text: 'gd, yf, xx; guang dong, yun fu, xin xing; 广东，云浮，新兴',
    weaid: 1923
  },
  {
    display_text: '广东，云浮，郁南',
    search_text: 'gd, yf, yn; guang dong, yun fu, yu nan; 广东，云浮，郁南',
    weaid: 2020
  },
  {
    display_text: '广东，云浮，云安',
    search_text: 'gd, yf, ya; guang dong, yun fu, yun an; 广东，云浮，云安',
    weaid: 2607
  },
  {
    display_text: '广东，潮州，城区',
    search_text: 'gd, cz, cq; guang dong, chao zhou, cheng qu; 广东，潮州，城区',
    weaid: 178
  },
  {
    display_text: '广东，潮州，饶平',
    search_text: 'gd, cz, rp; guang dong, chao zhou, rao ping; 广东，潮州，饶平',
    weaid: 1539
  },
  {
    display_text: '广东，潮州，潮安',
    search_text: 'gd, cz, ca; guang dong, chao zhou, chao an; 广东，潮州，潮安',
    weaid: 2608
  },
  {
    display_text: '广东，东莞，城区',
    search_text: 'gd, dg, cq; guang dong, dong guan, cheng qu; 广东，东莞，城区',
    weaid: 179
  },
  {
    display_text: '广东，中山，城区',
    search_text: 'gd, zs, cq; guang dong, zhong shan, cheng qu; 广东，中山，城区',
    weaid: 180
  },
  {
    display_text: '广东，阳江，城区',
    search_text: 'gd, yj, cq; guang dong, yang jiang, cheng qu; 广东，阳江，城区',
    weaid: 181
  },
  {
    display_text: '广东，阳江，阳春',
    search_text: 'gd, yj, yc; guang dong, yang jiang, yang chun; 广东，阳江，阳春',
    weaid: 1965
  },
  {
    display_text: '广东，阳江，阳东',
    search_text: 'gd, yj, yd; guang dong, yang jiang, yang dong; 广东，阳江，阳东',
    weaid: 2609
  },
  {
    display_text: '广东，阳江，阳西',
    search_text: 'gd, yj, yx; guang dong, yang jiang, yang xi; 广东，阳江，阳西',
    weaid: 2610
  },
  {
    display_text: '广东，揭阳，城区',
    search_text: 'gd, jy, cq; guang dong, jie yang, cheng qu; 广东，揭阳，城区',
    weaid: 182
  },
  {
    display_text: '广东，揭阳，揭西',
    search_text: 'gd, jy, jx; guang dong, jie yang, jie xi; 广东，揭阳，揭西',
    weaid: 1054
  },
  {
    display_text: '广东，揭阳，普宁',
    search_text: 'gd, jy, pn; guang dong, jie yang, pu ning; 广东，揭阳，普宁',
    weaid: 1430
  },
  {
    display_text: '广东，揭阳，惠来',
    search_text: 'gd, jy, hl; guang dong, jie yang, hui lai; 广东，揭阳，惠来',
    weaid: 889
  },
  {
    display_text: '广东，揭阳，揭东',
    search_text: 'gd, jy, jd; guang dong, jie yang, jie dong; 广东，揭阳，揭东',
    weaid: 2611
  },
  {
    display_text: '广东，茂名，城区',
    search_text: 'gd, mm, cq; guang dong, mao ming, cheng qu; 广东，茂名，城区',
    weaid: 183
  },
  {
    display_text: '广东，茂名，高州',
    search_text: 'gd, mm, gz; guang dong, mao ming, gao zhou; 广东，茂名，高州',
    weaid: 843
  },
  {
    display_text: '广东，茂名，化州',
    search_text: 'gd, mm, hz; guang dong, mao ming, hua zhou; 广东，茂名，化州',
    weaid: 968
  },
  {
    display_text: '广东，茂名，电白',
    search_text: 'gd, mm, db; guang dong, mao ming, dian bai; 广东，茂名，电白',
    weaid: 601
  },
  {
    display_text: '广东，茂名，信宜',
    search_text: 'gd, mm, xy; guang dong, mao ming, xin yi; 广东，茂名，信宜',
    weaid: 1936
  },
  {
    display_text: '广东，汕尾，城区',
    search_text: 'gd, sw, cq; guang dong, shan wei, cheng qu; 广东，汕尾，城区',
    weaid: 184
  },
  {
    display_text: '广东，汕尾，海丰',
    search_text: 'gd, sw, hf; guang dong, shan wei, hai feng; 广东，汕尾，海丰',
    weaid: 871
  },
  {
    display_text: '广东，汕尾，陆丰',
    search_text: 'gd, sw, lf; guang dong, shan wei, lu feng; 广东，汕尾，陆丰',
    weaid: 1143
  },
  {
    display_text: '广东，汕尾，陆河',
    search_text: 'gd, sw, lh; guang dong, shan wei, lu he; 广东，汕尾，陆河',
    weaid: 2613
  },
  {
    display_text: '广西，南宁，城区',
    search_text: 'gx, nn, cq; guang xi, nan ning, cheng qu; 广西，南宁，城区',
    weaid: 186
  },
  {
    display_text: '广西，南宁，邕宁',
    search_text: 'gx, nn, yn; guang xi, nan ning, yong ning; 广西，南宁，邕宁',
    weaid: 2022
  },
  {
    display_text: '广西，南宁，横县',
    search_text: 'gx, nn, hx; guang xi, nan ning, heng xian; 广西，南宁，横县',
    weaid: 944
  },
  {
    display_text: '广西，南宁，隆安',
    search_text: 'gx, nn, la; guang xi, nan ning, long an; 广西，南宁，隆安',
    weaid: 1107
  },
  {
    display_text: '广西，南宁，马山',
    search_text: 'gx, nn, ms; guang xi, nan ning, ma shan; 广西，南宁，马山',
    weaid: 1329
  },
  {
    display_text: '广西，南宁，上林',
    search_text: 'gx, nn, sl; guang xi, nan ning, shang lin; 广西，南宁，上林',
    weaid: 1593
  },
  {
    display_text: '广西，南宁，武鸣',
    search_text: 'gx, nn, wm; guang xi, nan ning, wu ming; 广西，南宁，武鸣',
    weaid: 1784
  },
  {
    display_text: '广西，南宁，宾阳',
    search_text: 'gx, nn, by; guang xi, nan ning, bin yang; 广西，南宁，宾阳',
    weaid: 1453
  },
  {
    display_text: '广西，崇左，城区',
    search_text: 'gx, cz, cq; guang xi, chong zuo, cheng qu; 广西，崇左，城区',
    weaid: 198
  },
  {
    display_text: '广西，崇左，天等',
    search_text: 'gx, cz, td; guang xi, chong zuo, tian deng; 广西，崇左，天等',
    weaid: 1679
  },
  {
    display_text: '广西，崇左，龙州',
    search_text: 'gx, cz, lz; guang xi, chong zuo, long zhou; 广西，崇左，龙州',
    weaid: 1274
  },
  {
    display_text: '广西，崇左，凭祥',
    search_text: 'gx, cz, px; guang xi, chong zuo, ping xiang; 广西，崇左，凭祥',
    weaid: 1446
  },
  {
    display_text: '广西，崇左，大新',
    search_text: 'gx, cz, dx; guang xi, chong zuo, da xin; 广西，崇左，大新',
    weaid: 675
  },
  {
    display_text: '广西，崇左，扶绥',
    search_text: 'gx, cz, fs; guang xi, chong zuo, fu sui; 广西，崇左，扶绥',
    weaid: 744
  },
  {
    display_text: '广西，崇左，宁明',
    search_text: 'gx, cz, nm; guang xi, chong zuo, ning ming; 广西，崇左，宁明',
    weaid: 1380
  },
  {
    display_text: '广西，柳州，城区',
    search_text: 'gx, lz, cq; guang xi, liu zhou, cheng qu; 广西，柳州，城区',
    weaid: 187
  },
  {
    display_text: '广西，柳州，柳城',
    search_text: 'gx, lz, lc; guang xi, liu zhou, liu cheng; 广西，柳州，柳城',
    weaid: 1125
  },
  {
    display_text: '广西，柳州，鹿寨',
    search_text: 'gx, lz, lz; guang xi, liu zhou, lu zhai; 广西，柳州，鹿寨',
    weaid: 1275
  },
  {
    display_text: '广西，柳州，柳江',
    search_text: 'gx, lz, lj; guang xi, liu zhou, liu jiang; 广西，柳州，柳江',
    weaid: 1165
  },
  {
    display_text: '广西，柳州，融安',
    search_text: 'gx, lz, ra; guang xi, liu zhou, rong an; 广西，柳州，融安',
    weaid: 1526
  },
  {
    display_text: '广西，柳州，融水',
    search_text: 'gx, lz, rs; guang xi, liu zhou, rong shui; 广西，柳州，融水',
    weaid: 1542
  },
  {
    display_text: '广西，柳州，三江',
    search_text: 'gx, lz, sj; guang xi, liu zhou, san jiang; 广西，柳州，三江',
    weaid: 1587
  },
  {
    display_text: '广西，来宾，城区',
    search_text: 'gx, lb, cq; guang xi, lai bin, cheng qu; 广西，来宾，城区',
    weaid: 188
  },
  {
    display_text: '广西，来宾，忻城',
    search_text: 'gx, lb, xc; guang xi, lai bin, xin cheng; 广西，来宾，忻城',
    weaid: 1839
  },
  {
    display_text: '广西，来宾，金秀',
    search_text: 'gx, lb, jx; guang xi, lai bin, jin xiu; 广西，来宾，金秀',
    weaid: 1055
  },
  {
    display_text: '广西，来宾，象州',
    search_text: 'gx, lb, xz; guang xi, lai bin, xiang zhou; 广西，来宾，象州',
    weaid: 1947
  },
  {
    display_text: '广西，来宾，武宣',
    search_text: 'gx, lb, wx; guang xi, lai bin, wu xuan; 广西，来宾，武宣',
    weaid: 1816
  },
  {
    display_text: '广西，来宾，合山',
    search_text: 'gx, lb, hs; guang xi, lai bin, he shan; 广西，来宾，合山',
    weaid: 2620
  },
  {
    display_text: '广西，桂林，城区',
    search_text: 'gx, gl, cq; guang xi, gui lin, cheng qu; 广西，桂林，城区',
    weaid: 189
  },
  {
    display_text: '广西，桂林，龙胜',
    search_text: 'gx, gl, ls; guang xi, gui lin, long sheng; 广西，桂林，龙胜',
    weaid: 1213
  },
  {
    display_text: '广西，桂林，永福',
    search_text: 'gx, gl, yf; guang xi, gui lin, yong fu; 广西，桂林，永福',
    weaid: 1981
  },
  {
    display_text: '广西，桂林，临桂',
    search_text: 'gx, gl, lg; guang xi, gui lin, lin gui; 广西，桂林，临桂',
    weaid: 1146
  },
  {
    display_text: '广西，桂林，兴安',
    search_text: 'gx, gl, xa; guang xi, gui lin, xing an; 广西，桂林，兴安',
    weaid: 2621
  },
  {
    display_text: '广西，桂林，灵川',
    search_text: 'gx, gl, lc; guang xi, gui lin, ling chuan; 广西，桂林，灵川',
    weaid: 1126
  },
  {
    display_text: '广西，桂林，全州',
    search_text: 'gx, gl, qz; guang xi, gui lin, quan zhou; 广西，桂林，全州',
    weaid: 1523
  },
  {
    display_text: '广西，桂林，灌阳',
    search_text: 'gx, gl, gy; guang xi, gui lin, guan yang; 广西，桂林，灌阳',
    weaid: 831
  },
  {
    display_text: '广西，桂林，阳朔',
    search_text: 'gx, gl, ys; guang xi, gui lin, yang shuo; 广西，桂林，阳朔',
    weaid: 2045
  },
  {
    display_text: '广西，桂林，恭城',
    search_text: 'gx, gl, gc; guang xi, gui lin, gong cheng; 广西，桂林，恭城',
    weaid: 777
  },
  {
    display_text: '广西，桂林，平乐',
    search_text: 'gx, gl, pl; guang xi, gui lin, ping le; 广西，桂林，平乐',
    weaid: 1424
  },
  {
    display_text: '广西，桂林，荔浦',
    search_text: 'gx, gl, lp; guang xi, gui lin, li pu; 广西，桂林，荔浦',
    weaid: 1191
  },
  {
    display_text: '广西，桂林，资源',
    search_text: 'gx, gl, zy; guang xi, gui lin, zi yuan; 广西，桂林，资源',
    weaid: 2174
  },
  {
    display_text: '广西，梧州，城区',
    search_text: 'gx, wz, cq; guang xi, wu zhou, cheng qu; 广西，梧州，城区',
    weaid: 190
  },
  {
    display_text: '广西，梧州，藤县',
    search_text: 'gx, wz, tx; guang xi, wu zhou, teng xian; 广西，梧州，藤县',
    weaid: 1732
  },
  {
    display_text: '广西，梧州，苍梧',
    search_text: 'gx, wz, cw; guang xi, wu zhou, cang wu; 广西，梧州，苍梧',
    weaid: 578
  },
  {
    display_text: '广西，梧州，蒙山',
    search_text: 'gx, wz, ms; guang xi, wu zhou, meng shan; 广西，梧州，蒙山',
    weaid: 1330
  },
  {
    display_text: '广西，梧州，岑溪',
    search_text: 'gx, wz, cx; guang xi, wu zhou, cen xi; 广西，梧州，岑溪',
    weaid: 584
  },
  {
    display_text: '广西，贺州，城区',
    search_text: 'gx, hz, cq; guang xi, he zhou, cheng qu; 广西，贺州，城区',
    weaid: 199
  },
  {
    display_text: '广西，贺州，昭平',
    search_text: 'gx, hz, zp; guang xi, he zhou, zhao ping; 广西，贺州，昭平',
    weaid: 2143
  },
  {
    display_text: '广西，贺州，富川',
    search_text: 'gx, hz, fc; guang xi, he zhou, fu chuan; 广西，贺州，富川',
    weaid: 708
  },
  {
    display_text: '广西，贺州，钟山',
    search_text: 'gx, hz, zs; guang xi, he zhou, zhong shan; 广西，贺州，钟山',
    weaid: 2152
  },
  {
    display_text: '广西，贵港，城区',
    search_text: 'gx, gg, cq; guang xi, gui gang, cheng qu; 广西，贵港，城区',
    weaid: 192
  },
  {
    display_text: '广西，贵港，桂平',
    search_text: 'gx, gg, gp; guang xi, gui gang, gui ping; 广西，贵港，桂平',
    weaid: 810
  },
  {
    display_text: '广西，贵港，平南',
    search_text: 'gx, gg, pn; guang xi, gui gang, ping nan; 广西，贵港，平南',
    weaid: 1429
  },
  {
    display_text: '广西，玉林，城区',
    search_text: 'gx, yl, cq; guang xi, yu lin, cheng qu; 广西，玉林，城区',
    weaid: 193
  },
  {
    display_text: '广西，玉林，博白',
    search_text: 'gx, yl, bb; guang xi, yu lin, bo bai; 广西，玉林，博白',
    weaid: 481
  },
  {
    display_text: '广西，玉林，北流',
    search_text: 'gx, yl, bl; guang xi, yu lin, bei liu; 广西，玉林，北流',
    weaid: 499
  },
  {
    display_text: '广西，玉林，容县',
    search_text: 'gx, yl, rx; guang xi, yu lin, rong xian; 广西，玉林，容县',
    weaid: 1546
  },
  {
    display_text: '广西，玉林，陆川',
    search_text: 'gx, yl, lc; guang xi, yu lin, lu chuan; 广西，玉林，陆川',
    weaid: 1127
  },
  {
    display_text: '广西，玉林，兴业',
    search_text: 'gx, yl, xy; guang xi, yu lin, xing ye; 广西，玉林，兴业',
    weaid: 2622
  },
  {
    display_text: '广西，百色，城区',
    search_text: 'gx, bs, cq; guang xi, bai se, cheng qu; 广西，百色，城区',
    weaid: 194
  },
  {
    display_text: '广西，百色，那坡',
    search_text: 'gx, bs, np; guang xi, bai se, na po; 广西，百色，那坡',
    weaid: 1352
  },
  {
    display_text: '广西，百色，田阳',
    search_text: 'gx, bs, ty; guang xi, bai se, tian yang; 广西，百色，田阳',
    weaid: 1735
  },
  {
    display_text: '广西，百色，德保',
    search_text: 'gx, bs, db; guang xi, bai se, de bao; 广西，百色，德保',
    weaid: 602
  },
  {
    display_text: '广西，百色，靖西',
    search_text: 'gx, bs, jx; guang xi, bai se, jing xi; 广西，百色，靖西',
    weaid: 1056
  },
  {
    display_text: '广西，百色，田东',
    search_text: 'gx, bs, td; guang xi, bai se, tian dong; 广西，百色，田东',
    weaid: 1681
  },
  {
    display_text: '广西，百色，平果',
    search_text: 'gx, bs, pg; guang xi, bai se, ping guo; 广西，百色，平果',
    weaid: 1416
  },
  {
    display_text: '广西，百色，隆林',
    search_text: 'gx, bs, ll; guang xi, bai se, long lin; 广西，百色，隆林',
    weaid: 1175
  },
  {
    display_text: '广西，百色，西林',
    search_text: 'gx, bs, xl; guang xi, bai se, xi lin; 广西，百色，西林',
    weaid: 1883
  },
  {
    display_text: '广西，百色，乐业',
    search_text: 'gx, bs, ly; guang xi, bai se, le ye; 广西，百色，乐业',
    weaid: 1258
  },
  {
    display_text: '广西，百色，凌云',
    search_text: 'gx, bs, ly; guang xi, bai se, ling yun; 广西，百色，凌云',
    weaid: 1268
  },
  {
    display_text: '广西，百色，田林',
    search_text: 'gx, bs, tl; guang xi, bai se, tian lin; 广西，百色，田林',
    weaid: 1709
  },
  {
    display_text: '广西，钦州，城区',
    search_text: 'gx, qz, cq; guang xi, qin zhou, cheng qu; 广西，钦州，城区',
    weaid: 195
  },
  {
    display_text: '广西，钦州，浦北',
    search_text: 'gx, qz, pb; guang xi, qin zhou, pu bei; 广西，钦州，浦北',
    weaid: 1407
  },
  {
    display_text: '广西，钦州，灵山',
    search_text: 'gx, qz, ls; guang xi, qin zhou, ling shan; 广西，钦州，灵山',
    weaid: 1214
  },
  {
    display_text: '广西，河池，城区',
    search_text: 'gx, hc, cq; guang xi, he chi, cheng qu; 广西，河池，城区',
    weaid: 196
  },
  {
    display_text: '广西，河池，天峨',
    search_text: 'gx, hc, te; guang xi, he chi, tian e; 广西，河池，天峨',
    weaid: 1682
  },
  {
    display_text: '广西，河池，东兰',
    search_text: 'gx, hc, dl; guang xi, he chi, dong lan; 广西，河池，东兰',
    weaid: 632
  },
  {
    display_text: '广西，河池，巴马',
    search_text: 'gx, hc, bm; guang xi, he chi, ba ma; 广西，河池，巴马',
    weaid: 505
  },
  {
    display_text: '广西，河池，环江',
    search_text: 'gx, hc, hj; guang xi, he chi, huan jiang; 广西，河池，环江',
    weaid: 881
  },
  {
    display_text: '广西，河池，罗城',
    search_text: 'gx, hc, lc; guang xi, he chi, luo cheng; 广西，河池，罗城',
    weaid: 1128
  },
  {
    display_text: '广西，河池，宜州',
    search_text: 'gx, hc, yz; guang xi, he chi, yi zhou; 广西，河池，宜州',
    weaid: 2093
  },
  {
    display_text: '广西，河池，凤山',
    search_text: 'gx, hc, fs; guang xi, he chi, feng shan; 广西，河池，凤山',
    weaid: 742
  },
  {
    display_text: '广西，河池，南丹',
    search_text: 'gx, hc, nd; guang xi, he chi, nan dan; 广西，河池，南丹',
    weaid: 1356
  },
  {
    display_text: '广西，河池，都安',
    search_text: 'gx, hc, da; guang xi, he chi, dou an; 广西，河池，都安',
    weaid: 600
  },
  {
    display_text: '广西，河池，大化',
    search_text: 'gx, hc, dh; guang xi, he chi, da hua; 广西，河池，大化',
    weaid: 2623
  },
  {
    display_text: '广西，北海，城区',
    search_text: 'gx, bh, cq; guang xi, bei hai, cheng qu; 广西，北海，城区',
    weaid: 197
  },
  {
    display_text: '广西，北海，合浦',
    search_text: 'gx, bh, hp; guang xi, bei hai, he pu; 广西，北海，合浦',
    weaid: 918
  },
  {
    display_text: '广西，防城港，城区',
    search_text: 'gx, fcg, cq; guang xi, fang cheng gang, cheng qu; 广西，防城港，城区',
    weaid: 191
  },
  {
    display_text: '广西，防城港，上思',
    search_text: 'gx, fcg, ss; guang xi, fang cheng gang, shang si; 广西，防城港，上思',
    weaid: 1626
  },
  {
    display_text: '广西，防城港，东兴',
    search_text: 'gx, fcg, dx; guang xi, fang cheng gang, dong xing; 广西，防城港，东兴',
    weaid: 2625
  },
  {
    display_text: '广西，防城港，防城',
    search_text: 'gx, fcg, fc; guang xi, fang cheng gang, fang cheng; 广西，防城港，防城',
    weaid: 2626
  },
  {
    display_text: '贵州，贵阳，城区',
    search_text: 'gz, gy, cq; gui zhou, gui yang, cheng qu; 贵州，贵阳，城区',
    weaid: 200
  },
  {
    display_text: '贵州，贵阳，白云',
    search_text: 'gz, gy, by; gui zhou, gui yang, bai yun; 贵州，贵阳，白云',
    weaid: 2546
  },
  {
    display_text: '贵州，贵阳，花溪',
    search_text: 'gz, gy, hx; gui zhou, gui yang, hua xi; 贵州，贵阳，花溪',
    weaid: 2547
  },
  {
    display_text: '贵州，贵阳，乌当',
    search_text: 'gz, gy, wd; gui zhou, gui yang, wu dang; 贵州，贵阳，乌当',
    weaid: 2548
  },
  {
    display_text: '贵州，贵阳，息烽',
    search_text: 'gz, gy, xf; gui zhou, gui yang, xi feng; 贵州，贵阳，息烽',
    weaid: 1853
  },
  {
    display_text: '贵州，贵阳，开阳',
    search_text: 'gz, gy, ky; gui zhou, gui yang, kai yang; 贵州，贵阳，开阳',
    weaid: 1256
  },
  {
    display_text: '贵州，贵阳，修文',
    search_text: 'gz, gy, xw; gui zhou, gui yang, xiu wen; 贵州，贵阳，修文',
    weaid: 1912
  },
  {
    display_text: '贵州，贵阳，清镇',
    search_text: 'gz, gy, qz; gui zhou, gui yang, qing zhen; 贵州，贵阳，清镇',
    weaid: 1524
  },
  {
    display_text: '贵州，贵阳，云岩',
    search_text: 'gz, gy, yy; gui zhou, gui yang, yun yan; 贵州，贵阳，云岩',
    weaid: 2550
  },
  {
    display_text: '贵州，贵阳，南明',
    search_text: 'gz, gy, nm; gui zhou, gui yang, nan ming; 贵州，贵阳，南明',
    weaid: 2551
  },
  {
    display_text: '贵州，遵义，城区',
    search_text: 'gz, zy, cq; gui zhou, zun yi, cheng qu; 贵州，遵义，城区',
    weaid: 207
  },
  {
    display_text: '贵州，遵义，仁怀',
    search_text: 'gz, zy, rh; gui zhou, zun yi, ren huai; 贵州，遵义，仁怀',
    weaid: 1533
  },
  {
    display_text: '贵州，遵义，绥阳',
    search_text: 'gz, zy, sy; gui zhou, zun yi, sui yang; 贵州，遵义，绥阳',
    weaid: 1650
  },
  {
    display_text: '贵州，遵义，湄潭',
    search_text: 'gz, zy, mt; gui zhou, zun yi, mei tan; 贵州，遵义，湄潭',
    weaid: 1332
  },
  {
    display_text: '贵州，遵义，凤冈',
    search_text: 'gz, zy, fg; gui zhou, zun yi, feng gang; 贵州，遵义，凤冈',
    weaid: 713
  },
  {
    display_text: '贵州，遵义，桐梓',
    search_text: 'gz, zy, tz; gui zhou, zun yi, tong zi; 贵州，遵义，桐梓',
    weaid: 1744
  },
  {
    display_text: '贵州，遵义，赤水',
    search_text: 'gz, zy, cs; gui zhou, zun yi, chi shui; 贵州，遵义，赤水',
    weaid: 571
  },
  {
    display_text: '贵州，遵义，习水',
    search_text: 'gz, zy, xs; gui zhou, zun yi, xi shui; 贵州，遵义，习水',
    weaid: 1906
  },
  {
    display_text: '贵州，遵义，道真',
    search_text: 'gz, zy, dz; gui zhou, zun yi, dao zhen; 贵州，遵义，道真',
    weaid: 690
  },
  {
    display_text: '贵州，遵义，正安',
    search_text: 'gz, zy, za; gui zhou, zun yi, zheng an; 贵州，遵义，正安',
    weaid: 2096
  },
  {
    display_text: '贵州，遵义，务川',
    search_text: 'gz, zy, wc; gui zhou, zun yi, wu chuan; 贵州，遵义，务川',
    weaid: 1757
  },
  {
    display_text: '贵州，遵义，余庆',
    search_text: 'gz, zy, yq; gui zhou, zun yi, yu qing; 贵州，遵义，余庆',
    weaid: 2028
  },
  {
    display_text: '贵州，遵义，汇川',
    search_text: 'gz, zy, hc; gui zhou, zun yi, hui chuan; 贵州，遵义，汇川',
    weaid: 2553
  },
  {
    display_text: '贵州，遵义，红花岗',
    search_text: 'gz, zy, hhg; gui zhou, zun yi, hong hua gang; 贵州，遵义，红花岗',
    weaid: 2554
  },
  {
    display_text: '贵州，安顺，城区',
    search_text: 'gz, as, cq; gui zhou, an shun, cheng qu; 贵州，安顺，城区',
    weaid: 201
  },
  {
    display_text: '贵州，安顺，普定',
    search_text: 'gz, as, pd; gui zhou, an shun, pu ding; 贵州，安顺，普定',
    weaid: 1413
  },
  {
    display_text: '贵州，安顺，镇宁',
    search_text: 'gz, as, zn; gui zhou, an shun, zhen ning; 贵州，安顺，镇宁',
    weaid: 2136
  },
  {
    display_text: '贵州，安顺，平坝',
    search_text: 'gz, as, pb; gui zhou, an shun, ping ba; 贵州，安顺，平坝',
    weaid: 1406
  },
  {
    display_text: '贵州，安顺，紫云',
    search_text: 'gz, as, zy; gui zhou, an shun, zi yun; 贵州，安顺，紫云',
    weaid: 2176
  },
  {
    display_text: '贵州，安顺，关岭',
    search_text: 'gz, as, gl; gui zhou, an shun, guan ling; 贵州，安顺，关岭',
    weaid: 798
  },
  {
    display_text: '贵州，黔南，都匀',
    search_text: 'gz, qn, dy; gui zhou, qian nan, dou yun; 贵州，黔南，都匀',
    weaid: 202
  },
  {
    display_text: '贵州，黔南，贵定',
    search_text: 'gz, qn, gd; gui zhou, qian nan, gui ding; 贵州，黔南，贵定',
    weaid: 783
  },
  {
    display_text: '贵州，黔南，瓮安',
    search_text: 'gz, qn, wa; gui zhou, qian nan, weng an; 贵州，黔南，瓮安',
    weaid: 2555
  },
  {
    display_text: '贵州，黔南，长顺',
    search_text: 'gz, qn, zs; gui zhou, qian nan, zhang shun; 贵州，黔南，长顺',
    weaid: 572
  },
  {
    display_text: '贵州，黔南，福泉',
    search_text: 'gz, qn, fq; gui zhou, qian nan, fu quan; 贵州，黔南，福泉',
    weaid: 736
  },
  {
    display_text: '贵州，黔南，惠水',
    search_text: 'gz, qn, hs; gui zhou, qian nan, hui shui; 贵州，黔南，惠水',
    weaid: 932
  },
  {
    display_text: '贵州，黔南，龙里',
    search_text: 'gz, qn, ll; gui zhou, qian nan, long li; 贵州，黔南，龙里',
    weaid: 1176
  },
  {
    display_text: '贵州，黔南，罗甸',
    search_text: 'gz, qn, ld; gui zhou, qian nan, luo dian; 贵州，黔南，罗甸',
    weaid: 1137
  },
  {
    display_text: '贵州，黔南，平塘',
    search_text: 'gz, qn, pt; gui zhou, qian nan, ping tang; 贵州，黔南，平塘',
    weaid: 1441
  },
  {
    display_text: '贵州，黔南，独山',
    search_text: 'gz, qn, ds; gui zhou, qian nan, du shan; 贵州，黔南，独山',
    weaid: 657
  },
  {
    display_text: '贵州，黔南，三都',
    search_text: 'gz, qn, sd; gui zhou, qian nan, san dou; 贵州，黔南，三都',
    weaid: 1573
  },
  {
    display_text: '贵州，黔南，荔波',
    search_text: 'gz, qn, lb; gui zhou, qian nan, li bo; 贵州，黔南，荔波',
    weaid: 1111
  },
  {
    display_text: '贵州，黔东南，凯里',
    search_text: 'gz, qdn, kl; gui zhou, qian dong nan, kai li; 贵州，黔东南，凯里',
    weaid: 208
  },
  {
    display_text: '贵州，黔东南，岑巩',
    search_text: 'gz, qdn, cg; gui zhou, qian dong nan, cen gong; 贵州，黔东南，岑巩',
    weaid: 538
  },
  {
    display_text: '贵州，黔东南，施秉',
    search_text: 'gz, qdn, sb; gui zhou, qian dong nan, shi bing; 贵州，黔东南，施秉',
    weaid: 1554
  },
  {
    display_text: '贵州，黔东南，镇远',
    search_text: 'gz, qdn, zy; gui zhou, qian dong nan, zhen yuan; 贵州，黔东南，镇远',
    weaid: 2175
  },
  {
    display_text: '贵州，黔东南，黄平',
    search_text: 'gz, qdn, hp; gui zhou, qian dong nan, huang ping; 贵州，黔东南，黄平',
    weaid: 915
  },
  {
    display_text: '贵州，黔东南，麻江',
    search_text: 'gz, qdn, mj; gui zhou, qian dong nan, ma jiang; 贵州，黔东南，麻江',
    weaid: 1301
  },
  {
    display_text: '贵州，黔东南，丹寨',
    search_text: 'gz, qdn, dz; gui zhou, qian dong nan, dan zhai; 贵州，黔东南，丹寨',
    weaid: 691
  },
  {
    display_text: '贵州，黔东南，三穗',
    search_text: 'gz, qdn, ss; gui zhou, qian dong nan, san sui; 贵州，黔东南，三穗',
    weaid: 1586
  },
  {
    display_text: '贵州，黔东南，台江',
    search_text: 'gz, qdn, tj; gui zhou, qian dong nan, tai jiang; 贵州，黔东南，台江',
    weaid: 1698
  },
  {
    display_text: '贵州，黔东南，剑河',
    search_text: 'gz, qdn, jh; gui zhou, qian dong nan, jian he; 贵州，黔东南，剑河',
    weaid: 995
  },
  {
    display_text: '贵州，黔东南，雷山',
    search_text: 'gz, qdn, ls; gui zhou, qian dong nan, lei shan; 贵州，黔东南，雷山',
    weaid: 1216
  },
  {
    display_text: '贵州，黔东南，黎平',
    search_text: 'gz, qdn, lp; gui zhou, qian dong nan, li ping; 贵州，黔东南，黎平',
    weaid: 1188
  },
  {
    display_text: '贵州，黔东南，天柱',
    search_text: 'gz, qdn, tz; gui zhou, qian dong nan, tian zhu; 贵州，黔东南，天柱',
    weaid: 1742
  },
  {
    display_text: '贵州，黔东南，锦屏',
    search_text: 'gz, qdn, jp; gui zhou, qian dong nan, jin ping; 贵州，黔东南，锦屏',
    weaid: 1021
  },
  {
    display_text: '贵州，黔东南，榕江',
    search_text: 'gz, qdn, rj; gui zhou, qian dong nan, rong jiang; 贵州，黔东南，榕江',
    weaid: 1535
  },
  {
    display_text: '贵州，黔东南，从江',
    search_text: 'gz, qdn, cj; gui zhou, qian dong nan, cong jiang; 贵州，黔东南，从江',
    weaid: 548
  },
  {
    display_text: '贵州，铜仁，城区',
    search_text: 'gz, tr, cq; gui zhou, tong ren, cheng qu; 贵州，铜仁，城区',
    weaid: 204
  },
  {
    display_text: '贵州，铜仁，江口',
    search_text: 'gz, tr, jk; gui zhou, tong ren, jiang kou; 贵州，铜仁，江口',
    weaid: 1005
  },
  {
    display_text: '贵州，铜仁，玉屏',
    search_text: 'gz, tr, yp; gui zhou, tong ren, yu ping; 贵州，铜仁，玉屏',
    weaid: 2026
  },
  {
    display_text: '贵州，铜仁，万山',
    search_text: 'gz, tr, ws; gui zhou, tong ren, wan shan; 贵州，铜仁，万山',
    weaid: 1802
  },
  {
    display_text: '贵州，铜仁，思南',
    search_text: 'gz, tr, sn; gui zhou, tong ren, si nan; 贵州，铜仁，思南',
    weaid: 1602
  },
  {
    display_text: '贵州，铜仁，印江',
    search_text: 'gz, tr, yj; gui zhou, tong ren, yin jiang; 贵州，铜仁，印江',
    weaid: 1995
  },
  {
    display_text: '贵州，铜仁，石阡',
    search_text: 'gz, tr, sq; gui zhou, tong ren, shi qian; 贵州，铜仁，石阡',
    weaid: 1616
  },
  {
    display_text: '贵州，铜仁，沿河',
    search_text: 'gz, tr, yh; gui zhou, tong ren, yan he; 贵州，铜仁，沿河',
    weaid: 1987
  },
  {
    display_text: '贵州，铜仁，德江',
    search_text: 'gz, tr, dj; gui zhou, tong ren, de jiang; 贵州，铜仁，德江',
    weaid: 627
  },
  {
    display_text: '贵州，铜仁，松桃',
    search_text: 'gz, tr, st; gui zhou, tong ren, song tao; 贵州，铜仁，松桃',
    weaid: 1630
  },
  {
    display_text: '贵州，毕节，城区',
    search_text: 'gz, bj, cq; gui zhou, bi jie, cheng qu; 贵州，毕节，城区',
    weaid: 205
  },
  {
    display_text: '贵州，毕节，赫章',
    search_text: 'gz, bj, hz; gui zhou, bi jie, he zhang; 贵州，毕节，赫章',
    weaid: 969
  },
  {
    display_text: '贵州，毕节，金沙',
    search_text: 'gz, bj, js; gui zhou, bi jie, jin sha; 贵州，毕节，金沙',
    weaid: 1032
  },
  {
    display_text: '贵州，毕节，威宁',
    search_text: 'gz, bj, wn; gui zhou, bi jie, wei ning; 贵州，毕节，威宁',
    weaid: 1788
  },
  {
    display_text: '贵州，毕节，大方',
    search_text: 'gz, bj, df; gui zhou, bi jie, da fang; 贵州，毕节，大方',
    weaid: 613
  },
  {
    display_text: '贵州，毕节，纳雍',
    search_text: 'gz, bj, ny; gui zhou, bi jie, na yong; 贵州，毕节，纳雍',
    weaid: 1397
  },
  {
    display_text: '贵州，毕节，织金',
    search_text: 'gz, bj, zj; gui zhou, bi jie, zhi jin; 贵州，毕节，织金',
    weaid: 2124
  },
  {
    display_text: '贵州，毕节，黔西',
    search_text: 'gz, bj, qx; gui zhou, bi jie, qian xi; 贵州，毕节，黔西',
    weaid: 2556
  },
  {
    display_text: '贵州，六盘水，水城',
    search_text: 'gz, lps, sc; gui zhou, liu pan shui, shui cheng; 贵州，六盘水，水城',
    weaid: 206
  },
  {
    display_text: '贵州，六盘水，六枝',
    search_text: 'gz, lps, lz; gui zhou, liu pan shui, liu zhi; 贵州，六盘水，六枝',
    weaid: 1277
  },
  {
    display_text: '贵州，六盘水，盘县',
    search_text: 'gz, lps, px; gui zhou, liu pan shui, pan xian; 贵州，六盘水，盘县',
    weaid: 1449
  },
  {
    display_text: '贵州，黔西南，兴义',
    search_text: 'gz, qxn, xy; gui zhou, qian xi nan, xing yi; 贵州，黔西南，兴义',
    weaid: 2557
  },
  {
    display_text: '贵州，黔西南，晴隆',
    search_text: 'gz, qxn, ql; gui zhou, qian xi nan, qing long; 贵州，黔西南，晴隆',
    weaid: 1483
  },
  {
    display_text: '贵州，黔西南，兴仁',
    search_text: 'gz, qxn, xr; gui zhou, qian xi nan, xing ren; 贵州，黔西南，兴仁',
    weaid: 1898
  },
  {
    display_text: '贵州，黔西南，贞丰',
    search_text: 'gz, qxn, zf; gui zhou, qian xi nan, zhen feng; 贵州，黔西南，贞丰',
    weaid: 2109
  },
  {
    display_text: '贵州，黔西南，望谟',
    search_text: 'gz, qxn, wm; gui zhou, qian xi nan, wang mo; 贵州，黔西南，望谟',
    weaid: 1785
  },
  {
    display_text: '贵州，黔西南，安龙',
    search_text: 'gz, qxn, al; gui zhou, qian xi nan, an long; 贵州，黔西南，安龙',
    weaid: 461
  },
  {
    display_text: '贵州，黔西南，册亨',
    search_text: 'gz, qxn, ch; gui zhou, qian xi nan, ce heng; 贵州，黔西南，册亨',
    weaid: 542
  },
  {
    display_text: '贵州，黔西南，普安',
    search_text: 'gz, qxn, pa; gui zhou, qian xi nan, pu an; 贵州，黔西南，普安',
    weaid: 1404
  },
  {
    display_text: '海南，海口',
    search_text: 'hn, hk; hai nan, hai kou; 海南，海口',
    weaid: 363
  },
  {
    display_text: '海南，三亚',
    search_text: 'hn, sy; hai nan, san ya; 海南，三亚',
    weaid: 364
  },
  {
    display_text: '海南，东方',
    search_text: 'hn, df; hai nan, dong fang; 海南，东方',
    weaid: 365
  },
  {
    display_text: '海南，临高',
    search_text: 'hn, lg; hai nan, lin gao; 海南，临高',
    weaid: 366
  },
  {
    display_text: '海南，澄迈',
    search_text: 'hn, cm; hai nan, cheng mai; 海南，澄迈',
    weaid: 367
  },
  {
    display_text: '海南，儋州',
    search_text: 'hn, dz; hai nan, dan zhou; 海南，儋州',
    weaid: 368
  },
  {
    display_text: '海南，昌江',
    search_text: 'hn, cj; hai nan, chang jiang; 海南，昌江',
    weaid: 369
  },
  {
    display_text: '海南，白沙',
    search_text: 'hn, bs; hai nan, bai sha; 海南，白沙',
    weaid: 370
  },
  {
    display_text: '海南，琼中',
    search_text: 'hn, qz; hai nan, qiong zhong; 海南，琼中',
    weaid: 371
  },
  {
    display_text: '海南，定安',
    search_text: 'hn, da; hai nan, ding an; 海南，定安',
    weaid: 372
  },
  {
    display_text: '海南，屯昌',
    search_text: 'hn, tc; hai nan, tun chang; 海南，屯昌',
    weaid: 373
  },
  {
    display_text: '海南，琼海',
    search_text: 'hn, qh; hai nan, qiong hai; 海南，琼海',
    weaid: 374
  },
  {
    display_text: '海南，文昌',
    search_text: 'hn, wc; hai nan, wen chang; 海南，文昌',
    weaid: 375
  },
  {
    display_text: '海南，保亭',
    search_text: 'hn, bt; hai nan, bao ting; 海南，保亭',
    weaid: 376
  },
  {
    display_text: '海南，万宁',
    search_text: 'hn, wn; hai nan, wan ning; 海南，万宁',
    weaid: 377
  },
  {
    display_text: '海南，陵水',
    search_text: 'hn, ls; hai nan, ling shui; 海南，陵水',
    weaid: 378
  },
  {
    display_text: '海南，乐东',
    search_text: 'hn, ld; hai nan, le dong; 海南，乐东',
    weaid: 381
  },
  {
    display_text: '海南，五指山',
    search_text: 'hn, wzs; hai nan, wu zhi shan; 海南，五指山',
    weaid: 382
  },
  {
    display_text: '韩国，首尔（Seoul）',
    search_text: 'hg, se; han guo, shou er; 韩国，首尔（Seoul）',
    weaid: 2186
  },
  {
    display_text: '河北，石家庄，城区',
    search_text: 'hb, sjz, cq; he bei, shi jia zhuang, cheng qu; 河北，石家庄，城区',
    weaid: 48
  },
  {
    display_text: '河北，石家庄，井陉',
    search_text: 'hb, sjz, jx; he bei, shi jia zhuang, jing xing; 河北，石家庄，井陉',
    weaid: 1000
  },
  {
    display_text: '河北，石家庄，正定',
    search_text: 'hb, sjz, zd; he bei, shi jia zhuang, zheng ding; 河北，石家庄，正定',
    weaid: 2104
  },
  {
    display_text: '河北，石家庄，栾城',
    search_text: 'hb, sjz, lc; he bei, shi jia zhuang, luan cheng; 河北，石家庄，栾城',
    weaid: 1114
  },
  {
    display_text: '河北，石家庄，行唐',
    search_text: 'hb, sjz, xt; he bei, shi jia zhuang, xing tang; 河北，石家庄，行唐',
    weaid: 1907
  },
  {
    display_text: '河北，石家庄，灵寿',
    search_text: 'hb, sjz, ls; he bei, shi jia zhuang, ling shou; 河北，石家庄，灵寿',
    weaid: 1200
  },
  {
    display_text: '河北，石家庄，高邑',
    search_text: 'hb, sjz, gy; he bei, shi jia zhuang, gao yi; 河北，石家庄，高邑',
    weaid: 832
  },
  {
    display_text: '河北，石家庄，深泽',
    search_text: 'hb, sjz, sz; he bei, shi jia zhuang, shen ze; 河北，石家庄，深泽',
    weaid: 1660
  },
  {
    display_text: '河北，石家庄，赞皇',
    search_text: 'hb, sjz, zh; he bei, shi jia zhuang, zan huang; 河北，石家庄，赞皇',
    weaid: 2117
  },
  {
    display_text: '河北，石家庄，无极',
    search_text: 'hb, sjz, wj; he bei, shi jia zhuang, wu ji; 河北，石家庄，无极',
    weaid: 1771
  },
  {
    display_text: '河北，石家庄，平山',
    search_text: 'hb, sjz, ps; he bei, shi jia zhuang, ping shan; 河北，石家庄，平山',
    weaid: 1434
  },
  {
    display_text: '河北，石家庄，元氏',
    search_text: 'hb, sjz, ys; he bei, shi jia zhuang, yuan shi; 河北，石家庄，元氏',
    weaid: 2036
  },
  {
    display_text: '河北，石家庄，赵县',
    search_text: 'hb, sjz, zx; he bei, shi jia zhuang, zhao xian; 河北，石家庄，赵县',
    weaid: 2157
  },
  {
    display_text: '河北，石家庄，辛集',
    search_text: 'hb, sjz, xj; he bei, shi jia zhuang, xin ji; 河北，石家庄，辛集',
    weaid: 1872
  },
  {
    display_text: '河北，石家庄，藁城',
    search_text: 'hb, sjz, gc; he bei, shi jia zhuang, gao cheng; 河北，石家庄，藁城',
    weaid: 774
  },
  {
    display_text: '河北，石家庄，晋州',
    search_text: 'hb, sjz, jz; he bei, shi jia zhuang, jin zhou; 河北，石家庄，晋州',
    weaid: 1075
  },
  {
    display_text: '河北，石家庄，新乐',
    search_text: 'hb, sjz, xl; he bei, shi jia zhuang, xin le; 河北，石家庄，新乐',
    weaid: 1882
  },
  {
    display_text: '河北，石家庄，鹿泉',
    search_text: 'hb, sjz, lq; he bei, shi jia zhuang, lu quan; 河北，石家庄，鹿泉',
    weaid: 2276
  },
  {
    display_text: '河北，保定，城区',
    search_text: 'hb, bd, cq; he bei, bao ding, cheng qu; 河北，保定，城区',
    weaid: 57
  },
  {
    display_text: '河北，保定，满城',
    search_text: 'hb, bd, mc; he bei, bao ding, man cheng; 河北，保定，满城',
    weaid: 1283
  },
  {
    display_text: '河北，保定，阜平',
    search_text: 'hb, bd, fp; he bei, bao ding, fu ping; 河北，保定，阜平',
    weaid: 730
  },
  {
    display_text: '河北，保定，徐水',
    search_text: 'hb, bd, xs; he bei, bao ding, xu shui; 河北，保定，徐水',
    weaid: 1899
  },
  {
    display_text: '河北，保定，唐县',
    search_text: 'hb, bd, tx; he bei, bao ding, tang xian; 河北，保定，唐县',
    weaid: 1729
  },
  {
    display_text: '河北，保定，高阳',
    search_text: 'hb, bd, gy; he bei, bao ding, gao yang; 河北，保定，高阳',
    weaid: 826
  },
  {
    display_text: '河北，保定，涞源',
    search_text: 'hb, bd, ly; he bei, bao ding, lai yuan; 河北，保定，涞源',
    weaid: 1265
  },
  {
    display_text: '河北，保定，望都',
    search_text: 'hb, bd, wd; he bei, bao ding, wang dou; 河北，保定，望都',
    weaid: 1762
  },
  {
    display_text: '河北，保定，易县',
    search_text: 'hb, bd, yx; he bei, bao ding, yi xian; 河北，保定，易县',
    weaid: 2060
  },
  {
    display_text: '河北，保定，曲阳',
    search_text: 'hb, bd, qy; he bei, bao ding, qu yang; 河北，保定，曲阳',
    weaid: 1510
  },
  {
    display_text: '河北，保定，蠡县',
    search_text: 'hb, bd, lx; he bei, bao ding, li xian; 河北，保定，蠡县',
    weaid: 1232
  },
  {
    display_text: '河北，保定，顺平',
    search_text: 'hb, bd, sp; he bei, bao ding, shun ping; 河北，保定，顺平',
    weaid: 1613
  },
  {
    display_text: '河北，保定，涿州',
    search_text: 'hb, bd, zz; he bei, bao ding, zhuo zhou; 河北，保定，涿州',
    weaid: 2180
  },
  {
    display_text: '河北，保定，定州',
    search_text: 'hb, bd, dz; he bei, bao ding, ding zhou; 河北，保定，定州',
    weaid: 686
  },
  {
    display_text: '河北，保定，安国',
    search_text: 'hb, bd, ag; he bei, bao ding, an guo; 河北，保定，安国',
    weaid: 454
  },
  {
    display_text: '河北，保定，高碑店',
    search_text: 'hb, bd, gbd; he bei, bao ding, gao bei dian; 河北，保定，高碑店',
    weaid: 773
  },
  {
    display_text: '河北，保定，涞水',
    search_text: 'hb, bd, ls; he bei, bao ding, lai shui; 河北，保定，涞水',
    weaid: 2277
  },
  {
    display_text: '河北，保定，定兴',
    search_text: 'hb, bd, dx; he bei, bao ding, ding xing; 河北，保定，定兴',
    weaid: 2278
  },
  {
    display_text: '河北，保定，清苑',
    search_text: 'hb, bd, qy; he bei, bao ding, qing yuan; 河北，保定，清苑',
    weaid: 1517
  },
  {
    display_text: '河北，保定，博野',
    search_text: 'hb, bd, by; he bei, bao ding, bo ye; 河北，保定，博野',
    weaid: 2279
  },
  {
    display_text: '河北，张家口，城区',
    search_text: 'hb, zjk, cq; he bei, zhang jia kou, cheng qu; 河北，张家口，城区',
    weaid: 49
  },
  {
    display_text: '河北，张家口，宣化',
    search_text: 'hb, zjk, xh; he bei, zhang jia kou, xuan hua; 河北，张家口，宣化',
    weaid: 1865
  },
  {
    display_text: '河北，张家口，张北',
    search_text: 'hb, zjk, zb; he bei, zhang jia kou, zhang bei; 河北，张家口，张北',
    weaid: 2099
  },
  {
    display_text: '河北，张家口，康保',
    search_text: 'hb, zjk, kb; he bei, zhang jia kou, kang bao; 河北，张家口，康保',
    weaid: 1081
  },
  {
    display_text: '河北，张家口，沽源',
    search_text: 'hb, zjk, gy; he bei, zhang jia kou, gu yuan; 河北，张家口，沽源',
    weaid: 835
  },
  {
    display_text: '河北，张家口，尚义',
    search_text: 'hb, zjk, sy; he bei, zhang jia kou, shang yi; 河北，张家口，尚义',
    weaid: 1653
  },
  {
    display_text: '河北，张家口，蔚县',
    search_text: 'hb, zjk, yx; he bei, zhang jia kou, yu xian; 河北，张家口，蔚县',
    weaid: 1809
  },
  {
    display_text: '河北，张家口，阳原',
    search_text: 'hb, zjk, yy; he bei, zhang jia kou, yang yuan; 河北，张家口，阳原',
    weaid: 2085
  },
  {
    display_text: '河北，张家口，怀安',
    search_text: 'hb, zjk, ha; he bei, zhang jia kou, huai an; 河北，张家口，怀安',
    weaid: 847
  },
  {
    display_text: '河北，张家口，万全',
    search_text: 'hb, zjk, wq; he bei, zhang jia kou, wan quan; 河北，张家口，万全',
    weaid: 1794
  },
  {
    display_text: '河北，张家口，怀来',
    search_text: 'hb, zjk, hl; he bei, zhang jia kou, huai lai; 河北，张家口，怀来',
    weaid: 888
  },
  {
    display_text: '河北，张家口，涿鹿',
    search_text: 'hb, zjk, zl; he bei, zhang jia kou, zhuo lu; 河北，张家口，涿鹿',
    weaid: 2133
  },
  {
    display_text: '河北，张家口，赤城',
    search_text: 'hb, zjk, cc; he bei, zhang jia kou, chi cheng; 河北，张家口，赤城',
    weaid: 531
  },
  {
    display_text: '河北，张家口，崇礼',
    search_text: 'hb, zjk, cl; he bei, zhang jia kou, chong li; 河北，张家口，崇礼',
    weaid: 555
  },
  {
    display_text: '河北，承德，城区',
    search_text: 'hb, cd, cq; he bei, cheng de, cheng qu; 河北，承德，城区',
    weaid: 50
  },
  {
    display_text: '河北，承德，承德县',
    search_text: 'hb, cd, cdx; he bei, cheng de, cheng de xian; 河北，承德，承德县',
    weaid: 2280
  },
  {
    display_text: '河北，承德，兴隆',
    search_text: 'hb, cd, xl; he bei, cheng de, xing long; 河北，承德，兴隆',
    weaid: 1885
  },
  {
    display_text: '河北，承德，平泉',
    search_text: 'hb, cd, pq; he bei, cheng de, ping quan; 河北，承德，平泉',
    weaid: 1431
  },
  {
    display_text: '河北，承德，滦平',
    search_text: 'hb, cd, lp; he bei, cheng de, luan ping; 河北，承德，滦平',
    weaid: 1538
  },
  {
    display_text: '河北，承德，隆化',
    search_text: 'hb, cd, lh; he bei, cheng de, long hua; 河北，承德，隆化',
    weaid: 1154
  },
  {
    display_text: '河北，承德，丰宁',
    search_text: 'hb, cd, fn; he bei, cheng de, feng ning; 河北，承德，丰宁',
    weaid: 729
  },
  {
    display_text: '河北，承德，宽城',
    search_text: 'hb, cd, kc; he bei, cheng de, kuan cheng; 河北，承德，宽城',
    weaid: 1083
  },
  {
    display_text: '河北，承德，围场',
    search_text: 'hb, cd, wc; he bei, cheng de, wei chang; 河北，承德，围场',
    weaid: 1752
  },
  {
    display_text: '河北，唐山，城区',
    search_text: 'hb, ts, cq; he bei, tang shan, cheng qu; 河北，唐山，城区',
    weaid: 51
  },
  {
    display_text: '河北，唐山，丰南',
    search_text: 'hb, ts, fn; he bei, tang shan, feng nan; 河北，唐山，丰南',
    weaid: 725
  },
  {
    display_text: '河北，唐山，丰润',
    search_text: 'hb, ts, fr; he bei, tang shan, feng run; 河北，唐山，丰润',
    weaid: 737
  },
  {
    display_text: '河北，唐山，滦县',
    search_text: 'hb, ts, lx; he bei, tang shan, luan xian; 河北，唐山，滦县',
    weaid: 1544
  },
  {
    display_text: '河北，唐山，滦南',
    search_text: 'hb, ts, ln; he bei, tang shan, luan nan; 河北，唐山，滦南',
    weaid: 1184
  },
  {
    display_text: '河北，唐山，乐亭',
    search_text: 'hb, ts, lt; he bei, tang shan, le ting; 河北，唐山，乐亭',
    weaid: 1227
  },
  {
    display_text: '河北，唐山，迁西',
    search_text: 'hb, ts, qx; he bei, tang shan, qian xi; 河北，唐山，迁西',
    weaid: 1500
  },
  {
    display_text: '河北，唐山，玉田',
    search_text: 'hb, ts, yt; he bei, tang shan, yu tian; 河北，唐山，玉田',
    weaid: 2056
  },
  {
    display_text: '河北，唐山，曹妃甸',
    search_text: 'hb, ts, cfd; he bei, tang shan, cao fei dian; 河北，唐山，曹妃甸',
    weaid: 1687
  },
  {
    display_text: '河北，唐山，遵化',
    search_text: 'hb, ts, zh; he bei, tang shan, zun hua; 河北，唐山，遵化',
    weaid: 2116
  },
  {
    display_text: '河北，唐山，迁安',
    search_text: 'hb, ts, qa; he bei, tang shan, qian an; 河北，唐山，迁安',
    weaid: 1466
  },
  {
    display_text: '河北，廊坊，城区',
    search_text: 'hb, lf, cq; he bei, lang fang, cheng qu; 河北，廊坊，城区',
    weaid: 58
  },
  {
    display_text: '河北，廊坊，固安',
    search_text: 'hb, lf, ga; he bei, lang fang, gu an; 河北，廊坊，固安',
    weaid: 772
  },
  {
    display_text: '河北，廊坊，永清',
    search_text: 'hb, lf, yq; he bei, lang fang, yong qing; 河北，廊坊，永清',
    weaid: 2030
  },
  {
    display_text: '河北，廊坊，香河',
    search_text: 'hb, lf, xh; he bei, lang fang, xiang he; 河北，廊坊，香河',
    weaid: 1863
  },
  {
    display_text: '河北，廊坊，大城',
    search_text: 'hb, lf, dc; he bei, lang fang, dai cheng; 河北，廊坊，大城',
    weaid: 609
  },
  {
    display_text: '河北，廊坊，文安',
    search_text: 'hb, lf, wa; he bei, lang fang, wen an; 河北，廊坊，文安',
    weaid: 1747
  },
  {
    display_text: '河北，廊坊，大厂',
    search_text: 'hb, lf, dc; he bei, lang fang, da chang; 河北，廊坊，大厂',
    weaid: 610
  },
  {
    display_text: '河北，廊坊，霸州',
    search_text: 'hb, lf, bz; he bei, lang fang, ba zhou; 河北，廊坊，霸州',
    weaid: 523
  },
  {
    display_text: '河北，廊坊，三河',
    search_text: 'hb, lf, sh; he bei, lang fang, san he; 河北，廊坊，三河',
    weaid: 1580
  },
  {
    display_text: '河北，沧州，城区',
    search_text: 'hb, cz, cq; he bei, cang zhou, cheng qu; 河北，沧州，城区',
    weaid: 53
  },
  {
    display_text: '河北，沧州，青县',
    search_text: 'hb, cz, qx; he bei, cang zhou, qing xian; 河北，沧州，青县',
    weaid: 1501
  },
  {
    display_text: '河北，沧州，东光',
    search_text: 'hb, cz, dg; he bei, cang zhou, dong guang; 河北，沧州，东光',
    weaid: 619
  },
  {
    display_text: '河北，沧州，海兴',
    search_text: 'hb, cz, hx; he bei, cang zhou, hai xing; 河北，沧州，海兴',
    weaid: 2282
  },
  {
    display_text: '河北，沧州，盐山',
    search_text: 'hb, cz, ys; he bei, cang zhou, yan shan; 河北，沧州，盐山',
    weaid: 2283
  },
  {
    display_text: '河北，沧州，肃宁',
    search_text: 'hb, cz, sn; he bei, cang zhou, su ning; 河北，沧州，肃宁',
    weaid: 2284
  },
  {
    display_text: '河北，沧州，南皮',
    search_text: 'hb, cz, np; he bei, cang zhou, nan pi; 河北，沧州，南皮',
    weaid: 2285
  },
  {
    display_text: '河北，沧州，吴桥',
    search_text: 'hb, cz, wq; he bei, cang zhou, wu qiao; 河北，沧州，吴桥',
    weaid: 1792
  },
  {
    display_text: '河北，沧州，献县',
    search_text: 'hb, cz, xx; he bei, cang zhou, xian xian; 河北，沧州，献县',
    weaid: 2286
  },
  {
    display_text: '河北，沧州，孟村',
    search_text: 'hb, cz, mc; he bei, cang zhou, meng cun; 河北，沧州，孟村',
    weaid: 2287
  },
  {
    display_text: '河北，沧州，泊头',
    search_text: 'hb, cz, pt; he bei, cang zhou, po tou; 河北，沧州，泊头',
    weaid: 512
  },
  {
    display_text: '河北，沧州，任丘',
    search_text: 'hb, cz, rq; he bei, cang zhou, ren qiu; 河北，沧州，任丘',
    weaid: 1540
  },
  {
    display_text: '河北，沧州，黄骅',
    search_text: 'hb, cz, hh; he bei, cang zhou, huang hua; 河北，沧州，黄骅',
    weaid: 874
  },
  {
    display_text: '河北，沧州，河间',
    search_text: 'hb, cz, hj; he bei, cang zhou, he jian; 河北，沧州，河间',
    weaid: 876
  },
  {
    display_text: '河北，沧州，沧县',
    search_text: 'hb, cz, cx; he bei, cang zhou, cang xian; 河北，沧州，沧县',
    weaid: 2288
  },
  {
    display_text: '河北，衡水，城区',
    search_text: 'hb, hs, cq; he bei, heng shui, cheng qu; 河北，衡水，城区',
    weaid: 54
  },
  {
    display_text: '河北，衡水，枣强',
    search_text: 'hb, hs, zq; he bei, heng shui, zao qiang; 河北，衡水，枣强',
    weaid: 2289
  },
  {
    display_text: '河北，衡水，武邑',
    search_text: 'hb, hs, wy; he bei, heng shui, wu yi; 河北，衡水，武邑',
    weaid: 2290
  },
  {
    display_text: '河北，衡水，武强',
    search_text: 'hb, hs, wq; he bei, heng shui, wu qiang; 河北，衡水，武强',
    weaid: 2291
  },
  {
    display_text: '河北，衡水，饶阳',
    search_text: 'hb, hs, ry; he bei, heng shui, rao yang; 河北，衡水，饶阳',
    weaid: 2292
  },
  {
    display_text: '河北，衡水，安平',
    search_text: 'hb, hs, ap; he bei, heng shui, an ping; 河北，衡水，安平',
    weaid: 465
  },
  {
    display_text: '河北，衡水，故城',
    search_text: 'hb, hs, gc; he bei, heng shui, gu cheng; 河北，衡水，故城',
    weaid: 2293
  },
  {
    display_text: '河北，衡水，景县',
    search_text: 'hb, hs, jx; he bei, heng shui, jing xian; 河北，衡水，景县',
    weaid: 2294
  },
  {
    display_text: '河北，衡水，阜城',
    search_text: 'hb, hs, fc; he bei, heng shui, fu cheng; 河北，衡水，阜城',
    weaid: 2295
  },
  {
    display_text: '河北，衡水，冀州',
    search_text: 'hb, hs, jz; he bei, heng shui, ji zhou; 河北，衡水，冀州',
    weaid: 2296
  },
  {
    display_text: '河北，衡水，深州',
    search_text: 'hb, hs, sz; he bei, heng shui, shen zhou; 河北，衡水，深州',
    weaid: 2212
  },
  {
    display_text: '河北，邢台，城区',
    search_text: 'hb, xt, cq; he bei, xing tai, cheng qu; 河北，邢台，城区',
    weaid: 55
  },
  {
    display_text: '河北，邢台，临城',
    search_text: 'hb, xt, lc; he bei, xing tai, lin cheng; 河北，邢台，临城',
    weaid: 2297
  },
  {
    display_text: '河北，邢台，内丘',
    search_text: 'hb, xt, nq; he bei, xing tai, nei qiu; 河北，邢台，内丘',
    weaid: 2298
  },
  {
    display_text: '河北，邢台，柏乡',
    search_text: 'hb, xt, bx; he bei, xing tai, bai xiang; 河北，邢台，柏乡',
    weaid: 2299
  },
  {
    display_text: '河北，邢台，隆尧',
    search_text: 'hb, xt, ly; he bei, xing tai, long yao; 河北，邢台，隆尧',
    weaid: 2300
  },
  {
    display_text: '河北，邢台，南和',
    search_text: 'hb, xt, nh; he bei, xing tai, nan he; 河北，邢台，南和',
    weaid: 2301
  },
  {
    display_text: '河北，邢台，宁晋',
    search_text: 'hb, xt, nj; he bei, xing tai, ning jin; 河北，邢台，宁晋',
    weaid: 2302
  },
  {
    display_text: '河北，邢台，巨鹿',
    search_text: 'hb, xt, jl; he bei, xing tai, ju lu; 河北，邢台，巨鹿',
    weaid: 2303
  },
  {
    display_text: '河北，邢台，新河',
    search_text: 'hb, xt, xh; he bei, xing tai, xin he; 河北，邢台，新河',
    weaid: 2304
  },
  {
    display_text: '河北，邢台，广宗',
    search_text: 'hb, xt, gz; he bei, xing tai, guang zong; 河北，邢台，广宗',
    weaid: 2305
  },
  {
    display_text: '河北，邢台，平乡',
    search_text: 'hb, xt, px; he bei, xing tai, ping xiang; 河北，邢台，平乡',
    weaid: 2306
  },
  {
    display_text: '河北，邢台，威县',
    search_text: 'hb, xt, wx; he bei, xing tai, wei xian; 河北，邢台，威县',
    weaid: 2307
  },
  {
    display_text: '河北，邢台，清河',
    search_text: 'hb, xt, qh; he bei, xing tai, qing he; 河北，邢台，清河',
    weaid: 2308
  },
  {
    display_text: '河北，邢台，临西',
    search_text: 'hb, xt, lx; he bei, xing tai, lin xi; 河北，邢台，临西',
    weaid: 2309
  },
  {
    display_text: '河北，邢台，南宫',
    search_text: 'hb, xt, ng; he bei, xing tai, nan gong; 河北，邢台，南宫',
    weaid: 1360
  },
  {
    display_text: '河北，邢台，沙河',
    search_text: 'hb, xt, sh; he bei, xing tai, sha he; 河北，邢台，沙河',
    weaid: 1581
  },
  {
    display_text: '河北，邢台，任县',
    search_text: 'hb, xt, rx; he bei, xing tai, ren xian; 河北，邢台，任县',
    weaid: 2310
  },
  {
    display_text: '河北，邯郸，城区',
    search_text: 'hb, hd, cq; he bei, han dan, cheng qu; 河北，邯郸，城区',
    weaid: 56
  },
  {
    display_text: '河北，邯郸，峰峰',
    search_text: 'hb, hd, ff; he bei, han dan, feng feng; 河北，邯郸，峰峰',
    weaid: 2311
  },
  {
    display_text: '河北，邯郸，临漳',
    search_text: 'hb, hd, lz; he bei, han dan, lin zhang; 河北，邯郸，临漳',
    weaid: 2312
  },
  {
    display_text: '河北，邯郸，成安',
    search_text: 'hb, hd, ca; he bei, han dan, cheng an; 河北，邯郸，成安',
    weaid: 2313
  },
  {
    display_text: '河北，邯郸，大名',
    search_text: 'hb, hd, dm; he bei, han dan, da ming; 河北，邯郸，大名',
    weaid: 2314
  },
  {
    display_text: '河北，邯郸，涉县',
    search_text: 'hb, hd, sx; he bei, han dan, she xian; 河北，邯郸，涉县',
    weaid: 1634
  },
  {
    display_text: '河北，邯郸，磁县',
    search_text: 'hb, hd, cx; he bei, han dan, ci xian; 河北，邯郸，磁县',
    weaid: 2315
  },
  {
    display_text: '河北，邯郸，肥乡',
    search_text: 'hb, hd, fx; he bei, han dan, fei xiang; 河北，邯郸，肥乡',
    weaid: 746
  },
  {
    display_text: '河北，邯郸，永年',
    search_text: 'hb, hd, yn; he bei, han dan, yong nian; 河北，邯郸，永年',
    weaid: 2021
  },
  {
    display_text: '河北，邯郸，邱县',
    search_text: 'hb, hd, qx; he bei, han dan, qiu xian; 河北，邯郸，邱县',
    weaid: 2316
  },
  {
    display_text: '河北，邯郸，鸡泽',
    search_text: 'hb, hd, jz; he bei, han dan, ji ze; 河北，邯郸，鸡泽',
    weaid: 2317
  },
  {
    display_text: '河北，邯郸，广平',
    search_text: 'hb, hd, gp; he bei, han dan, guang ping; 河北，邯郸，广平',
    weaid: 808
  },
  {
    display_text: '河北，邯郸，馆陶',
    search_text: 'hb, hd, gt; he bei, han dan, guan tao; 河北，邯郸，馆陶',
    weaid: 818
  },
  {
    display_text: '河北，邯郸，魏县',
    search_text: 'hb, hd, wx; he bei, han dan, wei xian; 河北，邯郸，魏县',
    weaid: 2318
  },
  {
    display_text: '河北，邯郸，曲周',
    search_text: 'hb, hd, qz; he bei, han dan, qu zhou; 河北，邯郸，曲周',
    weaid: 1521
  },
  {
    display_text: '河北，邯郸，武安',
    search_text: 'hb, hd, wa; he bei, han dan, wu an; 河北，邯郸，武安',
    weaid: 1745
  },
  {
    display_text: '河北，秦皇岛，城区',
    search_text: 'hb, qhd, cq; he bei, qin huang dao, cheng qu; 河北，秦皇岛，城区',
    weaid: 52
  },
  {
    display_text: '河北，秦皇岛，青龙',
    search_text: 'hb, qhd, ql; he bei, qin huang dao, qing long; 河北，秦皇岛，青龙',
    weaid: 2319
  },
  {
    display_text: '河北，秦皇岛，昌黎',
    search_text: 'hb, qhd, cl; he bei, qin huang dao, chang li; 河北，秦皇岛，昌黎',
    weaid: 554
  },
  {
    display_text: '河北，秦皇岛，抚宁',
    search_text: 'hb, qhd, fn; he bei, qin huang dao, fu ning; 河北，秦皇岛，抚宁',
    weaid: 2320
  },
  {
    display_text: '河北，秦皇岛，卢龙',
    search_text: 'hb, qhd, ll; he bei, qin huang dao, lu long; 河北，秦皇岛，卢龙',
    weaid: 2321
  },
  {
    display_text: '河北，秦皇岛，北戴河',
    search_text: 'hb, qhd, bdh; he bei, qin huang dao, bei dai he; 河北，秦皇岛，北戴河',
    weaid: 2322
  },
  {
    display_text: '河北，雄安新区，容城',
    search_text: 'hb, xaxq, rc; he bei, xiong an xin qu, rong cheng; 河北，雄安新区，容城',
    weaid: 1527
  },
  {
    display_text: '河北，雄安新区，安新',
    search_text: 'hb, xaxq, ax; he bei, xiong an xin qu, an xin; 河北，雄安新区，安新',
    weaid: 2730
  },
  {
    display_text: '河北，雄安新区，雄县',
    search_text: 'hb, xaxq, xx; he bei, xiong an xin qu, xiong xian; 河北，雄安新区，雄县',
    weaid: 2729
  },
  {
    display_text: '河南，郑州，城区',
    search_text: 'hn, zz, cq; he nan, zheng zhou, cheng qu; 河南，郑州，城区',
    weaid: 59
  },
  {
    display_text: '河南，郑州，巩义',
    search_text: 'hn, zz, gy; he nan, zheng zhou, gong yi; 河南，郑州，巩义',
    weaid: 833
  },
  {
    display_text: '河南，郑州，荥阳',
    search_text: 'hn, zz, xy; he nan, zheng zhou, xing yang; 河南，郑州，荥阳',
    weaid: 1929
  },
  {
    display_text: '河南，郑州，登封',
    search_text: 'hn, zz, df; he nan, zheng zhou, deng feng; 河南，郑州，登封',
    weaid: 616
  },
  {
    display_text: '河南，郑州，新密',
    search_text: 'hn, zz, xm; he nan, zheng zhou, xin mi; 河南，郑州，新密',
    weaid: 1888
  },
  {
    display_text: '河南，郑州，新郑',
    search_text: 'hn, zz, xz; he nan, zheng zhou, xin zheng; 河南，郑州，新郑',
    weaid: 1945
  },
  {
    display_text: '河南，郑州，中牟',
    search_text: 'hn, zz, zm; he nan, zheng zhou, zhong mu; 河南，郑州，中牟',
    weaid: 2134
  },
  {
    display_text: '河南，郑州，上街',
    search_text: 'hn, zz, sj; he nan, zheng zhou, shang jie; 河南，郑州，上街',
    weaid: 2457
  },
  {
    display_text: '河南，安阳，城区',
    search_text: 'hn, ay, cq; he nan, an yang, cheng qu; 河南，安阳，城区',
    weaid: 76
  },
  {
    display_text: '河南，安阳，汤阴',
    search_text: 'hn, ay, ty; he nan, an yang, tang yin; 河南，安阳，汤阴',
    weaid: 1736
  },
  {
    display_text: '河南，安阳，滑县',
    search_text: 'hn, ay, hx; he nan, an yang, hua xian; 河南，安阳，滑县',
    weaid: 942
  },
  {
    display_text: '河南，安阳，内黄',
    search_text: 'hn, ay, nh; he nan, an yang, nei huang; 河南，安阳，内黄',
    weaid: 1366
  },
  {
    display_text: '河南，安阳，林州',
    search_text: 'hn, ay, lz; he nan, an yang, lin zhou; 河南，安阳，林州',
    weaid: 2458
  },
  {
    display_text: '河南，新乡，城区',
    search_text: 'hn, xx, cq; he nan, xin xiang, cheng qu; 河南，新乡，城区',
    weaid: 60
  },
  {
    display_text: '河南，新乡，获嘉',
    search_text: 'hn, xx, hj; he nan, xin xiang, huo jia; 河南，新乡，获嘉',
    weaid: 878
  },
  {
    display_text: '河南，新乡，原阳',
    search_text: 'hn, xx, yy; he nan, xin xiang, yuan yang; 河南，新乡，原阳',
    weaid: 2082
  },
  {
    display_text: '河南，新乡，辉县',
    search_text: 'hn, xx, hx; he nan, xin xiang, hui xian; 河南，新乡，辉县',
    weaid: 943
  },
  {
    display_text: '河南，新乡，卫辉',
    search_text: 'hn, xx, wh; he nan, xin xiang, wei hui; 河南，新乡，卫辉',
    weaid: 1769
  },
  {
    display_text: '河南，新乡，延津',
    search_text: 'hn, xx, yj; he nan, xin xiang, yan jin; 河南，新乡，延津',
    weaid: 1993
  },
  {
    display_text: '河南，新乡，封丘',
    search_text: 'hn, xx, fq; he nan, xin xiang, feng qiu; 河南，新乡，封丘',
    weaid: 734
  },
  {
    display_text: '河南，新乡，长垣',
    search_text: 'hn, xx, zy; he nan, xin xiang, zhang yuan; 河南，新乡，长垣',
    weaid: 593
  },
  {
    display_text: '河南，许昌，城区',
    search_text: 'hn, xc, cq; he nan, xu chang, cheng qu; 河南，许昌，城区',
    weaid: 61
  },
  {
    display_text: '河南，许昌，鄢陵',
    search_text: 'hn, xc, yl; he nan, xu chang, yan ling; 河南，许昌，鄢陵',
    weaid: 2007
  },
  {
    display_text: '河南，许昌，襄城',
    search_text: 'hn, xc, xc; he nan, xu chang, xiang cheng; 河南，许昌，襄城',
    weaid: 1837
  },
  {
    display_text: '河南，许昌，长葛',
    search_text: 'hn, xc, zg; he nan, xu chang, zhang ge; 河南，许昌，长葛',
    weaid: 537
  },
  {
    display_text: '河南，许昌，禹州',
    search_text: 'hn, xc, yz; he nan, xu chang, yu zhou; 河南，许昌，禹州',
    weaid: 2091
  },
  {
    display_text: '河南，平顶山，城区',
    search_text: 'hn, pds, cq; he nan, ping ding shan, cheng qu; 河南，平顶山，城区',
    weaid: 62
  },
  {
    display_text: '河南，平顶山，郏县',
    search_text: 'hn, pds, jx; he nan, ping ding shan, jia xian; 河南，平顶山，郏县',
    weaid: 1051
  },
  {
    display_text: '河南，平顶山，宝丰',
    search_text: 'hn, pds, bf; he nan, ping ding shan, bao feng; 河南，平顶山，宝丰',
    weaid: 488
  },
  {
    display_text: '河南，平顶山，汝州',
    search_text: 'hn, pds, rz; he nan, ping ding shan, ru zhou; 河南，平顶山，汝州',
    weaid: 1550
  },
  {
    display_text: '河南，平顶山，叶县',
    search_text: 'hn, pds, yx; he nan, ping ding shan, ye xian; 河南，平顶山，叶县',
    weaid: 2070
  },
  {
    display_text: '河南，平顶山，舞钢',
    search_text: 'hn, pds, wg; he nan, ping ding shan, wu gang; 河南，平顶山，舞钢',
    weaid: 1765
  },
  {
    display_text: '河南，平顶山，鲁山',
    search_text: 'hn, pds, ls; he nan, ping ding shan, lu shan; 河南，平顶山，鲁山',
    weaid: 1208
  },
  {
    display_text: '河南，平顶山，石龙',
    search_text: 'hn, pds, sl; he nan, ping ding shan, shi long; 河南，平顶山，石龙',
    weaid: 2459
  },
  {
    display_text: '河南，信阳，城区',
    search_text: 'hn, xy, cq; he nan, xin yang, cheng qu; 河南，信阳，城区',
    weaid: 63
  },
  {
    display_text: '河南，信阳，息县',
    search_text: 'hn, xy, xx; he nan, xin yang, xi xian; 河南，信阳，息县',
    weaid: 1925
  },
  {
    display_text: '河南，信阳，罗山',
    search_text: 'hn, xy, ls; he nan, xin yang, luo shan; 河南，信阳，罗山',
    weaid: 1209
  },
  {
    display_text: '河南，信阳，光山',
    search_text: 'hn, xy, gs; he nan, xin yang, guang shan; 河南，信阳，光山',
    weaid: 816
  },
  {
    display_text: '河南，信阳，新县',
    search_text: 'hn, xy, xx; he nan, xin yang, xin xian; 河南，信阳，新县',
    weaid: 1926
  },
  {
    display_text: '河南，信阳，淮滨',
    search_text: 'hn, xy, hb; he nan, xin yang, huai bin; 河南，信阳，淮滨',
    weaid: 853
  },
  {
    display_text: '河南，信阳，潢川',
    search_text: 'hn, xy, hc; he nan, xin yang, huang chuan; 河南，信阳，潢川',
    weaid: 862
  },
  {
    display_text: '河南，信阳，固始',
    search_text: 'hn, xy, gs; he nan, xin yang, gu shi; 河南，信阳，固始',
    weaid: 815
  },
  {
    display_text: '河南，信阳，商城',
    search_text: 'hn, xy, sc; he nan, xin yang, shang cheng; 河南，信阳，商城',
    weaid: 1566
  },
  {
    display_text: '河南，南阳，城区',
    search_text: 'hn, ny, cq; he nan, nan yang, cheng qu; 河南，南阳，城区',
    weaid: 64
  },
  {
    display_text: '河南，南阳，南召',
    search_text: 'hn, ny, nz; he nan, nan yang, nan zhao; 河南，南阳，南召',
    weaid: 1399
  },
  {
    display_text: '河南，南阳，方城',
    search_text: 'hn, ny, fc; he nan, nan yang, fang cheng; 河南，南阳，方城',
    weaid: 707
  },
  {
    display_text: '河南，南阳，社旗',
    search_text: 'hn, ny, sq; he nan, nan yang, she qi; 河南，南阳，社旗',
    weaid: 1615
  },
  {
    display_text: '河南，南阳，西峡',
    search_text: 'hn, ny, xx; he nan, nan yang, xi xia; 河南，南阳，西峡',
    weaid: 1921
  },
  {
    display_text: '河南，南阳，内乡',
    search_text: 'hn, ny, nx; he nan, nan yang, nei xiang; 河南，南阳，内乡',
    weaid: 1389
  },
  {
    display_text: '河南，南阳，镇平',
    search_text: 'hn, ny, zp; he nan, nan yang, zhen ping; 河南，南阳，镇平',
    weaid: 2142
  },
  {
    display_text: '河南，南阳，淅川',
    search_text: 'hn, ny, xc; he nan, nan yang, xi chuan; 河南，南阳，淅川',
    weaid: 1838
  },
  {
    display_text: '河南，南阳，新野',
    search_text: 'hn, ny, xy; he nan, nan yang, xin ye; 河南，南阳，新野',
    weaid: 1931
  },
  {
    display_text: '河南，南阳，唐河',
    search_text: 'hn, ny, th; he nan, nan yang, tang he; 河南，南阳，唐河',
    weaid: 1692
  },
  {
    display_text: '河南，南阳，邓州',
    search_text: 'hn, ny, dz; he nan, nan yang, deng zhou; 河南，南阳，邓州',
    weaid: 688
  },
  {
    display_text: '河南，南阳，桐柏',
    search_text: 'hn, ny, tb; he nan, nan yang, tong bai; 河南，南阳，桐柏',
    weaid: 1669
  },
  {
    display_text: '河南，开封，城区',
    search_text: 'hn, kf, cq; he nan, kai feng, cheng qu; 河南，开封，城区',
    weaid: 65
  },
  {
    display_text: '河南，开封，杞县',
    search_text: 'hn, kf, qx; he nan, kai feng, qi xian; 河南，开封，杞县',
    weaid: 1506
  },
  {
    display_text: '河南，开封，尉氏',
    search_text: 'hn, kf, ws; he nan, kai feng, wei shi; 河南，开封，尉氏',
    weaid: 1800
  },
  {
    display_text: '河南，开封，通许',
    search_text: 'hn, kf, tx; he nan, kai feng, tong xu; 河南，开封，通许',
    weaid: 1734
  },
  {
    display_text: '河南，开封，兰考',
    search_text: 'hn, kf, lk; he nan, kai feng, lan kao; 河南，开封，兰考',
    weaid: 1166
  },
  {
    display_text: '河南，洛阳，城区',
    search_text: 'hn, ly, cq; he nan, luo yang, cheng qu; 河南，洛阳，城区',
    weaid: 66
  },
  {
    display_text: '河南，洛阳，新安',
    search_text: 'hn, ly, xa; he nan, luo yang, xin an; 河南，洛阳，新安',
    weaid: 1831
  },
  {
    display_text: '河南，洛阳，孟津',
    search_text: 'hn, ly, mj; he nan, luo yang, meng jin; 河南，洛阳，孟津',
    weaid: 1774
  },
  {
    display_text: '河南，洛阳，宜阳',
    search_text: 'hn, ly, yy; he nan, luo yang, yi yang; 河南，洛阳，宜阳',
    weaid: 2083
  },
  {
    display_text: '河南，洛阳，洛宁',
    search_text: 'hn, ly, ln; he nan, luo yang, luo ning; 河南，洛阳，洛宁',
    weaid: 1185
  },
  {
    display_text: '河南，洛阳，伊川',
    search_text: 'hn, ly, yc; he nan, luo yang, yi chuan; 河南，洛阳，伊川',
    weaid: 1962
  },
  {
    display_text: '河南，洛阳，嵩县',
    search_text: 'hn, ly, sx; he nan, luo yang, song xian; 河南，洛阳，嵩县',
    weaid: 1642
  },
  {
    display_text: '河南，洛阳，偃师',
    search_text: 'hn, ly, ys; he nan, luo yang, yan shi; 河南，洛阳，偃师',
    weaid: 2041
  },
  {
    display_text: '河南，洛阳，栾川',
    search_text: 'hn, ly, lc; he nan, luo yang, luan chuan; 河南，洛阳，栾川',
    weaid: 1121
  },
  {
    display_text: '河南，洛阳，汝阳',
    search_text: 'hn, ly, ry; he nan, luo yang, ru yang; 河南，洛阳，汝阳',
    weaid: 1548
  },
  {
    display_text: '河南，洛阳，吉利',
    search_text: 'hn, ly, jl; he nan, luo yang, ji li; 河南，洛阳，吉利',
    weaid: 2460
  },
  {
    display_text: '河南，商丘，城区',
    search_text: 'hn, sq, cq; he nan, shang qiu, cheng qu; 河南，商丘，城区',
    weaid: 67
  },
  {
    display_text: '河南，商丘，睢县',
    search_text: 'hn, sq, sx; he nan, shang qiu, sui xian; 河南，商丘，睢县',
    weaid: 1641
  },
  {
    display_text: '河南，商丘，民权',
    search_text: 'hn, sq, mq; he nan, shang qiu, min quan; 河南，商丘，民权',
    weaid: 1324
  },
  {
    display_text: '河南，商丘，虞城',
    search_text: 'hn, sq, yc; he nan, shang qiu, yu cheng; 河南，商丘，虞城',
    weaid: 1961
  },
  {
    display_text: '河南，商丘，柘城',
    search_text: 'hn, sq, zc; he nan, shang qiu, zhe cheng; 河南，商丘，柘城',
    weaid: 1675
  },
  {
    display_text: '河南，商丘，宁陵',
    search_text: 'hn, sq, nl; he nan, shang qiu, ning ling; 河南，商丘，宁陵',
    weaid: 1377
  },
  {
    display_text: '河南，商丘，夏邑',
    search_text: 'hn, sq, xy; he nan, shang qiu, xia yi; 河南，商丘，夏邑',
    weaid: 1934
  },
  {
    display_text: '河南，商丘，永城',
    search_text: 'hn, sq, yc; he nan, shang qiu, yong cheng; 河南，商丘，永城',
    weaid: 1960
  },
  {
    display_text: '河南，焦作，城区',
    search_text: 'hn, jz, cq; he nan, jiao zuo, cheng qu; 河南，焦作，城区',
    weaid: 68
  },
  {
    display_text: '河南，焦作，修武',
    search_text: 'hn, jz, xw; he nan, jiao zuo, xiu wu; 河南，焦作，修武',
    weaid: 1916
  },
  {
    display_text: '河南，焦作，武陟',
    search_text: 'hn, jz, wz; he nan, jiao zuo, wu zhi; 河南，焦作，武陟',
    weaid: 1829
  },
  {
    display_text: '河南，焦作，沁阳',
    search_text: 'hn, jz, qy; he nan, jiao zuo, qin yang; 河南，焦作，沁阳',
    weaid: 1512
  },
  {
    display_text: '河南，焦作，博爱',
    search_text: 'hn, jz, ba; he nan, jiao zuo, bo ai; 河南，焦作，博爱',
    weaid: 479
  },
  {
    display_text: '河南，焦作，温县',
    search_text: 'hn, jz, wx; he nan, jiao zuo, wen xian; 河南，焦作，温县',
    weaid: 1811
  },
  {
    display_text: '河南，焦作，孟州',
    search_text: 'hn, jz, mz; he nan, jiao zuo, meng zhou; 河南，焦作，孟州',
    weaid: 2461
  },
  {
    display_text: '河南，鹤壁，城区',
    search_text: 'hn, hb, cq; he nan, he bi, cheng qu; 河南，鹤壁，城区',
    weaid: 69
  },
  {
    display_text: '河南，鹤壁，浚县',
    search_text: 'hn, hb, jx; he nan, he bi, jun xian; 河南，鹤壁，浚县',
    weaid: 1052
  },
  {
    display_text: '河南，鹤壁，淇县',
    search_text: 'hn, hb, qx; he nan, he bi, qi xian; 河南，鹤壁，淇县',
    weaid: 1507
  },
  {
    display_text: '河南，濮阳，城区',
    search_text: 'hn, py, cq; he nan, pu yang, cheng qu; 河南，濮阳，城区',
    weaid: 70
  },
  {
    display_text: '河南，濮阳，台前',
    search_text: 'hn, py, tq; he nan, pu yang, tai qian; 河南，濮阳，台前',
    weaid: 1718
  },
  {
    display_text: '河南，濮阳，南乐',
    search_text: 'hn, py, nl; he nan, pu yang, nan le; 河南，濮阳，南乐',
    weaid: 1375
  },
  {
    display_text: '河南，濮阳，清丰',
    search_text: 'hn, py, qf; he nan, pu yang, qing feng; 河南，濮阳，清丰',
    weaid: 1472
  },
  {
    display_text: '河南，濮阳，范县',
    search_text: 'hn, py, fx; he nan, pu yang, fan xian; 河南，濮阳，范县',
    weaid: 752
  },
  {
    display_text: '河南，周口，城区',
    search_text: 'hn, zk, cq; he nan, zhou kou, cheng qu; 河南，周口，城区',
    weaid: 71
  },
  {
    display_text: '河南，周口，扶沟',
    search_text: 'hn, zk, fg; he nan, zhou kou, fu gou; 河南，周口，扶沟',
    weaid: 714
  },
  {
    display_text: '河南，周口，太康',
    search_text: 'hn, zk, tk; he nan, zhou kou, tai kang; 河南，周口，太康',
    weaid: 1700
  },
  {
    display_text: '河南，周口，淮阳',
    search_text: 'hn, zk, hy; he nan, zhou kou, huai yang; 河南，周口，淮阳',
    weaid: 952
  },
  {
    display_text: '河南，周口，西华',
    search_text: 'hn, zk, xh; he nan, zhou kou, xi hua; 河南，周口，西华',
    weaid: 1871
  },
  {
    display_text: '河南，周口，商水',
    search_text: 'hn, zk, ss; he nan, zhou kou, shang shui; 河南，周口，商水',
    weaid: 1620
  },
  {
    display_text: '河南，周口，项城',
    search_text: 'hn, zk, xc; he nan, zhou kou, xiang cheng; 河南，周口，项城',
    weaid: 1843
  },
  {
    display_text: '河南，周口，郸城',
    search_text: 'hn, zk, dc; he nan, zhou kou, dan cheng; 河南，周口，郸城',
    weaid: 607
  },
  {
    display_text: '河南，周口，鹿邑',
    search_text: 'hn, zk, ly; he nan, zhou kou, lu yi; 河南，周口，鹿邑',
    weaid: 1260
  },
  {
    display_text: '河南，周口，沈丘',
    search_text: 'hn, zk, sq; he nan, zhou kou, shen qiu; 河南，周口，沈丘',
    weaid: 1617
  },
  {
    display_text: '河南，漯河，城区',
    search_text: 'hn, th, cq; he nan, ta he, cheng qu; 河南，漯河，城区',
    weaid: 72
  },
  {
    display_text: '河南，漯河，临颍',
    search_text: 'hn, th, ly; he nan, ta he, lin ying; 河南，漯河，临颍',
    weaid: 1261
  },
  {
    display_text: '河南，漯河，舞阳',
    search_text: 'hn, th, wy; he nan, ta he, wu yang; 河南，漯河，舞阳',
    weaid: 1748
  },
  {
    display_text: '河南，驻马店，城区',
    search_text: 'hn, zmd, cq; he nan, zhu ma dian, cheng qu; 河南，驻马店，城区',
    weaid: 73
  },
  {
    display_text: '河南，驻马店，西平',
    search_text: 'hn, zmd, xp; he nan, zhu ma dian, xi ping; 河南，驻马店，西平',
    weaid: 1895
  },
  {
    display_text: '河南，驻马店，遂平',
    search_text: 'hn, zmd, sp; he nan, zhu ma dian, sui ping; 河南，驻马店，遂平',
    weaid: 564
  },
  {
    display_text: '河南，驻马店，上蔡',
    search_text: 'hn, zmd, sc; he nan, zhu ma dian, shang cai; 河南，驻马店，上蔡',
    weaid: 1555
  },
  {
    display_text: '河南，驻马店，汝南',
    search_text: 'hn, zmd, rn; he nan, zhu ma dian, ru nan; 河南，驻马店，汝南',
    weaid: 1537
  },
  {
    display_text: '河南，驻马店，泌阳',
    search_text: 'hn, zmd, by; he nan, zhu ma dian, bi yang; 河南，驻马店，泌阳',
    weaid: 520
  },
  {
    display_text: '河南，驻马店，平舆',
    search_text: 'hn, zmd, py; he nan, zhu ma dian, ping yu; 河南，驻马店，平舆',
    weaid: 1459
  },
  {
    display_text: '河南，驻马店，新蔡',
    search_text: 'hn, zmd, xc; he nan, zhu ma dian, xin cai; 河南，驻马店，新蔡',
    weaid: 1834
  },
  {
    display_text: '河南，驻马店，确山',
    search_text: 'hn, zmd, qs; he nan, zhu ma dian, que shan; 河南，驻马店，确山',
    weaid: 1494
  },
  {
    display_text: '河南，驻马店，正阳',
    search_text: 'hn, zmd, zy; he nan, zhu ma dian, zheng yang; 河南，驻马店，正阳',
    weaid: 2169
  },
  {
    display_text: '河南，三门峡，城区',
    search_text: 'hn, smx, cq; he nan, san men xia, cheng qu; 河南，三门峡，城区',
    weaid: 74
  },
  {
    display_text: '河南，三门峡，灵宝',
    search_text: 'hn, smx, lb; he nan, san men xia, ling bao; 河南，三门峡，灵宝',
    weaid: 1109
  },
  {
    display_text: '河南，三门峡，渑池',
    search_text: 'hn, smx, mc; he nan, san men xia, mian chi; 河南，三门峡，渑池',
    weaid: 1286
  },
  {
    display_text: '河南，三门峡，卢氏',
    search_text: 'hn, smx, ls; he nan, san men xia, lu shi; 河南，三门峡，卢氏',
    weaid: 1217
  },
  {
    display_text: '河南，三门峡，义马',
    search_text: 'hn, smx, ym; he nan, san men xia, yi ma; 河南，三门峡，义马',
    weaid: 2462
  },
  {
    display_text: '河南，三门峡，陕州',
    search_text: 'hn, smx, sz; he nan, san men xia, shan zhou; 河南，三门峡，陕州',
    weaid: 2726
  },
  {
    display_text: '河南，济源，城区',
    search_text: 'hn, jy, cq; he nan, ji yuan, cheng qu; 河南，济源，城区',
    weaid: 75
  },
  {
    display_text: '黑龙江，哈尔滨，城区',
    search_text: 'hlj, heb, cq; hei long jiang, ha er bin, cheng qu; 黑龙江，哈尔滨，城区',
    weaid: 412
  },
  {
    display_text: '黑龙江，哈尔滨，双城',
    search_text: 'hlj, heb, sc; hei long jiang, ha er bin, shuang cheng; 黑龙江，哈尔滨，双城',
    weaid: 1556
  },
  {
    display_text: '黑龙江，哈尔滨，呼兰',
    search_text: 'hlj, heb, hl; hei long jiang, ha er bin, hu lan; 黑龙江，哈尔滨，呼兰',
    weaid: 887
  },
  {
    display_text: '黑龙江，哈尔滨，阿城',
    search_text: 'hlj, heb, ac; hei long jiang, ha er bin, a cheng; 黑龙江，哈尔滨，阿城',
    weaid: 448
  },
  {
    display_text: '黑龙江，哈尔滨，宾县',
    search_text: 'hlj, heb, bx; hei long jiang, ha er bin, bin xian; 黑龙江，哈尔滨，宾县',
    weaid: 514
  },
  {
    display_text: '黑龙江，哈尔滨，依兰',
    search_text: 'hlj, heb, yl; hei long jiang, ha er bin, yi lan; 黑龙江，哈尔滨，依兰',
    weaid: 2006
  },
  {
    display_text: '黑龙江，哈尔滨，巴彦',
    search_text: 'hlj, heb, by; hei long jiang, ha er bin, ba yan; 黑龙江，哈尔滨，巴彦',
    weaid: 519
  },
  {
    display_text: '黑龙江，哈尔滨，通河',
    search_text: 'hlj, heb, th; hei long jiang, ha er bin, tong he; 黑龙江，哈尔滨，通河',
    weaid: 1689
  },
  {
    display_text: '黑龙江，哈尔滨，方正',
    search_text: 'hlj, heb, fz; hei long jiang, ha er bin, fang zheng; 黑龙江，哈尔滨，方正',
    weaid: 766
  },
  {
    display_text: '黑龙江，哈尔滨，延寿',
    search_text: 'hlj, heb, ys; hei long jiang, ha er bin, yan shou; 黑龙江，哈尔滨，延寿',
    weaid: 2034
  },
  {
    display_text: '黑龙江，哈尔滨，尚志',
    search_text: 'hlj, heb, sz; hei long jiang, ha er bin, shang zhi; 黑龙江，哈尔滨，尚志',
    weaid: 1661
  },
  {
    display_text: '黑龙江，哈尔滨，五常',
    search_text: 'hlj, heb, wc; hei long jiang, ha er bin, wu chang; 黑龙江，哈尔滨，五常',
    weaid: 1751
  },
  {
    display_text: '黑龙江，哈尔滨，木兰',
    search_text: 'hlj, heb, ml; hei long jiang, ha er bin, mu lan; 黑龙江，哈尔滨，木兰',
    weaid: 1304
  },
  {
    display_text: '黑龙江，齐齐哈尔，城区',
    search_text: 'hlj, qqhe, cq; hei long jiang, qi qi ha er, cheng qu; 黑龙江，齐齐哈尔，城区',
    weaid: 423
  },
  {
    display_text: '黑龙江，齐齐哈尔，讷河',
    search_text: 'hlj, qqhe, nh; hei long jiang, qi qi ha er, ne he; 黑龙江，齐齐哈尔，讷河',
    weaid: 1364
  },
  {
    display_text: '黑龙江，齐齐哈尔，龙江',
    search_text: 'hlj, qqhe, lj; hei long jiang, qi qi ha er, long jiang; 黑龙江，齐齐哈尔，龙江',
    weaid: 1158
  },
  {
    display_text: '黑龙江，齐齐哈尔，甘南',
    search_text: 'hlj, qqhe, gn; hei long jiang, qi qi ha er, gan nan; 黑龙江，齐齐哈尔，甘南',
    weaid: 2214
  },
  {
    display_text: '黑龙江，齐齐哈尔，富裕',
    search_text: 'hlj, qqhe, fy; hei long jiang, qi qi ha er, fu yu; 黑龙江，齐齐哈尔，富裕',
    weaid: 761
  },
  {
    display_text: '黑龙江，齐齐哈尔，依安',
    search_text: 'hlj, qqhe, ya; hei long jiang, qi qi ha er, yi an; 黑龙江，齐齐哈尔，依安',
    weaid: 1949
  },
  {
    display_text: '黑龙江，齐齐哈尔，拜泉',
    search_text: 'hlj, qqhe, bq; hei long jiang, qi qi ha er, bai quan; 黑龙江，齐齐哈尔，拜泉',
    weaid: 510
  },
  {
    display_text: '黑龙江，齐齐哈尔，克山',
    search_text: 'hlj, qqhe, ks; hei long jiang, qi qi ha er, ke shan; 黑龙江，齐齐哈尔，克山',
    weaid: 1099
  },
  {
    display_text: '黑龙江，齐齐哈尔，克东',
    search_text: 'hlj, qqhe, kd; hei long jiang, qi qi ha er, ke dong; 黑龙江，齐齐哈尔，克东',
    weaid: 1086
  },
  {
    display_text: '黑龙江，齐齐哈尔，泰来',
    search_text: 'hlj, qqhe, tl; hei long jiang, qi qi ha er, tai lai; 黑龙江，齐齐哈尔，泰来',
    weaid: 1704
  },
  {
    display_text: '黑龙江，牡丹江，城区',
    search_text: 'hlj, mdj, cq; hei long jiang, mu dan jiang, cheng qu; 黑龙江，牡丹江，城区',
    weaid: 413
  },
  {
    display_text: '黑龙江，牡丹江，海林',
    search_text: 'hlj, mdj, hl; hei long jiang, mu dan jiang, hai lin; 黑龙江，牡丹江，海林',
    weaid: 894
  },
  {
    display_text: '黑龙江，牡丹江，穆棱',
    search_text: 'hlj, mdj, ml; hei long jiang, mu dan jiang, mu leng; 黑龙江，牡丹江，穆棱',
    weaid: 1309
  },
  {
    display_text: '黑龙江，牡丹江，林口',
    search_text: 'hlj, mdj, lk; hei long jiang, mu dan jiang, lin kou; 黑龙江，牡丹江，林口',
    weaid: 1167
  },
  {
    display_text: '黑龙江，牡丹江，绥芬河',
    search_text: 'hlj, mdj, sfh; hei long jiang, mu dan jiang, sui fen he; 黑龙江，牡丹江，绥芬河',
    weaid: 1576
  },
  {
    display_text: '黑龙江，牡丹江，宁安',
    search_text: 'hlj, mdj, na; hei long jiang, mu dan jiang, ning an; 黑龙江，牡丹江，宁安',
    weaid: 1348
  },
  {
    display_text: '黑龙江，牡丹江，东宁',
    search_text: 'hlj, mdj, dn; hei long jiang, mu dan jiang, dong ning; 黑龙江，牡丹江，东宁',
    weaid: 642
  },
  {
    display_text: '黑龙江，佳木斯，城区',
    search_text: 'hlj, jms, cq; hei long jiang, jia mu si, cheng qu; 黑龙江，佳木斯，城区',
    weaid: 414
  },
  {
    display_text: '黑龙江，佳木斯，汤原',
    search_text: 'hlj, jms, ty; hei long jiang, jia mu si, tang yuan; 黑龙江，佳木斯，汤原',
    weaid: 1737
  },
  {
    display_text: '黑龙江，佳木斯，抚远',
    search_text: 'hlj, jms, fy; hei long jiang, jia mu si, fu yuan; 黑龙江，佳木斯，抚远',
    weaid: 738
  },
  {
    display_text: '黑龙江，佳木斯，桦川',
    search_text: 'hlj, jms, hc; hei long jiang, jia mu si, hua chuan; 黑龙江，佳木斯，桦川',
    weaid: 854
  },
  {
    display_text: '黑龙江，佳木斯，桦南',
    search_text: 'hlj, jms, hn; hei long jiang, jia mu si, hua nan; 黑龙江，佳木斯，桦南',
    weaid: 905
  },
  {
    display_text: '黑龙江，佳木斯，同江',
    search_text: 'hlj, jms, tj; hei long jiang, jia mu si, tong jiang; 黑龙江，佳木斯，同江',
    weaid: 1695
  },
  {
    display_text: '黑龙江，佳木斯，富锦',
    search_text: 'hlj, jms, fj; hei long jiang, jia mu si, fu jin; 黑龙江，佳木斯，富锦',
    weaid: 720
  },
  {
    display_text: '黑龙江，绥化，城区',
    search_text: 'hlj, sh, cq; hei long jiang, sui hua, cheng qu; 黑龙江，绥化，城区',
    weaid: 415
  },
  {
    display_text: '黑龙江，绥化，肇东',
    search_text: 'hlj, sh, zd; hei long jiang, sui hua, zhao dong; 黑龙江，绥化，肇东',
    weaid: 2106
  },
  {
    display_text: '黑龙江，绥化，安达',
    search_text: 'hlj, sh, ad; hei long jiang, sui hua, an da; 黑龙江，绥化，安达',
    weaid: 449
  },
  {
    display_text: '黑龙江，绥化，海伦',
    search_text: 'hlj, sh, hl; hei long jiang, sui hua, hai lun; 黑龙江，绥化，海伦',
    weaid: 901
  },
  {
    display_text: '黑龙江，绥化，明水',
    search_text: 'hlj, sh, ms; hei long jiang, sui hua, ming shui; 黑龙江，绥化，明水',
    weaid: 1328
  },
  {
    display_text: '黑龙江，绥化，望奎',
    search_text: 'hlj, sh, wk; hei long jiang, sui hua, wang kui; 黑龙江，绥化，望奎',
    weaid: 1776
  },
  {
    display_text: '黑龙江，绥化，兰西',
    search_text: 'hlj, sh, lx; hei long jiang, sui hua, lan xi; 黑龙江，绥化，兰西',
    weaid: 1231
  },
  {
    display_text: '黑龙江，绥化，青冈',
    search_text: 'hlj, sh, qg; hei long jiang, sui hua, qing gang; 黑龙江，绥化，青冈',
    weaid: 1474
  },
  {
    display_text: '黑龙江，绥化，庆安',
    search_text: 'hlj, sh, qa; hei long jiang, sui hua, qing an; 黑龙江，绥化，庆安',
    weaid: 1463
  },
  {
    display_text: '黑龙江，绥化，绥棱',
    search_text: 'hlj, sh, sl; hei long jiang, sui hua, sui leng; 黑龙江，绥化，绥棱',
    weaid: 1591
  },
  {
    display_text: '黑龙江，黑河，城区',
    search_text: 'hlj, hh, cq; hei long jiang, hei he, cheng qu; 黑龙江，黑河，城区',
    weaid: 416
  },
  {
    display_text: '黑龙江，黑河，嫩江',
    search_text: 'hlj, hh, nj; hei long jiang, hei he, nen jiang; 黑龙江，黑河，嫩江',
    weaid: 1368
  },
  {
    display_text: '黑龙江，黑河，孙吴',
    search_text: 'hlj, hh, sw; hei long jiang, hei he, sun wu; 黑龙江，黑河，孙吴',
    weaid: 1632
  },
  {
    display_text: '黑龙江，黑河，逊克',
    search_text: 'hlj, hh, xk; hei long jiang, hei he, xun ke; 黑龙江，黑河，逊克',
    weaid: 1881
  },
  {
    display_text: '黑龙江，黑河，五大连池',
    search_text: 'hlj, hh, wdlc; hei long jiang, hei he, wu da lian chi; 黑龙江，黑河，五大连池',
    weaid: 1759
  },
  {
    display_text: '黑龙江，黑河，北安',
    search_text: 'hlj, hh, ba; hei long jiang, hei he, bei an; 黑龙江，黑河，北安',
    weaid: 480
  },
  {
    display_text: '黑龙江，大兴安岭，城区',
    search_text: 'hlj, dxal, cq; hei long jiang, da xing an ling, cheng qu; 黑龙江，大兴安岭，城区',
    weaid: 424
  },
  {
    display_text: '黑龙江，大兴安岭，塔河',
    search_text: 'hlj, dxal, th; hei long jiang, da xing an ling, ta he; 黑龙江，大兴安岭，塔河',
    weaid: 1688
  },
  {
    display_text: '黑龙江，大兴安岭，漠河',
    search_text: 'hlj, dxal, mh; hei long jiang, da xing an ling, mo he; 黑龙江，大兴安岭，漠河',
    weaid: 1299
  },
  {
    display_text: '黑龙江，大兴安岭，呼玛',
    search_text: 'hlj, dxal, hm; hei long jiang, da xing an ling, hu ma; 黑龙江，大兴安岭，呼玛',
    weaid: 902
  },
  {
    display_text: '黑龙江，伊春，城区',
    search_text: 'hlj, yc, cq; hei long jiang, yi chun, cheng qu; 黑龙江，伊春，城区',
    weaid: 418
  },
  {
    display_text: '黑龙江，伊春，乌伊岭',
    search_text: 'hlj, yc, wyl; hei long jiang, yi chun, wu yi ling; 黑龙江，伊春，乌伊岭',
    weaid: 1819
  },
  {
    display_text: '黑龙江，伊春，五营',
    search_text: 'hlj, yc, wy; hei long jiang, yi chun, wu ying; 黑龙江，伊春，五营',
    weaid: 1818
  },
  {
    display_text: '黑龙江，伊春，铁力',
    search_text: 'hlj, yc, tl; hei long jiang, yi chun, tie li; 黑龙江，伊春，铁力',
    weaid: 1707
  },
  {
    display_text: '黑龙江，伊春，嘉荫',
    search_text: 'hlj, yc, jy; hei long jiang, yi chun, jia yin; 黑龙江，伊春，嘉荫',
    weaid: 1066
  },
  {
    display_text: '黑龙江，大庆，城区',
    search_text: 'hlj, dq, cq; hei long jiang, da qing, cheng qu; 黑龙江，大庆，城区',
    weaid: 419
  },
  {
    display_text: '黑龙江，大庆，林甸',
    search_text: 'hlj, dq, ld; hei long jiang, da qing, lin dian; 黑龙江，大庆，林甸',
    weaid: 1135
  },
  {
    display_text: '黑龙江，大庆，肇州',
    search_text: 'hlj, dq, zz; hei long jiang, da qing, zhao zhou; 黑龙江，大庆，肇州',
    weaid: 2179
  },
  {
    display_text: '黑龙江，大庆，肇源',
    search_text: 'hlj, dq, zy; hei long jiang, da qing, zhao yuan; 黑龙江，大庆，肇源',
    weaid: 2171
  },
  {
    display_text: '黑龙江，大庆，杜尔伯特',
    search_text: 'hlj, dq, debt; hei long jiang, da qing, du er bo te; 黑龙江，大庆，杜尔伯特',
    weaid: 612
  },
  {
    display_text: '黑龙江，七台河，城区',
    search_text: 'hlj, qth, cq; hei long jiang, qi tai he, cheng qu; 黑龙江，七台河，城区',
    weaid: 420
  },
  {
    display_text: '黑龙江，七台河，勃利',
    search_text: 'hlj, qth, bl; hei long jiang, qi tai he, bo li; 黑龙江，七台河，勃利',
    weaid: 498
  },
  {
    display_text: '黑龙江，鸡西，城区',
    search_text: 'hlj, jx, cq; hei long jiang, ji xi, cheng qu; 黑龙江，鸡西，城区',
    weaid: 421
  },
  {
    display_text: '黑龙江，鸡西，虎林',
    search_text: 'hlj, jx, hl; hei long jiang, ji xi, hu lin; 黑龙江，鸡西，虎林',
    weaid: 893
  },
  {
    display_text: '黑龙江，鸡西，密山',
    search_text: 'hlj, jx, ms; hei long jiang, ji xi, mi shan; 黑龙江，鸡西，密山',
    weaid: 1327
  },
  {
    display_text: '黑龙江，鸡西，鸡东',
    search_text: 'hlj, jx, jd; hei long jiang, ji xi, ji dong; 黑龙江，鸡西，鸡东',
    weaid: 985
  },
  {
    display_text: '黑龙江，鹤岗，城区',
    search_text: 'hlj, hg, cq; hei long jiang, he gang, cheng qu; 黑龙江，鹤岗，城区',
    weaid: 422
  },
  {
    display_text: '黑龙江，鹤岗，绥滨',
    search_text: 'hlj, hg, sb; hei long jiang, he gang, sui bin; 黑龙江，鹤岗，绥滨',
    weaid: 1553
  },
  {
    display_text: '黑龙江，鹤岗，萝北',
    search_text: 'hlj, hg, lb; hei long jiang, he gang, luo bei; 黑龙江，鹤岗，萝北',
    weaid: 1110
  },
  {
    display_text: '黑龙江，双鸭山，城区',
    search_text: 'hlj, sys, cq; hei long jiang, shuang ya shan, cheng qu; 黑龙江，双鸭山，城区',
    weaid: 417
  },
  {
    display_text: '黑龙江，双鸭山，集贤',
    search_text: 'hlj, sys, jx; hei long jiang, shuang ya shan, ji xian; 黑龙江，双鸭山，集贤',
    weaid: 1041
  },
  {
    display_text: '黑龙江，双鸭山，宝清',
    search_text: 'hlj, sys, bq; hei long jiang, shuang ya shan, bao qing; 黑龙江，双鸭山，宝清',
    weaid: 509
  },
  {
    display_text: '黑龙江，双鸭山，饶河',
    search_text: 'hlj, sys, rh; hei long jiang, shuang ya shan, rao he; 黑龙江，双鸭山，饶河',
    weaid: 1984
  },
  {
    display_text: '黑龙江，双鸭山，友谊',
    search_text: 'hlj, sys, yy; hei long jiang, shuang ya shan, you yi; 黑龙江，双鸭山，友谊',
    weaid: 2215
  },
  {
    display_text: '湖北，武汉，城区',
    search_text: 'hb, wh, cq; hu bei, wu han, cheng qu; 湖北，武汉，城区',
    weaid: 248
  },
  {
    display_text: '湖北，武汉，蔡甸',
    search_text: 'hb, wh, cd; hu bei, wu han, cai dian; 湖北，武汉，蔡甸',
    weaid: 535
  },
  {
    display_text: '湖北，武汉，黄陂',
    search_text: 'hb, wh, hp; hu bei, wu han, huang po; 湖北，武汉，黄陂',
    weaid: 917
  },
  {
    display_text: '湖北，武汉，新洲',
    search_text: 'hb, wh, xz; hu bei, wu han, xin zhou; 湖北，武汉，新洲',
    weaid: 1946
  },
  {
    display_text: '湖北，武汉，江夏',
    search_text: 'hb, wh, jx; hu bei, wu han, jiang xia; 湖北，武汉，江夏',
    weaid: 1053
  },
  {
    display_text: '湖北，武汉，东西湖',
    search_text: 'hb, wh, dxh; hu bei, wu han, dong xi hu; 湖北，武汉，东西湖',
    weaid: 2477
  },
  {
    display_text: '湖北，襄阳，城区',
    search_text: 'hb, xy, cq; hu bei, xiang yang, cheng qu; 湖北，襄阳，城区',
    weaid: 260
  },
  {
    display_text: '湖北，襄阳，襄州',
    search_text: 'hb, xy, xz; hu bei, xiang yang, xiang zhou; 湖北，襄阳，襄州',
    weaid: 2478
  },
  {
    display_text: '湖北，襄阳，保康',
    search_text: 'hb, xy, bk; hu bei, xiang yang, bao kang; 湖北，襄阳，保康',
    weaid: 496
  },
  {
    display_text: '湖北，襄阳，南漳',
    search_text: 'hb, xy, nz; hu bei, xiang yang, nan zhang; 湖北，襄阳，南漳',
    weaid: 1400
  },
  {
    display_text: '湖北，襄阳，宜城',
    search_text: 'hb, xy, yc; hu bei, xiang yang, yi cheng; 湖北，襄阳，宜城',
    weaid: 1964
  },
  {
    display_text: '湖北，襄阳，老河口',
    search_text: 'hb, xy, lhk; hu bei, xiang yang, lao he kou; 湖北，襄阳，老河口',
    weaid: 1153
  },
  {
    display_text: '湖北，襄阳，谷城',
    search_text: 'hb, xy, gc; hu bei, xiang yang, gu cheng; 湖北，襄阳，谷城',
    weaid: 776
  },
  {
    display_text: '湖北，襄阳，枣阳',
    search_text: 'hb, xy, zy; hu bei, xiang yang, zao yang; 湖北，襄阳，枣阳',
    weaid: 2167
  },
  {
    display_text: '湖北，鄂州，城区',
    search_text: 'hb, ez, cq; hu bei, e zhou, cheng qu; 湖北，鄂州，城区',
    weaid: 261
  },
  {
    display_text: '湖北，鄂州，梁子湖',
    search_text: 'hb, ez, lzh; hu bei, e zhou, liang zi hu; 湖北，鄂州，梁子湖',
    weaid: 2479
  },
  {
    display_text: '湖北，孝感，城区',
    search_text: 'hb, xg, cq; hu bei, xiao gan, cheng qu; 湖北，孝感，城区',
    weaid: 262
  },
  {
    display_text: '湖北，孝感，安陆',
    search_text: 'hb, xg, al; hu bei, xiao gan, an lu; 湖北，孝感，安陆',
    weaid: 463
  },
  {
    display_text: '湖北，孝感，云梦',
    search_text: 'hb, xg, ym; hu bei, xiao gan, yun meng; 湖北，孝感，云梦',
    weaid: 2014
  },
  {
    display_text: '湖北，孝感，大悟',
    search_text: 'hb, xg, dw; hu bei, xiao gan, da wu; 湖北，孝感，大悟',
    weaid: 669
  },
  {
    display_text: '湖北，孝感，应城',
    search_text: 'hb, xg, yc; hu bei, xiao gan, ying cheng; 湖北，孝感，应城',
    weaid: 1963
  },
  {
    display_text: '湖北，孝感，汉川',
    search_text: 'hb, xg, hc; hu bei, xiao gan, han chuan; 湖北，孝感，汉川',
    weaid: 858
  },
  {
    display_text: '湖北，孝感，孝昌',
    search_text: 'hb, xg, xc; hu bei, xiao gan, xiao chang; 湖北，孝感，孝昌',
    weaid: 2480
  },
  {
    display_text: '湖北，黄冈，城区',
    search_text: 'hb, hg, cq; hu bei, huang gang, cheng qu; 湖北，黄冈，城区',
    weaid: 249
  },
  {
    display_text: '湖北，黄冈，红安',
    search_text: 'hb, hg, ha; hu bei, huang gang, hong an; 湖北，黄冈，红安',
    weaid: 850
  },
  {
    display_text: '湖北，黄冈，麻城',
    search_text: 'hb, hg, mc; hu bei, huang gang, ma cheng; 湖北，黄冈，麻城',
    weaid: 1285
  },
  {
    display_text: '湖北，黄冈，罗田',
    search_text: 'hb, hg, lt; hu bei, huang gang, luo tian; 湖北，黄冈，罗田',
    weaid: 1226
  },
  {
    display_text: '湖北，黄冈，英山',
    search_text: 'hb, hg, ys; hu bei, huang gang, ying shan; 湖北，黄冈，英山',
    weaid: 2042
  },
  {
    display_text: '湖北，黄冈，浠水',
    search_text: 'hb, hg, xs; hu bei, huang gang, xi shui; 湖北，黄冈，浠水',
    weaid: 1903
  },
  {
    display_text: '湖北，黄冈，蕲春',
    search_text: 'hb, hg, qc; hu bei, huang gang, qi chun; 湖北，黄冈，蕲春',
    weaid: 1468
  },
  {
    display_text: '湖北，黄冈，黄梅',
    search_text: 'hb, hg, hm; hu bei, huang gang, huang mei; 湖北，黄冈，黄梅',
    weaid: 904
  },
  {
    display_text: '湖北，黄冈，武穴',
    search_text: 'hb, hg, wx; hu bei, huang gang, wu xue; 湖北，黄冈，武穴',
    weaid: 1815
  },
  {
    display_text: '湖北，黄冈，团风',
    search_text: 'hb, hg, tf; hu bei, huang gang, tuan feng; 湖北，黄冈，团风',
    weaid: 2481
  },
  {
    display_text: '湖北，黄石，城区',
    search_text: 'hb, hs, cq; hu bei, huang shi, cheng qu; 湖北，黄石，城区',
    weaid: 263
  },
  {
    display_text: '湖北，黄石，大冶',
    search_text: 'hb, hs, dy; hu bei, huang shi, da ye; 湖北，黄石，大冶',
    weaid: 682
  },
  {
    display_text: '湖北，黄石，阳新',
    search_text: 'hb, hs, yx; hu bei, huang shi, yang xin; 湖北，黄石，阳新',
    weaid: 2071
  },
  {
    display_text: '湖北，黄石，铁山',
    search_text: 'hb, hs, ts; hu bei, huang shi, tie shan; 湖北，黄石，铁山',
    weaid: 2482
  },
  {
    display_text: '湖北，黄石，下陆',
    search_text: 'hb, hs, xl; hu bei, huang shi, xia lu; 湖北，黄石，下陆',
    weaid: 2483
  },
  {
    display_text: '湖北，黄石，西塞山',
    search_text: 'hb, hs, xss; hu bei, huang shi, xi sai shan; 湖北，黄石，西塞山',
    weaid: 2484
  },
  {
    display_text: '湖北，咸宁，城区',
    search_text: 'hb, xn, cq; hu bei, xian ning, cheng qu; 湖北，咸宁，城区',
    weaid: 264
  },
  {
    display_text: '湖北，咸宁，赤壁',
    search_text: 'hb, xn, cb; hu bei, xian ning, chi bi; 湖北，咸宁，赤壁',
    weaid: 528
  },
  {
    display_text: '湖北，咸宁，嘉鱼',
    search_text: 'hb, xn, jy; hu bei, xian ning, jia yu; 湖北，咸宁，嘉鱼',
    weaid: 1072
  },
  {
    display_text: '湖北，咸宁，崇阳',
    search_text: 'hb, xn, cy; hu bei, xian ning, chong yang; 湖北，咸宁，崇阳',
    weaid: 588
  },
  {
    display_text: '湖北，咸宁，通城',
    search_text: 'hb, xn, tc; hu bei, xian ning, tong cheng; 湖北，咸宁，通城',
    weaid: 1676
  },
  {
    display_text: '湖北，咸宁，通山',
    search_text: 'hb, xn, ts; hu bei, xian ning, tong shan; 湖北，咸宁，通山',
    weaid: 1724
  },
  {
    display_text: '湖北，荆州，城区',
    search_text: 'hb, jz, cq; hu bei, jing zhou, cheng qu; 湖北，荆州，城区',
    weaid: 250
  },
  {
    display_text: '湖北，荆州，江陵',
    search_text: 'hb, jz, jl; hu bei, jing zhou, jiang ling; 湖北，荆州，江陵',
    weaid: 1008
  },
  {
    display_text: '湖北，荆州，公安',
    search_text: 'hb, jz, ga; hu bei, jing zhou, gong an; 湖北，荆州，公安',
    weaid: 771
  },
  {
    display_text: '湖北，荆州，石首',
    search_text: 'hb, jz, ss; hu bei, jing zhou, shi shou; 湖北，荆州，石首',
    weaid: 1621
  },
  {
    display_text: '湖北，荆州，监利',
    search_text: 'hb, jz, jl; hu bei, jing zhou, jian li; 湖北，荆州，监利',
    weaid: 1007
  },
  {
    display_text: '湖北，荆州，洪湖',
    search_text: 'hb, jz, hh; hu bei, jing zhou, hong hu; 湖北，荆州，洪湖',
    weaid: 875
  },
  {
    display_text: '湖北，荆州，松滋',
    search_text: 'hb, jz, sz; hu bei, jing zhou, song zi; 湖北，荆州，松滋',
    weaid: 1664
  },
  {
    display_text: '湖北，宜昌，城区',
    search_text: 'hb, yc, cq; hu bei, yi chang, cheng qu; 湖北，宜昌，城区',
    weaid: 251
  },
  {
    display_text: '湖北，宜昌，远安',
    search_text: 'hb, yc, ya; hu bei, yi chang, yuan an; 湖北，宜昌，远安',
    weaid: 1951
  },
  {
    display_text: '湖北，宜昌，秭归',
    search_text: 'hb, yc, zg; hu bei, yi chang, zi gui; 湖北，宜昌，秭归',
    weaid: 2112
  },
  {
    display_text: '湖北，宜昌，兴山',
    search_text: 'hb, yc, xs; hu bei, yi chang, xing shan; 湖北，宜昌，兴山',
    weaid: 1904
  },
  {
    display_text: '湖北，宜昌，五峰',
    search_text: 'hb, yc, wf; hu bei, yi chang, wu feng; 湖北，宜昌，五峰',
    weaid: 1764
  },
  {
    display_text: '湖北，宜昌，当阳',
    search_text: 'hb, yc, dy; hu bei, yi chang, dang yang; 湖北，宜昌，当阳',
    weaid: 680
  },
  {
    display_text: '湖北，宜昌，长阳',
    search_text: 'hb, yc, zy; hu bei, yi chang, zhang yang; 湖北，宜昌，长阳',
    weaid: 589
  },
  {
    display_text: '湖北，宜昌，宜都',
    search_text: 'hb, yc, yd; hu bei, yi chang, yi dou; 湖北，宜昌，宜都',
    weaid: 2485
  },
  {
    display_text: '湖北，宜昌，枝江',
    search_text: 'hb, yc, zj; hu bei, yi chang, zhi jiang; 湖北，宜昌，枝江',
    weaid: 2121
  },
  {
    display_text: '湖北，宜昌，夷陵',
    search_text: 'hb, yc, yl; hu bei, yi chang, yi ling; 湖北，宜昌，夷陵',
    weaid: 2487
  },
  {
    display_text: '湖北，恩施，城区',
    search_text: 'hb, es, cq; hu bei, en shi, cheng qu; 湖北，恩施，城区',
    weaid: 252
  },
  {
    display_text: '湖北，恩施，利川',
    search_text: 'hb, es, lc; hu bei, en shi, li chuan; 湖北，恩施，利川',
    weaid: 1122
  },
  {
    display_text: '湖北，恩施，建始',
    search_text: 'hb, es, js; hu bei, en shi, jian shi; 湖北，恩施，建始',
    weaid: 1030
  },
  {
    display_text: '湖北，恩施，咸丰',
    search_text: 'hb, es, xf; hu bei, en shi, xian feng; 湖北，恩施，咸丰',
    weaid: 1851
  },
  {
    display_text: '湖北，恩施，宣恩',
    search_text: 'hb, es, xe; hu bei, en shi, xuan en; 湖北，恩施，宣恩',
    weaid: 1847
  },
  {
    display_text: '湖北，恩施，鹤峰',
    search_text: 'hb, es, hf; hu bei, en shi, he feng; 湖北，恩施，鹤峰',
    weaid: 870
  },
  {
    display_text: '湖北，恩施，来凤',
    search_text: 'hb, es, lf; hu bei, en shi, lai feng; 湖北，恩施，来凤',
    weaid: 1142
  },
  {
    display_text: '湖北，恩施，巴东',
    search_text: 'hb, es, bd; hu bei, en shi, ba dong; 湖北，恩施，巴东',
    weaid: 486
  },
  {
    display_text: '湖北，十堰，城区',
    search_text: 'hb, sy, cq; hu bei, shi yan, cheng qu; 湖北，十堰，城区',
    weaid: 253
  },
  {
    display_text: '湖北，十堰，竹溪',
    search_text: 'hb, sy, zx; hu bei, shi yan, zhu xi; 湖北，十堰，竹溪',
    weaid: 2159
  },
  {
    display_text: '湖北，十堰，郧西',
    search_text: 'hb, sy, yx; hu bei, shi yan, yun xi; 湖北，十堰，郧西',
    weaid: 2072
  },
  {
    display_text: '湖北，十堰，郧阳',
    search_text: 'hb, sy, yy; hu bei, shi yan, yun yang; 湖北，十堰，郧阳',
    weaid: 2073
  },
  {
    display_text: '湖北，十堰，竹山',
    search_text: 'hb, sy, zs; hu bei, shi yan, zhu shan; 湖北，十堰，竹山',
    weaid: 2151
  },
  {
    display_text: '湖北，十堰，房县',
    search_text: 'hb, sy, fx; hu bei, shi yan, fang xian; 湖北，十堰，房县',
    weaid: 753
  },
  {
    display_text: '湖北，十堰，丹江口',
    search_text: 'hb, sy, djk; hu bei, shi yan, dan jiang kou; 湖北，十堰，丹江口',
    weaid: 628
  },
  {
    display_text: '湖北，十堰，茅箭',
    search_text: 'hb, sy, mj; hu bei, shi yan, mao jian; 湖北，十堰，茅箭',
    weaid: 2488
  },
  {
    display_text: '湖北，十堰，张湾',
    search_text: 'hb, sy, zw; hu bei, shi yan, zhang wan; 湖北，十堰，张湾',
    weaid: 2489
  },
  {
    display_text: '湖北，神农架，城区',
    search_text: 'hb, snj, cq; hu bei, shen nong jia, cheng qu; 湖北，神农架，城区',
    weaid: 254
  },
  {
    display_text: '湖北，随州，城区',
    search_text: 'hb, sz, cq; hu bei, sui zhou, cheng qu; 湖北，随州，城区',
    weaid: 255
  },
  {
    display_text: '湖北，随州，广水',
    search_text: 'hb, sz, gs; hu bei, sui zhou, guang shui; 湖北，随州，广水',
    weaid: 814
  },
  {
    display_text: '湖北，荆门，城区',
    search_text: 'hb, jm, cq; hu bei, jing men, cheng qu; 湖北，荆门，城区',
    weaid: 256
  },
  {
    display_text: '湖北，荆门，钟祥',
    search_text: 'hb, jm, zx; hu bei, jing men, zhong xiang; 湖北，荆门，钟祥',
    weaid: 2160
  },
  {
    display_text: '湖北，荆门，京山',
    search_text: 'hb, jm, js; hu bei, jing men, jing shan; 湖北，荆门，京山',
    weaid: 1031
  },
  {
    display_text: '湖北，荆门，掇刀',
    search_text: 'hb, jm, dd; hu bei, jing men, duo dao; 湖北，荆门，掇刀',
    weaid: 2490
  },
  {
    display_text: '湖北，荆门，沙洋',
    search_text: 'hb, jm, sy; hu bei, jing men, sha yang; 湖北，荆门，沙洋',
    weaid: 2491
  },
  {
    display_text: '湖北，天门，城区',
    search_text: 'hb, tm, cq; hu bei, tian men, cheng qu; 湖北，天门，城区',
    weaid: 257
  },
  {
    display_text: '湖北，仙桃，城区',
    search_text: 'hb, xt, cq; hu bei, xian tao, cheng qu; 湖北，仙桃，城区',
    weaid: 258
  },
  {
    display_text: '湖北，潜江，城区',
    search_text: 'hb, qj, cq; hu bei, qian jiang, cheng qu; 湖北，潜江，城区',
    weaid: 259
  },
  {
    display_text: '湖南，长沙，城区',
    search_text: 'hn, cs, cq; hu nan, chang sha, cheng qu; 湖南，长沙，城区',
    weaid: 384
  },
  {
    display_text: '湖南，长沙，宁乡',
    search_text: 'hn, cs, nx; hu nan, chang sha, ning xiang; 湖南，长沙，宁乡',
    weaid: 1390
  },
  {
    display_text: '湖南，长沙，浏阳',
    search_text: 'hn, cs, ly; hu nan, chang sha, liu yang; 湖南，长沙，浏阳',
    weaid: 1255
  },
  {
    display_text: '湖南，长沙，湘江新区',
    search_text: 'hn, cs, xjxq; hu nan, chang sha, xiang jiang xin qu; 湖南，长沙，湘江新区',
    weaid: 2534
  },
  {
    display_text: '湖南，长沙，望城',
    search_text: 'hn, cs, wc; hu nan, chang sha, wang cheng; 湖南，长沙，望城',
    weaid: 2535
  },
  {
    display_text: '湖南，湘潭，城区',
    search_text: 'hn, xt, cq; hu nan, xiang tan, cheng qu; 湖南，湘潭，城区',
    weaid: 398
  },
  {
    display_text: '湖南，湘潭，韶山',
    search_text: 'hn, xt, ss; hu nan, xiang tan, shao shan; 湖南，湘潭，韶山',
    weaid: 1622
  },
  {
    display_text: '湖南，湘潭，湘乡',
    search_text: 'hn, xt, xx; hu nan, xiang tan, xiang xiang; 湖南，湘潭，湘乡',
    weaid: 1922
  },
  {
    display_text: '湖南，株洲，城区',
    search_text: 'hn, zz, cq; hu nan, zhu zhou, cheng qu; 湖南，株洲，城区',
    weaid: 385
  },
  {
    display_text: '湖南，株洲，攸县',
    search_text: 'hn, zz, yx; hu nan, zhu zhou, you xian; 湖南，株洲，攸县',
    weaid: 1927
  },
  {
    display_text: '湖南，株洲，醴陵',
    search_text: 'hn, zz, ll; hu nan, zhu zhou, li ling; 湖南，株洲，醴陵',
    weaid: 1173
  },
  {
    display_text: '湖南，株洲，茶陵',
    search_text: 'hn, zz, cl; hu nan, zhu zhou, cha ling; 湖南，株洲，茶陵',
    weaid: 556
  },
  {
    display_text: '湖南，株洲，炎陵',
    search_text: 'hn, zz, yl; hu nan, zhu zhou, yan ling; 湖南，株洲，炎陵',
    weaid: 2008
  },
  {
    display_text: '湖南，衡阳，城区',
    search_text: 'hn, hy, cq; hu nan, heng yang, cheng qu; 湖南，衡阳，城区',
    weaid: 386
  },
  {
    display_text: '湖南，衡阳，衡山',
    search_text: 'hn, hy, hs; hu nan, heng yang, heng shan; 湖南，衡阳，衡山',
    weaid: 929
  },
  {
    display_text: '湖南，衡阳，衡东',
    search_text: 'hn, hy, hd; hu nan, heng yang, heng dong; 湖南，衡阳，衡东',
    weaid: 865
  },
  {
    display_text: '湖南，衡阳，祁东',
    search_text: 'hn, hy, qd; hu nan, heng yang, qi dong; 湖南，衡阳，祁东',
    weaid: 1471
  },
  {
    display_text: '湖南，衡阳，衡阳县',
    search_text: 'hn, hy, hyx; hu nan, heng yang, heng yang xian; 湖南，衡阳，衡阳县',
    weaid: 2536
  },
  {
    display_text: '湖南，衡阳，常宁',
    search_text: 'hn, hy, cn; hu nan, heng yang, chang ning; 湖南，衡阳，常宁',
    weaid: 561
  },
  {
    display_text: '湖南，衡阳，衡南',
    search_text: 'hn, hy, hn; hu nan, heng yang, heng nan; 湖南，衡阳，衡南',
    weaid: 907
  },
  {
    display_text: '湖南，衡阳，耒阳',
    search_text: 'hn, hy, ly; hu nan, heng yang, lei yang; 湖南，衡阳，耒阳',
    weaid: 1254
  },
  {
    display_text: '湖南，衡阳，南岳',
    search_text: 'hn, hy, ny; hu nan, heng yang, nan yue; 湖南，衡阳，南岳',
    weaid: 2537
  },
  {
    display_text: '湖南，郴州，城区',
    search_text: 'hn, cz, cq; hu nan, chen zhou, cheng qu; 湖南，郴州，城区',
    weaid: 387
  },
  {
    display_text: '湖南，郴州，桂阳',
    search_text: 'hn, cz, gy; hu nan, chen zhou, gui yang; 湖南，郴州，桂阳',
    weaid: 829
  },
  {
    display_text: '湖南，郴州，嘉禾',
    search_text: 'hn, cz, jh; hu nan, chen zhou, jia he; 湖南，郴州，嘉禾',
    weaid: 994
  },
  {
    display_text: '湖南，郴州，宜章',
    search_text: 'hn, cz, yz; hu nan, chen zhou, yi zhang; 湖南，郴州，宜章',
    weaid: 2092
  },
  {
    display_text: '湖南，郴州，临武',
    search_text: 'hn, cz, lw; hu nan, chen zhou, lin wu; 湖南，郴州，临武',
    weaid: 1229
  },
  {
    display_text: '湖南，郴州，资兴',
    search_text: 'hn, cz, zx; hu nan, chen zhou, zi xing; 湖南，郴州，资兴',
    weaid: 2161
  },
  {
    display_text: '湖南，郴州，汝城',
    search_text: 'hn, cz, rc; hu nan, chen zhou, ru cheng; 湖南，郴州，汝城',
    weaid: 1529
  },
  {
    display_text: '湖南，郴州，安仁',
    search_text: 'hn, cz, ar; hu nan, chen zhou, an ren; 湖南，郴州，安仁',
    weaid: 467
  },
  {
    display_text: '湖南，郴州，永兴',
    search_text: 'hn, cz, yx; hu nan, chen zhou, yong xing; 湖南，郴州，永兴',
    weaid: 2074
  },
  {
    display_text: '湖南，郴州，桂东',
    search_text: 'hn, cz, gd; hu nan, chen zhou, gui dong; 湖南，郴州，桂东',
    weaid: 784
  },
  {
    display_text: '湖南，郴州，苏仙',
    search_text: 'hn, cz, sx; hu nan, chen zhou, su xian; 湖南，郴州，苏仙',
    weaid: 2538
  },
  {
    display_text: '湖南，常德，城区',
    search_text: 'hn, cd, cq; hu nan, chang de, cheng qu; 湖南，常德，城区',
    weaid: 388
  },
  {
    display_text: '湖南，常德，安乡',
    search_text: 'hn, cd, ax; hu nan, chang de, an xiang; 湖南，常德，安乡',
    weaid: 473
  },
  {
    display_text: '湖南，常德，桃源',
    search_text: 'hn, cd, ty; hu nan, chang de, tao yuan; 湖南，常德，桃源',
    weaid: 1739
  },
  {
    display_text: '湖南，常德，汉寿',
    search_text: 'hn, cd, hs; hu nan, chang de, han shou; 湖南，常德，汉寿',
    weaid: 930
  },
  {
    display_text: '湖南，常德，澧县',
    search_text: 'hn, cd, lx; hu nan, chang de, li xian; 湖南，常德，澧县',
    weaid: 1243
  },
  {
    display_text: '湖南，常德，临澧',
    search_text: 'hn, cd, ll; hu nan, chang de, lin li; 湖南，常德，临澧',
    weaid: 1174
  },
  {
    display_text: '湖南，常德，石门',
    search_text: 'hn, cd, sm; hu nan, chang de, shi men; 湖南，常德，石门',
    weaid: 1598
  },
  {
    display_text: '湖南，常德，津市',
    search_text: 'hn, cd, js; hu nan, chang de, jin shi; 湖南，常德，津市',
    weaid: 2539
  },
  {
    display_text: '湖南，益阳，城区',
    search_text: 'hn, yy, cq; hu nan, yi yang, cheng qu; 湖南，益阳，城区',
    weaid: 389
  },
  {
    display_text: '湖南，益阳，赫山区',
    search_text: 'hn, yy, hsq; hu nan, yi yang, he shan qu; 湖南，益阳，赫山区',
    weaid: 2540
  },
  {
    display_text: '湖南，益阳，南县',
    search_text: 'hn, yy, nx; hu nan, yi yang, nan xian; 湖南，益阳，南县',
    weaid: 1391
  },
  {
    display_text: '湖南，益阳，桃江',
    search_text: 'hn, yy, tj; hu nan, yi yang, tao jiang; 湖南，益阳，桃江',
    weaid: 1696
  },
  {
    display_text: '湖南，益阳，安化',
    search_text: 'hn, yy, ah; hu nan, yi yang, an hua; 湖南，益阳，安化',
    weaid: 457
  },
  {
    display_text: '湖南，益阳，沅江',
    search_text: 'hn, yy, yj; hu nan, yi yang, yuan jiang; 湖南，益阳，沅江',
    weaid: 1994
  },
  {
    display_text: '湖南，娄底，城区',
    search_text: 'hn, ld, cq; hu nan, lou di, cheng qu; 湖南，娄底，城区',
    weaid: 390
  },
  {
    display_text: '湖南，娄底，双峰',
    search_text: 'hn, ld, sf; hu nan, lou di, shuang feng; 湖南，娄底，双峰',
    weaid: 1575
  },
  {
    display_text: '湖南，娄底，冷水江',
    search_text: 'hn, ld, lsj; hu nan, lou di, leng shui jiang; 湖南，娄底，冷水江',
    weaid: 1220
  },
  {
    display_text: '湖南，娄底，新化',
    search_text: 'hn, ld, xh; hu nan, lou di, xin hua; 湖南，娄底，新化',
    weaid: 1867
  },
  {
    display_text: '湖南，娄底，涟源',
    search_text: 'hn, ld, ly; hu nan, lou di, lian yuan; 湖南，娄底，涟源',
    weaid: 1267
  },
  {
    display_text: '湖南，邵阳，城区',
    search_text: 'hn, sy, cq; hu nan, shao yang, cheng qu; 湖南，邵阳，城区',
    weaid: 391
  },
  {
    display_text: '湖南，邵阳，隆回',
    search_text: 'hn, sy, lh; hu nan, shao yang, long hui; 湖南，邵阳，隆回',
    weaid: 1156
  },
  {
    display_text: '湖南，邵阳，洞口',
    search_text: 'hn, sy, dk; hu nan, shao yang, dong kou; 湖南，邵阳，洞口',
    weaid: 631
  },
  {
    display_text: '湖南，邵阳，新邵',
    search_text: 'hn, sy, xs; hu nan, shao yang, xin shao; 湖南，邵阳，新邵',
    weaid: 1905
  },
  {
    display_text: '湖南，邵阳，邵东',
    search_text: 'hn, sy, sd; hu nan, shao yang, shao dong; 湖南，邵阳，邵东',
    weaid: 1571
  },
  {
    display_text: '湖南，邵阳，绥宁',
    search_text: 'hn, sy, sn; hu nan, shao yang, sui ning; 湖南，邵阳，绥宁',
    weaid: 1607
  },
  {
    display_text: '湖南，邵阳，新宁',
    search_text: 'hn, sy, xn; hu nan, shao yang, xin ning; 湖南，邵阳，新宁',
    weaid: 1891
  },
  {
    display_text: '湖南，邵阳，武冈',
    search_text: 'hn, sy, wg; hu nan, shao yang, wu gang; 湖南，邵阳，武冈',
    weaid: 1766
  },
  {
    display_text: '湖南，邵阳，城步',
    search_text: 'hn, sy, cb; hu nan, shao yang, cheng bu; 湖南，邵阳，城步',
    weaid: 530
  },
  {
    display_text: '湖南，邵阳，邵阳县',
    search_text: 'hn, sy, syx; hu nan, shao yang, shao yang xian; 湖南，邵阳，邵阳县',
    weaid: 2541
  },
  {
    display_text: '湖南，岳阳，城区',
    search_text: 'hn, yy, cq; hu nan, yue yang, cheng qu; 湖南，岳阳，城区',
    weaid: 392
  },
  {
    display_text: '湖南，岳阳，华容',
    search_text: 'hn, yy, hr; hu nan, yue yang, hua rong; 湖南，岳阳，华容',
    weaid: 924
  },
  {
    display_text: '湖南，岳阳，湘阴',
    search_text: 'hn, yy, xy; hu nan, yue yang, xiang yin; 湖南，岳阳，湘阴',
    weaid: 1935
  },
  {
    display_text: '湖南，岳阳，汨罗',
    search_text: 'hn, yy, ml; hu nan, yue yang, mi luo; 湖南，岳阳，汨罗',
    weaid: 1317
  },
  {
    display_text: '湖南，岳阳，平江',
    search_text: 'hn, yy, pj; hu nan, yue yang, ping jiang; 湖南，岳阳，平江',
    weaid: 1419
  },
  {
    display_text: '湖南，岳阳，临湘',
    search_text: 'hn, yy, lx; hu nan, yue yang, lin xiang; 湖南，岳阳，临湘',
    weaid: 1242
  },
  {
    display_text: '湖南，张家界，城区',
    search_text: 'hn, zjj, cq; hu nan, zhang jia jie, cheng qu; 湖南，张家界，城区',
    weaid: 393
  },
  {
    display_text: '湖南，张家界，桑植',
    search_text: 'hn, zjj, sz; hu nan, zhang jia jie, sang zhi; 湖南，张家界，桑植',
    weaid: 1663
  },
  {
    display_text: '湖南，张家界，慈利',
    search_text: 'hn, zjj, cl; hu nan, zhang jia jie, ci li; 湖南，张家界，慈利',
    weaid: 557
  },
  {
    display_text: '湖南，张家界，武陵源',
    search_text: 'hn, zjj, wly; hu nan, zhang jia jie, wu ling yuan; 湖南，张家界，武陵源',
    weaid: 2542
  },
  {
    display_text: '湖南，怀化，城区',
    search_text: 'hn, hh, cq; hu nan, huai hua, cheng qu; 湖南，怀化，城区',
    weaid: 394
  },
  {
    display_text: '湖南，怀化，沅陵',
    search_text: 'hn, hh, yl; hu nan, huai hua, yuan ling; 湖南，怀化，沅陵',
    weaid: 2009
  },
  {
    display_text: '湖南，怀化，辰溪',
    search_text: 'hn, hh, cx; hu nan, huai hua, chen xi; 湖南，怀化，辰溪',
    weaid: 583
  },
  {
    display_text: '湖南，怀化，靖州',
    search_text: 'hn, hh, jz; hu nan, huai hua, jing zhou; 湖南，怀化，靖州',
    weaid: 1078
  },
  {
    display_text: '湖南，怀化，会同',
    search_text: 'hn, hh, ht; hu nan, huai hua, hui tong; 湖南，怀化，会同',
    weaid: 940
  },
  {
    display_text: '湖南，怀化，通道',
    search_text: 'hn, hh, td; hu nan, huai hua, tong dao; 湖南，怀化，通道',
    weaid: 1678
  },
  {
    display_text: '湖南，怀化，麻阳',
    search_text: 'hn, hh, my; hu nan, huai hua, ma yang; 湖南，怀化，麻阳',
    weaid: 1338
  },
  {
    display_text: '湖南，怀化，新晃',
    search_text: 'hn, hh, xh; hu nan, huai hua, xin huang; 湖南，怀化，新晃',
    weaid: 1868
  },
  {
    display_text: '湖南，怀化，芷江',
    search_text: 'hn, hh, zj; hu nan, huai hua, zhi jiang; 湖南，怀化，芷江',
    weaid: 2122
  },
  {
    display_text: '湖南，怀化，溆浦',
    search_text: 'hn, hh, xp; hu nan, huai hua, xu pu; 湖南，怀化，溆浦',
    weaid: 1897
  },
  {
    display_text: '湖南，怀化，中方',
    search_text: 'hn, hh, zf; hu nan, huai hua, zhong fang; 湖南，怀化，中方',
    weaid: 2543
  },
  {
    display_text: '湖南，怀化，洪江',
    search_text: 'hn, hh, hj; hu nan, huai hua, hong jiang; 湖南，怀化，洪江',
    weaid: 2544
  },
  {
    display_text: '湖南，永州，城区',
    search_text: 'hn, yz, cq; hu nan, yong zhou, cheng qu; 湖南，永州，城区',
    weaid: 396
  },
  {
    display_text: '湖南，永州，祁阳',
    search_text: 'hn, yz, qy; hu nan, yong zhou, qi yang; 湖南，永州，祁阳',
    weaid: 1514
  },
  {
    display_text: '湖南，永州，东安',
    search_text: 'hn, yz, da; hu nan, yong zhou, dong an; 湖南，永州，东安',
    weaid: 599
  },
  {
    display_text: '湖南，永州，双牌',
    search_text: 'hn, yz, sp; hu nan, yong zhou, shuang pai; 湖南，永州，双牌',
    weaid: 1610
  },
  {
    display_text: '湖南，永州，道县',
    search_text: 'hn, yz, dx; hu nan, yong zhou, dao xian; 湖南，永州，道县',
    weaid: 674
  },
  {
    display_text: '湖南，永州，宁远',
    search_text: 'hn, yz, ny; hu nan, yong zhou, ning yuan; 湖南，永州，宁远',
    weaid: 1398
  },
  {
    display_text: '湖南，永州，江永',
    search_text: 'hn, yz, jy; hu nan, yong zhou, jiang yong; 湖南，永州，江永',
    weaid: 1068
  },
  {
    display_text: '湖南，永州，蓝山',
    search_text: 'hn, yz, ls; hu nan, yong zhou, lan shan; 湖南，永州，蓝山',
    weaid: 1211
  },
  {
    display_text: '湖南，永州，新田',
    search_text: 'hn, yz, xt; hu nan, yong zhou, xin tian; 湖南，永州，新田',
    weaid: 1909
  },
  {
    display_text: '湖南，永州，江华',
    search_text: 'hn, yz, jh; hu nan, yong zhou, jiang hua; 湖南，永州，江华',
    weaid: 999
  },
  {
    display_text: '湖南，永州，冷水滩',
    search_text: 'hn, yz, lst; hu nan, yong zhou, leng shui tan; 湖南，永州，冷水滩',
    weaid: 2545
  },
  {
    display_text: '湖南，湘西，吉首',
    search_text: 'hn, xx, js; hu nan, xiang xi, ji shou; 湖南，湘西，吉首',
    weaid: 397
  },
  {
    display_text: '湖南，湘西，保靖',
    search_text: 'hn, xx, bj; hu nan, xiang xi, bao jing; 湖南，湘西，保靖',
    weaid: 495
  },
  {
    display_text: '湖南，湘西，永顺',
    search_text: 'hn, xx, ys; hu nan, xiang xi, yong shun; 湖南，湘西，永顺',
    weaid: 2043
  },
  {
    display_text: '湖南，湘西，古丈',
    search_text: 'hn, xx, gz; hu nan, xiang xi, gu zhang; 湖南，湘西，古丈',
    weaid: 842
  },
  {
    display_text: '湖南，湘西，凤凰',
    search_text: 'hn, xx, fh; hu nan, xiang xi, feng huang; 湖南，湘西，凤凰',
    weaid: 719
  },
  {
    display_text: '湖南，湘西，泸溪',
    search_text: 'hn, xx, lx; hu nan, xiang xi, lu xi; 湖南，湘西，泸溪',
    weaid: 1244
  },
  {
    display_text: '湖南，湘西，龙山',
    search_text: 'hn, xx, ls; hu nan, xiang xi, long shan; 湖南，湘西，龙山',
    weaid: 1210
  },
  {
    display_text: '湖南，湘西，花垣',
    search_text: 'hn, xx, hy; hu nan, xiang xi, hua yuan; 湖南，湘西，花垣',
    weaid: 873
  },
  {
    display_text: '吉林，长春，城区',
    search_text: 'jl, cc, cq; ji lin, chang chun, cheng qu; 吉林，长春，城区',
    weaid: 425
  },
  {
    display_text: '吉林，长春，农安',
    search_text: 'jl, cc, na; ji lin, chang chun, nong an; 吉林，长春，农安',
    weaid: 1349
  },
  {
    display_text: '吉林，长春，德惠',
    search_text: 'jl, cc, dh; ji lin, chang chun, de hui; 吉林，长春，德惠',
    weaid: 623
  },
  {
    display_text: '吉林，长春，九台',
    search_text: 'jl, cc, jt; ji lin, chang chun, jiu tai; 吉林，长春，九台',
    weaid: 1035
  },
  {
    display_text: '吉林，长春，榆树',
    search_text: 'jl, cc, ys; ji lin, chang chun, yu shu; 吉林，长春，榆树',
    weaid: 2035
  },
  {
    display_text: '吉林，长春，双阳',
    search_text: 'jl, cc, sy; ji lin, chang chun, shuang yang; 吉林，长春，双阳',
    weaid: 1645
  },
  {
    display_text: '吉林，城区',
    search_text: 'jl, cq; ji lin, cheng qu; 吉林，城区',
    weaid: 432
  },
  {
    display_text: '吉林，舒兰',
    search_text: 'jl, sl; ji lin, shu lan; 吉林，舒兰',
    weaid: 1590
  },
  {
    display_text: '吉林，永吉',
    search_text: 'jl, yj; ji lin, yong ji; 吉林，永吉',
    weaid: 1990
  },
  {
    display_text: '吉林，蛟河',
    search_text: 'jl, jh; ji lin, jiao he; 吉林，蛟河',
    weaid: 993
  },
  {
    display_text: '吉林，磐石',
    search_text: 'jl, ps; ji lin, pan shi; 吉林，磐石',
    weaid: 1432
  },
  {
    display_text: '吉林，桦甸',
    search_text: 'jl, hd; ji lin, hua dian; 吉林，桦甸',
    weaid: 864
  },
  {
    display_text: '吉林，延边，延吉',
    search_text: 'jl, yb, yj; ji lin, yan bian, yan ji; 吉林，延边，延吉',
    weaid: 426
  },
  {
    display_text: '吉林，延边，敦化',
    search_text: 'jl, yb, dh; ji lin, yan bian, dun hua; 吉林，延边，敦化',
    weaid: 624
  },
  {
    display_text: '吉林，延边，安图',
    search_text: 'jl, yb, at; ji lin, yan bian, an tu; 吉林，延边，安图',
    weaid: 469
  },
  {
    display_text: '吉林，延边，汪清',
    search_text: 'jl, yb, wq; ji lin, yan bian, wang qing; 吉林，延边，汪清',
    weaid: 1791
  },
  {
    display_text: '吉林，延边，和龙',
    search_text: 'jl, yb, hl; ji lin, yan bian, he long; 吉林，延边，和龙',
    weaid: 898
  },
  {
    display_text: '吉林，延边，龙井',
    search_text: 'jl, yb, lj; ji lin, yan bian, long jing; 吉林，延边，龙井',
    weaid: 1159
  },
  {
    display_text: '吉林，延边，珲春',
    search_text: 'jl, yb, hc; ji lin, yan bian, hui chun; 吉林，延边，珲春',
    weaid: 855
  },
  {
    display_text: '吉林，延边，图们',
    search_text: 'jl, yb, tm; ji lin, yan bian, tu men; 吉林，延边，图们',
    weaid: 1712
  },
  {
    display_text: '吉林，四平，城区',
    search_text: 'jl, sp, cq; ji lin, si ping, cheng qu; 吉林，四平，城区',
    weaid: 427
  },
  {
    display_text: '吉林，四平，双辽',
    search_text: 'jl, sp, sl; ji lin, si ping, shuang liao; 吉林，四平，双辽',
    weaid: 1592
  },
  {
    display_text: '吉林，四平，梨树',
    search_text: 'jl, sp, ls; ji lin, si ping, li shu; 吉林，四平，梨树',
    weaid: 2216
  },
  {
    display_text: '吉林，四平，公主岭',
    search_text: 'jl, sp, gzl; ji lin, si ping, gong zhu ling; 吉林，四平，公主岭',
    weaid: 846
  },
  {
    display_text: '吉林，四平，伊通',
    search_text: 'jl, sp, yt; ji lin, si ping, yi tong; 吉林，四平，伊通',
    weaid: 2217
  },
  {
    display_text: '吉林，通化，城区',
    search_text: 'jl, th, cq; ji lin, tong hua, cheng qu; 吉林，通化，城区',
    weaid: 433
  },
  {
    display_text: '吉林，通化，梅河口',
    search_text: 'jl, th, mhk; ji lin, tong hua, mei he kou; 吉林，通化，梅河口',
    weaid: 1300
  },
  {
    display_text: '吉林，通化，柳河',
    search_text: 'jl, th, lh; ji lin, tong hua, liu he; 吉林，通化，柳河',
    weaid: 1150
  },
  {
    display_text: '吉林，通化，辉南',
    search_text: 'jl, th, hn; ji lin, tong hua, hui nan; 吉林，通化，辉南',
    weaid: 906
  },
  {
    display_text: '吉林，通化，集安',
    search_text: 'jl, th, ja; ji lin, tong hua, ji an; 吉林，通化，集安',
    weaid: 972
  },
  {
    display_text: '吉林，通化，通化县',
    search_text: 'jl, th, thx; ji lin, tong hua, tong hua xian; 吉林，通化，通化县',
    weaid: 1694
  },
  {
    display_text: '吉林，白城，城区',
    search_text: 'jl, bc, cq; ji lin, bai cheng, cheng qu; 吉林，白城，城区',
    weaid: 429
  },
  {
    display_text: '吉林，白城，洮南',
    search_text: 'jl, bc, tn; ji lin, bai cheng, tao nan; 吉林，白城，洮南',
    weaid: 1715
  },
  {
    display_text: '吉林，白城，大安',
    search_text: 'jl, bc, da; ji lin, bai cheng, da an; 吉林，白城，大安',
    weaid: 597
  },
  {
    display_text: '吉林，白城，镇赉',
    search_text: 'jl, bc, zl; ji lin, bai cheng, zhen lai; 吉林，白城，镇赉',
    weaid: 2129
  },
  {
    display_text: '吉林，白城，通榆',
    search_text: 'jl, bc, ty; ji lin, bai cheng, tong yu; 吉林，白城，通榆',
    weaid: 1738
  },
  {
    display_text: '吉林，辽源，城区',
    search_text: 'jl, ly, cq; ji lin, liao yuan, cheng qu; 吉林，辽源，城区',
    weaid: 430
  },
  {
    display_text: '吉林，辽源，东丰',
    search_text: 'jl, ly, df; ji lin, liao yuan, dong feng; 吉林，辽源，东丰',
    weaid: 614
  },
  {
    display_text: '吉林，辽源，东辽',
    search_text: 'jl, ly, dl; ji lin, liao yuan, dong liao; 吉林，辽源，东辽',
    weaid: 2218
  },
  {
    display_text: '吉林，松原，城区',
    search_text: 'jl, sy, cq; ji lin, song yuan, cheng qu; 吉林，松原，城区',
    weaid: 431
  },
  {
    display_text: '吉林，松原，乾安',
    search_text: 'jl, sy, qa; ji lin, song yuan, qian an; 吉林，松原，乾安',
    weaid: 1464
  },
  {
    display_text: '吉林，松原，前郭',
    search_text: 'jl, sy, qg; ji lin, song yuan, qian guo; 吉林，松原，前郭',
    weaid: 2219
  },
  {
    display_text: '吉林，松原，长岭',
    search_text: 'jl, sy, zl; ji lin, song yuan, zhang ling; 吉林，松原，长岭',
    weaid: 553
  },
  {
    display_text: '吉林，松原，扶余',
    search_text: 'jl, sy, fy; ji lin, song yuan, fu yu; 吉林，松原，扶余',
    weaid: 762
  },
  {
    display_text: '吉林，白山，城区',
    search_text: 'jl, bs, cq; ji lin, bai shan, cheng qu; 吉林，白山，城区',
    weaid: 428
  },
  {
    display_text: '吉林，白山，靖宇',
    search_text: 'jl, bs, jy; ji lin, bai shan, jing yu; 吉林，白山，靖宇',
    weaid: 1070
  },
  {
    display_text: '吉林，白山，临江',
    search_text: 'jl, bs, lj; ji lin, bai shan, lin jiang; 吉林，白山，临江',
    weaid: 1160
  },
  {
    display_text: '吉林，白山，长白',
    search_text: 'jl, bs, zb; ji lin, bai shan, zhang bai; 吉林，白山，长白',
    weaid: 558
  },
  {
    display_text: '吉林，白山，抚松',
    search_text: 'jl, bs, fs; ji lin, bai shan, fu song; 吉林，白山，抚松',
    weaid: 2221
  },
  {
    display_text: '吉林，白山，江源',
    search_text: 'jl, bs, jy; ji lin, bai shan, jiang yuan; 吉林，白山，江源',
    weaid: 2222
  },
  {
    display_text: '加拿大，多伦多（Toronto）',
    search_text: 'jnd, dld; jia na da, duo lun duo; 加拿大，多伦多（Toronto）',
    weaid: 2648
  },
  {
    display_text: '加拿大，温哥华港（Vancouver Harbour）',
    search_text: 'jnd, wghg; jia na da, wen ge hua gang; 加拿大，温哥华港（Vancouver Harbour）',
    weaid: 2206
  },
  {
    display_text: '柬埔寨，金边（Phnom Penh）',
    search_text: 'jpz, jb; jian pu zhai, jin bian; 柬埔寨，金边（Phnom Penh）',
    weaid: 2654
  },
  {
    display_text: '柬埔寨，马德望（Battambang）',
    search_text: 'jpz, mdw; jian pu zhai, ma de wang; 柬埔寨，马德望（Battambang）',
    weaid: 2656
  },
  {
    display_text: '柬埔寨，暹粒（Siemreap）',
    search_text: 'jpz, xl; jian pu zhai, xian li; 柬埔寨，暹粒（Siemreap）',
    weaid: 2658
  },
  {
    display_text: '柬埔寨，格罗戈（Krakor）',
    search_text: 'jpz, glg; jian pu zhai, ge luo ge; 柬埔寨，格罗戈（Krakor）',
    weaid: 2659
  },
  {
    display_text: '柬埔寨，上丁省（Stungtreng）',
    search_text: 'jpz, sds; jian pu zhai, shang ding sheng; 柬埔寨，上丁省（Stungtreng）',
    weaid: 2653
  },
  {
    display_text: '柬埔寨，贡布（Kampot）',
    search_text: 'jpz, gb; jian pu zhai, gong bu; 柬埔寨，贡布（Kampot）',
    weaid: 2657
  },
  {
    display_text: '柬埔寨，磅湛（Kompong  Cham）',
    search_text: 'jpz, bz; jian pu zhai, bang zhan; 柬埔寨，磅湛（Kompong Cham）',
    weaid: 2652
  },
  {
    display_text: '柬埔寨，柴桢（Svayrieng）',
    search_text: 'jpz, cz; jian pu zhai, chai zhen; 柬埔寨，柴桢（Svayrieng）',
    weaid: 2655
  },
  {
    display_text: '江苏，南京，城区',
    search_text: 'js, nj, cq; jiang su, nan jing, cheng qu; 江苏，南京，城区',
    weaid: 399
  },
  {
    display_text: '江苏，南京，溧水',
    search_text: 'js, nj, ls; jiang su, nan jing, li shui; 江苏，南京，溧水',
    weaid: 1205
  },
  {
    display_text: '江苏，南京，高淳',
    search_text: 'js, nj, gc; jiang su, nan jing, gao chun; 江苏，南京，高淳',
    weaid: 775
  },
  {
    display_text: '江苏，南京，江宁',
    search_text: 'js, nj, jn; jiang su, nan jing, jiang ning; 江苏，南京，江宁',
    weaid: 1015
  },
  {
    display_text: '江苏，南京，六合',
    search_text: 'js, nj, lh; jiang su, nan jing, liu he; 江苏，南京，六合',
    weaid: 1151
  },
  {
    display_text: '江苏，南京，浦口',
    search_text: 'js, nj, pk; jiang su, nan jing, pu kou; 江苏，南京，浦口',
    weaid: 2464
  },
  {
    display_text: '江苏，无锡，城区',
    search_text: 'js, wx, cq; jiang su, wu xi, cheng qu; 江苏，无锡，城区',
    weaid: 410
  },
  {
    display_text: '江苏，无锡，江阴',
    search_text: 'js, wx, jy; jiang su, wu xi, jiang yin; 江苏，无锡，江阴',
    weaid: 1067
  },
  {
    display_text: '江苏，无锡，宜兴',
    search_text: 'js, wx, yx; jiang su, wu xi, yi xing; 江苏，无锡，宜兴',
    weaid: 2063
  },
  {
    display_text: '江苏，无锡，锡山',
    search_text: 'js, wx, xs; jiang su, wu xi, xi shan; 江苏，无锡，锡山',
    weaid: 2465
  },
  {
    display_text: '江苏，镇江，城区',
    search_text: 'js, zj, cq; jiang su, zhen jiang, cheng qu; 江苏，镇江，城区',
    weaid: 400
  },
  {
    display_text: '江苏，镇江，丹阳',
    search_text: 'js, zj, dy; jiang su, zhen jiang, dan yang; 江苏，镇江，丹阳',
    weaid: 678
  },
  {
    display_text: '江苏，镇江，扬中',
    search_text: 'js, zj, yz; jiang su, zhen jiang, yang zhong; 江苏，镇江，扬中',
    weaid: 2089
  },
  {
    display_text: '江苏，镇江，句容',
    search_text: 'js, zj, jr; jiang su, zhen jiang, ju rong; 江苏，镇江，句容',
    weaid: 1024
  },
  {
    display_text: '江苏，镇江，丹徒',
    search_text: 'js, zj, dt; jiang su, zhen jiang, dan tu; 江苏，镇江，丹徒',
    weaid: 2466
  },
  {
    display_text: '江苏，苏州，城区',
    search_text: 'js, sz, cq; jiang su, su zhou, cheng qu; 江苏，苏州，城区',
    weaid: 401
  },
  {
    display_text: '江苏，苏州，常熟',
    search_text: 'js, sz, cs; jiang su, su zhou, chang shu; 江苏，苏州，常熟',
    weaid: 569
  },
  {
    display_text: '江苏，苏州，张家港',
    search_text: 'js, sz, zjg; jiang su, su zhou, zhang jia gang; 江苏，苏州，张家港',
    weaid: 2126
  },
  {
    display_text: '江苏，苏州，昆山',
    search_text: 'js, sz, ks; jiang su, su zhou, kun shan; 江苏，苏州，昆山',
    weaid: 1100
  },
  {
    display_text: '江苏，苏州，吴中',
    search_text: 'js, sz, wz; jiang su, su zhou, wu zhong; 江苏，苏州，吴中',
    weaid: 2467
  },
  {
    display_text: '江苏，苏州，吴江',
    search_text: 'js, sz, wj; jiang su, su zhou, wu jiang; 江苏，苏州，吴江',
    weaid: 1772
  },
  {
    display_text: '江苏，苏州，太仓',
    search_text: 'js, sz, tc; jiang su, su zhou, tai cang; 江苏，苏州，太仓',
    weaid: 1671
  },
  {
    display_text: '江苏，南通，城区',
    search_text: 'js, nt, cq; jiang su, nan tong, cheng qu; 江苏，南通，城区',
    weaid: 402
  },
  {
    display_text: '江苏，南通，海安',
    search_text: 'js, nt, ha; jiang su, nan tong, hai an; 江苏，南通，海安',
    weaid: 848
  },
  {
    display_text: '江苏，南通，如皋',
    search_text: 'js, nt, rg; jiang su, nan tong, ru gao; 江苏，南通，如皋',
    weaid: 1531
  },
  {
    display_text: '江苏，南通，如东',
    search_text: 'js, nt, rd; jiang su, nan tong, ru dong; 江苏，南通，如东',
    weaid: 1530
  },
  {
    display_text: '江苏，南通，启东',
    search_text: 'js, nt, qd; jiang su, nan tong, qi dong; 江苏，南通，启东',
    weaid: 1470
  },
  {
    display_text: '江苏，南通，海门',
    search_text: 'js, nt, hm; jiang su, nan tong, hai men; 江苏，南通，海门',
    weaid: 903
  },
  {
    display_text: '江苏，南通，通州',
    search_text: 'js, nt, tz; jiang su, nan tong, tong zhou; 江苏，南通，通州',
    weaid: 2468
  },
  {
    display_text: '江苏，扬州，城区',
    search_text: 'js, yz, cq; jiang su, yang zhou, cheng qu; 江苏，扬州，城区',
    weaid: 403
  },
  {
    display_text: '江苏，扬州，宝应',
    search_text: 'js, yz, by; jiang su, yang zhou, bao ying; 江苏，扬州，宝应',
    weaid: 522
  },
  {
    display_text: '江苏，扬州，仪征',
    search_text: 'js, yz, yz; jiang su, yang zhou, yi zheng; 江苏，扬州，仪征',
    weaid: 2090
  },
  {
    display_text: '江苏，扬州，高邮',
    search_text: 'js, yz, gy; jiang su, yang zhou, gao you; 江苏，扬州，高邮',
    weaid: 834
  },
  {
    display_text: '江苏，扬州，江都',
    search_text: 'js, yz, jd; jiang su, yang zhou, jiang du; 江苏，扬州，江都',
    weaid: 987
  },
  {
    display_text: '江苏，扬州，邗江',
    search_text: 'js, yz, hj; jiang su, yang zhou, han jiang; 江苏，扬州，邗江',
    weaid: 2469
  },
  {
    display_text: '江苏，盐城，城区',
    search_text: 'js, yc, cq; jiang su, yan cheng, cheng qu; 江苏，盐城，城区',
    weaid: 411
  },
  {
    display_text: '江苏，盐城，响水',
    search_text: 'js, yc, xs; jiang su, yan cheng, xiang shui; 江苏，盐城，响水',
    weaid: 1900
  },
  {
    display_text: '江苏，盐城，滨海',
    search_text: 'js, yc, bh; jiang su, yan cheng, bin hai; 江苏，盐城，滨海',
    weaid: 491
  },
  {
    display_text: '江苏，盐城，阜宁',
    search_text: 'js, yc, fn; jiang su, yan cheng, fu ning; 江苏，盐城，阜宁',
    weaid: 727
  },
  {
    display_text: '江苏，盐城，射阳',
    search_text: 'js, yc, sy; jiang su, yan cheng, she yang; 江苏，盐城，射阳',
    weaid: 1647
  },
  {
    display_text: '江苏，盐城，建湖',
    search_text: 'js, yc, jh; jiang su, yan cheng, jian hu; 江苏，盐城，建湖',
    weaid: 997
  },
  {
    display_text: '江苏，盐城，东台',
    search_text: 'js, yc, dt; jiang su, yan cheng, dong tai; 江苏，盐城，东台',
    weaid: 661
  },
  {
    display_text: '江苏，盐城，大丰',
    search_text: 'js, yc, df; jiang su, yan cheng, da feng; 江苏，盐城，大丰',
    weaid: 615
  },
  {
    display_text: '江苏，盐城，盐都',
    search_text: 'js, yc, yd; jiang su, yan cheng, yan dou; 江苏，盐城，盐都',
    weaid: 2470
  },
  {
    display_text: '江苏，徐州，城区',
    search_text: 'js, xz, cq; jiang su, xu zhou, cheng qu; 江苏，徐州，城区',
    weaid: 405
  },
  {
    display_text: '江苏，徐州，铜山',
    search_text: 'js, xz, ts; jiang su, xu zhou, tong shan; 江苏，徐州，铜山',
    weaid: 2471
  },
  {
    display_text: '江苏，徐州，丰县',
    search_text: 'js, xz, fx; jiang su, xu zhou, feng xian; 江苏，徐州，丰县',
    weaid: 749
  },
  {
    display_text: '江苏，徐州，沛县',
    search_text: 'js, xz, px; jiang su, xu zhou, pei xian; 江苏，徐州，沛县',
    weaid: 1445
  },
  {
    display_text: '江苏，徐州，邳州',
    search_text: 'js, xz, pz; jiang su, xu zhou, pi zhou; 江苏，徐州，邳州',
    weaid: 1461
  },
  {
    display_text: '江苏，徐州，睢宁',
    search_text: 'js, xz, sn; jiang su, xu zhou, sui ning; 江苏，徐州，睢宁',
    weaid: 1605
  },
  {
    display_text: '江苏，徐州，新沂',
    search_text: 'js, xz, xy; jiang su, xu zhou, xin yi; 江苏，徐州，新沂',
    weaid: 1933
  },
  {
    display_text: '江苏，淮安，城区',
    search_text: 'js, ha, cq; jiang su, huai an, cheng qu; 江苏，淮安，城区',
    weaid: 406
  },
  {
    display_text: '江苏，淮安，金湖',
    search_text: 'js, ha, jh; jiang su, huai an, jin hu; 江苏，淮安，金湖',
    weaid: 998
  },
  {
    display_text: '江苏，淮安，盱眙',
    search_text: 'js, ha, xy; jiang su, huai an, xu yi; 江苏，淮安，盱眙',
    weaid: 2052
  },
  {
    display_text: '江苏，淮安，洪泽',
    search_text: 'js, ha, hz; jiang su, huai an, hong ze; 江苏，淮安，洪泽',
    weaid: 965
  },
  {
    display_text: '江苏，淮安，涟水',
    search_text: 'js, ha, ls; jiang su, huai an, lian shui; 江苏，淮安，涟水',
    weaid: 1206
  },
  {
    display_text: '江苏，淮安，淮阴区',
    search_text: 'js, ha, hyq; jiang su, huai an, huai yin qu; 江苏，淮安，淮阴区',
    weaid: 2472
  },
  {
    display_text: '江苏，淮安，淮安区',
    search_text: 'js, ha, haq; jiang su, huai an, huai an qu; 江苏，淮安，淮安区',
    weaid: 2473
  },
  {
    display_text: '江苏，连云港，城区',
    search_text: 'js, lyg, cq; jiang su, lian yun gang, cheng qu; 江苏，连云港，城区',
    weaid: 407
  },
  {
    display_text: '江苏，连云港，东海',
    search_text: 'js, lyg, dh; jiang su, lian yun gang, dong hai; 江苏，连云港，东海',
    weaid: 621
  },
  {
    display_text: '江苏，连云港，赣榆',
    search_text: 'js, lyg, gy; jiang su, lian yun gang, gan yu; 江苏，连云港，赣榆',
    weaid: 836
  },
  {
    display_text: '江苏，连云港，灌云',
    search_text: 'js, lyg, gy; jiang su, lian yun gang, guan yun; 江苏，连云港，灌云',
    weaid: 837
  },
  {
    display_text: '江苏，连云港，灌南',
    search_text: 'js, lyg, gn; jiang su, lian yun gang, guan nan; 江苏，连云港，灌南',
    weaid: 804
  },
  {
    display_text: '江苏，常州，城区',
    search_text: 'js, cz, cq; jiang su, chang zhou, cheng qu; 江苏，常州，城区',
    weaid: 408
  },
  {
    display_text: '江苏，常州，溧阳',
    search_text: 'js, cz, ly; jiang su, chang zhou, li yang; 江苏，常州，溧阳',
    weaid: 1253
  },
  {
    display_text: '江苏，常州，金坛',
    search_text: 'js, cz, jt; jiang su, chang zhou, jin tan; 江苏，常州，金坛',
    weaid: 1036
  },
  {
    display_text: '江苏，常州，武进',
    search_text: 'js, cz, wj; jiang su, chang zhou, wu jin; 江苏，常州，武进',
    weaid: 2474
  },
  {
    display_text: '江苏，泰州，城区',
    search_text: 'js, tz, cq; jiang su, tai zhou, cheng qu; 江苏，泰州，城区',
    weaid: 409
  },
  {
    display_text: '江苏，泰州，兴化',
    search_text: 'js, tz, xh; jiang su, tai zhou, xing hua; 江苏，泰州，兴化',
    weaid: 1866
  },
  {
    display_text: '江苏，泰州，泰兴',
    search_text: 'js, tz, tx; jiang su, tai zhou, tai xing; 江苏，泰州，泰兴',
    weaid: 1730
  },
  {
    display_text: '江苏，泰州，姜堰',
    search_text: 'js, tz, jy; jiang su, tai zhou, jiang yan; 江苏，泰州，姜堰',
    weaid: 1059
  },
  {
    display_text: '江苏，泰州，靖江',
    search_text: 'js, tz, jj; jiang su, tai zhou, jing jiang; 江苏，泰州，靖江',
    weaid: 1001
  },
  {
    display_text: '江苏，宿迁，城区',
    search_text: 'js, sq, cq; jiang su, su qian, cheng qu; 江苏，宿迁，城区',
    weaid: 404
  },
  {
    display_text: '江苏，宿迁，沭阳',
    search_text: 'js, sq, sy; jiang su, su qian, shu yang; 江苏，宿迁，沭阳',
    weaid: 2475
  },
  {
    display_text: '江苏，宿迁，泗阳',
    search_text: 'js, sq, sy; jiang su, su qian, si yang; 江苏，宿迁，泗阳',
    weaid: 1648
  },
  {
    display_text: '江苏，宿迁，泗洪',
    search_text: 'js, sq, sh; jiang su, su qian, si hong; 江苏，宿迁，泗洪',
    weaid: 1583
  },
  {
    display_text: '江苏，宿迁，宿豫',
    search_text: 'js, sq, sy; jiang su, su qian, su yu; 江苏，宿迁，宿豫',
    weaid: 2476
  },
  {
    display_text: '江西，南昌，城区',
    search_text: 'jx, nc, cq; jiang xi, nan chang, cheng qu; 江西，南昌，城区',
    weaid: 237
  },
  {
    display_text: '江西，南昌，新建',
    search_text: 'jx, nc, xj; jiang xi, nan chang, xin jian; 江西，南昌，新建',
    weaid: 1875
  },
  {
    display_text: '江西，南昌，南昌县',
    search_text: 'jx, nc, ncx; jiang xi, nan chang, nan chang xian; 江西，南昌，南昌县',
    weaid: 2523
  },
  {
    display_text: '江西，南昌，安义',
    search_text: 'jx, nc, ay; jiang xi, nan chang, an yi; 江西，南昌，安义',
    weaid: 475
  },
  {
    display_text: '江西，南昌，进贤',
    search_text: 'jx, nc, jx; jiang xi, nan chang, jin xian; 江西，南昌，进贤',
    weaid: 1049
  },
  {
    display_text: '江西，九江，城区',
    search_text: 'jx, jj, cq; jiang xi, jiu jiang, cheng qu; 江西，九江，城区',
    weaid: 246
  },
  {
    display_text: '江西，九江，瑞昌',
    search_text: 'jx, jj, rc; jiang xi, jiu jiang, rui chang; 江西，九江，瑞昌',
    weaid: 1528
  },
  {
    display_text: '江西，九江，庐山',
    search_text: 'jx, jj, ls; jiang xi, jiu jiang, lu shan; 江西，九江，庐山',
    weaid: 1207
  },
  {
    display_text: '江西，九江，武宁',
    search_text: 'jx, jj, wn; jiang xi, jiu jiang, wu ning; 江西，九江，武宁',
    weaid: 1786
  },
  {
    display_text: '江西，九江，德安',
    search_text: 'jx, jj, da; jiang xi, jiu jiang, de an; 江西，九江，德安',
    weaid: 598
  },
  {
    display_text: '江西，九江，永修',
    search_text: 'jx, jj, yx; jiang xi, jiu jiang, yong xiu; 江西，九江，永修',
    weaid: 2069
  },
  {
    display_text: '江西，九江，湖口',
    search_text: 'jx, jj, hk; jiang xi, jiu jiang, hu kou; 江西，九江，湖口',
    weaid: 885
  },
  {
    display_text: '江西，九江，彭泽',
    search_text: 'jx, jj, pz; jiang xi, jiu jiang, peng ze; 江西，九江，彭泽',
    weaid: 1460
  },
  {
    display_text: '江西，九江，都昌',
    search_text: 'jx, jj, dc; jiang xi, jiu jiang, dou chang; 江西，九江，都昌',
    weaid: 606
  },
  {
    display_text: '江西，九江，修水',
    search_text: 'jx, jj, xs; jiang xi, jiu jiang, xiu shui; 江西，九江，修水',
    weaid: 1902
  },
  {
    display_text: '江西，九江，濂溪',
    search_text: 'jx, jj, lx; jiang xi, jiu jiang, lian xi; 江西，九江，濂溪',
    weaid: 1948
  },
  {
    display_text: '江西，上饶，城区',
    search_text: 'jx, sr, cq; jiang xi, shang rao, cheng qu; 江西，上饶，城区',
    weaid: 238
  },
  {
    display_text: '江西，上饶，鄱阳',
    search_text: 'jx, sr, py; jiang xi, shang rao, po yang; 江西，上饶，鄱阳',
    weaid: 2524
  },
  {
    display_text: '江西，上饶，婺源',
    search_text: 'jx, sr, wy; jiang xi, shang rao, wu yuan; 江西，上饶，婺源',
    weaid: 1822
  },
  {
    display_text: '江西，上饶，余干',
    search_text: 'jx, sr, yg; jiang xi, shang rao, yu gan; 江西，上饶，余干',
    weaid: 1982
  },
  {
    display_text: '江西，上饶，万年',
    search_text: 'jx, sr, wn; jiang xi, shang rao, wan nian; 江西，上饶，万年',
    weaid: 1787
  },
  {
    display_text: '江西，上饶，德兴',
    search_text: 'jx, sr, dx; jiang xi, shang rao, de xing; 江西，上饶，德兴',
    weaid: 672
  },
  {
    display_text: '江西，上饶，上饶县',
    search_text: 'jx, sr, srx; jiang xi, shang rao, shang rao xian; 江西，上饶，上饶县',
    weaid: 2525
  },
  {
    display_text: '江西，上饶，弋阳',
    search_text: 'jx, sr, yy; jiang xi, shang rao, yi yang; 江西，上饶，弋阳',
    weaid: 2081
  },
  {
    display_text: '江西，上饶，横峰',
    search_text: 'jx, sr, hf; jiang xi, shang rao, heng feng; 江西，上饶，横峰',
    weaid: 869
  },
  {
    display_text: '江西，上饶，铅山',
    search_text: 'jx, sr, ys; jiang xi, shang rao, yan shan; 江西，上饶，铅山',
    weaid: 1491
  },
  {
    display_text: '江西，上饶，玉山',
    search_text: 'jx, sr, ys; jiang xi, shang rao, yu shan; 江西，上饶，玉山',
    weaid: 2040
  },
  {
    display_text: '江西，上饶，广丰',
    search_text: 'jx, sr, gf; jiang xi, shang rao, guang feng; 江西，上饶，广丰',
    weaid: 785
  },
  {
    display_text: '江西，抚州，城区',
    search_text: 'jx, fz, cq; jiang xi, fu zhou, cheng qu; 江西，抚州，城区',
    weaid: 239
  },
  {
    display_text: '江西，抚州，广昌',
    search_text: 'jx, fz, gc; jiang xi, fu zhou, guang chang; 江西，抚州，广昌',
    weaid: 780
  },
  {
    display_text: '江西，抚州，乐安',
    search_text: 'jx, fz, la; jiang xi, fu zhou, le an; 江西，抚州，乐安',
    weaid: 2526
  },
  {
    display_text: '江西，抚州，崇仁',
    search_text: 'jx, fz, cr; jiang xi, fu zhou, chong ren; 江西，抚州，崇仁',
    weaid: 567
  },
  {
    display_text: '江西，抚州，金溪',
    search_text: 'jx, fz, jx; jiang xi, fu zhou, jin xi; 江西，抚州，金溪',
    weaid: 1050
  },
  {
    display_text: '江西，抚州，资溪',
    search_text: 'jx, fz, zx; jiang xi, fu zhou, zi xi; 江西，抚州，资溪',
    weaid: 2158
  },
  {
    display_text: '江西，抚州，宜黄',
    search_text: 'jx, fz, yh; jiang xi, fu zhou, yi huang; 江西，抚州，宜黄',
    weaid: 1989
  },
  {
    display_text: '江西，抚州，南城',
    search_text: 'jx, fz, nc; jiang xi, fu zhou, nan cheng; 江西，抚州，南城',
    weaid: 1355
  },
  {
    display_text: '江西，抚州，南丰',
    search_text: 'jx, fz, nf; jiang xi, fu zhou, nan feng; 江西，抚州，南丰',
    weaid: 1358
  },
  {
    display_text: '江西，抚州，黎川',
    search_text: 'jx, fz, lc; jiang xi, fu zhou, li chuan; 江西，抚州，黎川',
    weaid: 1120
  },
  {
    display_text: '江西，抚州，东乡',
    search_text: 'jx, fz, dx; jiang xi, fu zhou, dong xiang; 江西，抚州，东乡',
    weaid: 673
  },
  {
    display_text: '江西，宜春，城区',
    search_text: 'jx, yc, cq; jiang xi, yi chun, cheng qu; 江西，宜春，城区',
    weaid: 240
  },
  {
    display_text: '江西，宜春，铜鼓',
    search_text: 'jx, yc, tg; jiang xi, yi chun, tong gu; 江西，宜春，铜鼓',
    weaid: 1684
  },
  {
    display_text: '江西，宜春，宜丰',
    search_text: 'jx, yc, yf; jiang xi, yi chun, yi feng; 江西，宜春，宜丰',
    weaid: 1979
  },
  {
    display_text: '江西，宜春，万载',
    search_text: 'jx, yc, wz; jiang xi, yi chun, wan zai; 江西，宜春，万载',
    weaid: 1827
  },
  {
    display_text: '江西，宜春，上高',
    search_text: 'jx, yc, sg; jiang xi, yi chun, shang gao; 江西，宜春，上高',
    weaid: 1577
  },
  {
    display_text: '江西，宜春，靖安',
    search_text: 'jx, yc, ja; jiang xi, yi chun, jing an; 江西，宜春，靖安',
    weaid: 973
  },
  {
    display_text: '江西，宜春，奉新',
    search_text: 'jx, yc, fx; jiang xi, yi chun, feng xin; 江西，宜春，奉新',
    weaid: 751
  },
  {
    display_text: '江西，宜春，高安',
    search_text: 'jx, yc, ga; jiang xi, yi chun, gao an; 江西，宜春，高安',
    weaid: 770
  },
  {
    display_text: '江西，宜春，樟树',
    search_text: 'jx, yc, zs; jiang xi, yi chun, zhang shu; 江西，宜春，樟树',
    weaid: 2150
  },
  {
    display_text: '江西，宜春，丰城',
    search_text: 'jx, yc, fc; jiang xi, yi chun, feng cheng; 江西，宜春，丰城',
    weaid: 706
  },
  {
    display_text: '江西，吉安，城区',
    search_text: 'jx, ja, cq; jiang xi, ji an, cheng qu; 江西，吉安，城区',
    weaid: 247
  },
  {
    display_text: '江西，吉安，吉安县',
    search_text: 'jx, ja, jax; jiang xi, ji an, ji an xian; 江西，吉安，吉安县',
    weaid: 2527
  },
  {
    display_text: '江西，吉安，吉水',
    search_text: 'jx, ja, js; jiang xi, ji an, ji shui; 江西，吉安，吉水',
    weaid: 1029
  },
  {
    display_text: '江西，吉安，新干',
    search_text: 'jx, ja, xg; jiang xi, ji an, xin gan; 江西，吉安，新干',
    weaid: 1855
  },
  {
    display_text: '江西，吉安，峡江',
    search_text: 'jx, ja, xj; jiang xi, ji an, xia jiang; 江西，吉安，峡江',
    weaid: 1876
  },
  {
    display_text: '江西，吉安，永丰',
    search_text: 'jx, ja, yf; jiang xi, ji an, yong feng; 江西，吉安，永丰',
    weaid: 1980
  },
  {
    display_text: '江西，吉安，永新',
    search_text: 'jx, ja, yx; jiang xi, ji an, yong xin; 江西，吉安，永新',
    weaid: 2068
  },
  {
    display_text: '江西，吉安，井冈山',
    search_text: 'jx, ja, jgs; jiang xi, ji an, jing gang shan; 江西，吉安，井冈山',
    weaid: 990
  },
  {
    display_text: '江西，吉安，万安',
    search_text: 'jx, ja, wa; jiang xi, ji an, wan an; 江西，吉安，万安',
    weaid: 1746
  },
  {
    display_text: '江西，吉安，遂川',
    search_text: 'jx, ja, sc; jiang xi, ji an, sui chuan; 江西，吉安，遂川',
    weaid: 1563
  },
  {
    display_text: '江西，吉安，泰和',
    search_text: 'jx, ja, th; jiang xi, ji an, tai he; 江西，吉安，泰和',
    weaid: 1691
  },
  {
    display_text: '江西，吉安，安福',
    search_text: 'jx, ja, af; jiang xi, ji an, an fu; 江西，吉安，安福',
    weaid: 453
  },
  {
    display_text: '江西，赣州，城区',
    search_text: 'jx, gz, cq; jiang xi, gan zhou, cheng qu; 江西，赣州，城区',
    weaid: 242
  },
  {
    display_text: '江西，赣州，崇义',
    search_text: 'jx, gz, cy; jiang xi, gan zhou, chong yi; 江西，赣州，崇义',
    weaid: 592
  },
  {
    display_text: '江西，赣州，上犹',
    search_text: 'jx, gz, sy; jiang xi, gan zhou, shang you; 江西，赣州，上犹',
    weaid: 1655
  },
  {
    display_text: '江西，赣州，南康',
    search_text: 'jx, gz, nk; jiang xi, gan zhou, nan kang; 江西，赣州，南康',
    weaid: 1373
  },
  {
    display_text: '江西，赣州，大余',
    search_text: 'jx, gz, dy; jiang xi, gan zhou, da yu; 江西，赣州，大余',
    weaid: 685
  },
  {
    display_text: '江西，赣州，信丰',
    search_text: 'jx, gz, xf; jiang xi, gan zhou, xin feng; 江西，赣州，信丰',
    weaid: 1850
  },
  {
    display_text: '江西，赣州，宁都',
    search_text: 'jx, gz, nd; jiang xi, gan zhou, ning dou; 江西，赣州，宁都',
    weaid: 1357
  },
  {
    display_text: '江西，赣州，石城',
    search_text: 'jx, gz, sc; jiang xi, gan zhou, shi cheng; 江西，赣州，石城',
    weaid: 1564
  },
  {
    display_text: '江西，赣州，瑞金',
    search_text: 'jx, gz, rj; jiang xi, gan zhou, rui jin; 江西，赣州，瑞金',
    weaid: 1534
  },
  {
    display_text: '江西，赣州，于都',
    search_text: 'jx, gz, yd; jiang xi, gan zhou, yu dou; 江西，赣州，于都',
    weaid: 1978
  },
  {
    display_text: '江西，赣州，会昌',
    search_text: 'jx, gz, hc; jiang xi, gan zhou, hui chang; 江西，赣州，会昌',
    weaid: 857
  },
  {
    display_text: '江西，赣州，安远',
    search_text: 'jx, gz, ay; jiang xi, gan zhou, an yuan; 江西，赣州，安远',
    weaid: 476
  },
  {
    display_text: '江西，赣州，全南',
    search_text: 'jx, gz, qn; jiang xi, gan zhou, quan nan; 江西，赣州，全南',
    weaid: 1487
  },
  {
    display_text: '江西，赣州，龙南',
    search_text: 'jx, gz, ln; jiang xi, gan zhou, long nan; 江西，赣州，龙南',
    weaid: 1181
  },
  {
    display_text: '江西，赣州，定南',
    search_text: 'jx, gz, dn; jiang xi, gan zhou, ding nan; 江西，赣州，定南',
    weaid: 641
  },
  {
    display_text: '江西，赣州，寻乌',
    search_text: 'jx, gz, xw; jiang xi, gan zhou, xun wu; 江西，赣州，寻乌',
    weaid: 1915
  },
  {
    display_text: '江西，赣州，兴国',
    search_text: 'jx, gz, xg; jiang xi, gan zhou, xing guo; 江西，赣州，兴国',
    weaid: 1856
  },
  {
    display_text: '江西，赣州，赣县',
    search_text: 'jx, gz, gx; jiang xi, gan zhou, gan xian; 江西，赣州，赣县',
    weaid: 2528
  },
  {
    display_text: '江西，景德镇，城区',
    search_text: 'jx, jdz, cq; jiang xi, jing de zhen, cheng qu; 江西，景德镇，城区',
    weaid: 243
  },
  {
    display_text: '江西，景德镇，乐平',
    search_text: 'jx, jdz, lp; jiang xi, jing de zhen, le ping; 江西，景德镇，乐平',
    weaid: 1186
  },
  {
    display_text: '江西，景德镇，浮梁',
    search_text: 'jx, jdz, fl; jiang xi, jing de zhen, fu liang; 江西，景德镇，浮梁',
    weaid: 2529
  },
  {
    display_text: '江西，萍乡，城区',
    search_text: 'jx, px, cq; jiang xi, ping xiang, cheng qu; 江西，萍乡，城区',
    weaid: 244
  },
  {
    display_text: '江西，萍乡，莲花',
    search_text: 'jx, px, lh; jiang xi, ping xiang, lian hua; 江西，萍乡，莲花',
    weaid: 1155
  },
  {
    display_text: '江西，萍乡，上栗',
    search_text: 'jx, px, sl; jiang xi, ping xiang, shang li; 江西，萍乡，上栗',
    weaid: 2530
  },
  {
    display_text: '江西，萍乡，安源',
    search_text: 'jx, px, ay; jiang xi, ping xiang, an yuan; 江西，萍乡，安源',
    weaid: 2531
  },
  {
    display_text: '江西，萍乡，芦溪',
    search_text: 'jx, px, lx; jiang xi, ping xiang, lu xi; 江西，萍乡，芦溪',
    weaid: 2532
  },
  {
    display_text: '江西，萍乡，湘东',
    search_text: 'jx, px, xd; jiang xi, ping xiang, xiang dong; 江西，萍乡，湘东',
    weaid: 2533
  },
  {
    display_text: '江西，新余，城区',
    search_text: 'jx, xy, cq; jiang xi, xin yu, cheng qu; 江西，新余，城区',
    weaid: 245
  },
  {
    display_text: '江西，新余，分宜',
    search_text: 'jx, xy, fy; jiang xi, xin yu, fen yi; 江西，新余，分宜',
    weaid: 760
  },
  {
    display_text: '江西，鹰潭，城区',
    search_text: 'jx, yt, cq; jiang xi, ying tan, cheng qu; 江西，鹰潭，城区',
    weaid: 241
  },
  {
    display_text: '江西，鹰潭，余江',
    search_text: 'jx, yt, yj; jiang xi, ying tan, yu jiang; 江西，鹰潭，余江',
    weaid: 1992
  },
  {
    display_text: '江西，鹰潭，贵溪',
    search_text: 'jx, yt, gx; jiang xi, ying tan, gui xi; 江西，鹰潭，贵溪',
    weaid: 822
  },
  {
    display_text: '辽宁，沈阳，城区',
    search_text: 'ln, sy, cq; liao ning, shen yang, cheng qu; 辽宁，沈阳，城区',
    weaid: 434
  },
  {
    display_text: '辽宁，沈阳，辽中',
    search_text: 'ln, sy, lz; liao ning, shen yang, liao zhong; 辽宁，沈阳，辽中',
    weaid: 1271
  },
  {
    display_text: '辽宁，沈阳，康平',
    search_text: 'ln, sy, kp; liao ning, shen yang, kang ping; 辽宁，沈阳，康平',
    weaid: 1096
  },
  {
    display_text: '辽宁，沈阳，法库',
    search_text: 'ln, sy, fk; liao ning, shen yang, fa ku; 辽宁，沈阳，法库',
    weaid: 723
  },
  {
    display_text: '辽宁，沈阳，新民',
    search_text: 'ln, sy, xm; liao ning, shen yang, xin min; 辽宁，沈阳，新民',
    weaid: 1887
  },
  {
    display_text: '辽宁，大连，城区',
    search_text: 'ln, dl, cq; liao ning, da lian, cheng qu; 辽宁，大连，城区',
    weaid: 446
  },
  {
    display_text: '辽宁，大连，瓦房店',
    search_text: 'ln, dl, wfd; liao ning, da lian, wa fang dian; 辽宁，大连，瓦房店',
    weaid: 1763
  },
  {
    display_text: '辽宁，大连，金州',
    search_text: 'ln, dl, jz; liao ning, da lian, jin zhou; 辽宁，大连，金州',
    weaid: 2223
  },
  {
    display_text: '辽宁，大连，普兰店',
    search_text: 'ln, dl, pld; liao ning, da lian, pu lan dian; 辽宁，大连，普兰店',
    weaid: 1423
  },
  {
    display_text: '辽宁，大连，旅顺',
    search_text: 'ln, dl, ls; liao ning, da lian, lv shun; 辽宁，大连，旅顺',
    weaid: 2224
  },
  {
    display_text: '辽宁，大连，长海',
    search_text: 'ln, dl, zh; liao ning, da lian, zhang hai; 辽宁，大连，长海',
    weaid: 541
  },
  {
    display_text: '辽宁，大连，庄河',
    search_text: 'ln, dl, zh; liao ning, da lian, zhuang he; 辽宁，大连，庄河',
    weaid: 2114
  },
  {
    display_text: '辽宁，鞍山，城区',
    search_text: 'ln, as, cq; liao ning, an shan, cheng qu; 辽宁，鞍山，城区',
    weaid: 435
  },
  {
    display_text: '辽宁，鞍山，台安',
    search_text: 'ln, as, ta; liao ning, an shan, tai an; 辽宁，鞍山，台安',
    weaid: 1667
  },
  {
    display_text: '辽宁，鞍山，岫岩',
    search_text: 'ln, as, xy; liao ning, an shan, xiu yan; 辽宁，鞍山，岫岩',
    weaid: 2079
  },
  {
    display_text: '辽宁，鞍山，海城',
    search_text: 'ln, as, hc; liao ning, an shan, hai cheng; 辽宁，鞍山，海城',
    weaid: 856
  },
  {
    display_text: '辽宁，抚顺，城区',
    search_text: 'ln, fs, cq; liao ning, fu shun, cheng qu; 辽宁，抚顺，城区',
    weaid: 436
  },
  {
    display_text: '辽宁，抚顺，新宾',
    search_text: 'ln, fs, xb; liao ning, fu shun, xin bin; 辽宁，抚顺，新宾',
    weaid: 2225
  },
  {
    display_text: '辽宁，抚顺，清原',
    search_text: 'ln, fs, qy; liao ning, fu shun, qing yuan; 辽宁，抚顺，清原',
    weaid: 1516
  },
  {
    display_text: '辽宁，本溪，城区',
    search_text: 'ln, bx, cq; liao ning, ben xi, cheng qu; 辽宁，本溪，城区',
    weaid: 437
  },
  {
    display_text: '辽宁，本溪，本溪县',
    search_text: 'ln, bx, bxx; liao ning, ben xi, ben xi xian; 辽宁，本溪，本溪县',
    weaid: 518
  },
  {
    display_text: '辽宁，本溪，桓仁',
    search_text: 'ln, bx, hr; liao ning, ben xi, huan ren; 辽宁，本溪，桓仁',
    weaid: 922
  },
  {
    display_text: '辽宁，丹东，城区',
    search_text: 'ln, dd, cq; liao ning, dan dong, cheng qu; 辽宁，丹东，城区',
    weaid: 438
  },
  {
    display_text: '辽宁，丹东，凤城',
    search_text: 'ln, dd, fc; liao ning, dan dong, feng cheng; 辽宁，丹东，凤城',
    weaid: 703
  },
  {
    display_text: '辽宁，丹东，宽甸',
    search_text: 'ln, dd, kd; liao ning, dan dong, kuan dian; 辽宁，丹东，宽甸',
    weaid: 1084
  },
  {
    display_text: '辽宁，丹东，东港',
    search_text: 'ln, dd, dg; liao ning, dan dong, dong gang; 辽宁，丹东，东港',
    weaid: 618
  },
  {
    display_text: '辽宁，锦州，城区',
    search_text: 'ln, jz, cq; liao ning, jin zhou, cheng qu; 辽宁，锦州，城区',
    weaid: 447
  },
  {
    display_text: '辽宁，锦州，凌海',
    search_text: 'ln, jz, lh; liao ning, jin zhou, ling hai; 辽宁，锦州，凌海',
    weaid: 1147
  },
  {
    display_text: '辽宁，锦州，义县',
    search_text: 'ln, jz, yx; liao ning, jin zhou, yi xian; 辽宁，锦州，义县',
    weaid: 2059
  },
  {
    display_text: '辽宁，锦州，黑山',
    search_text: 'ln, jz, hs; liao ning, jin zhou, hei shan; 辽宁，锦州，黑山',
    weaid: 925
  },
  {
    display_text: '辽宁，锦州，北镇',
    search_text: 'ln, jz, bz; liao ning, jin zhou, bei zhen; 辽宁，锦州，北镇',
    weaid: 2227
  },
  {
    display_text: '辽宁，营口，城区',
    search_text: 'ln, yk, cq; liao ning, ying kou, cheng qu; 辽宁，营口，城区',
    weaid: 440
  },
  {
    display_text: '辽宁，营口，大石桥',
    search_text: 'ln, yk, dsq; liao ning, ying kou, da shi qiao; 辽宁，营口，大石桥',
    weaid: 658
  },
  {
    display_text: '辽宁，营口，盖州',
    search_text: 'ln, yk, gz; liao ning, ying kou, gai zhou; 辽宁，营口，盖州',
    weaid: 840
  },
  {
    display_text: '辽宁，阜新，城区',
    search_text: 'ln, fx, cq; liao ning, fu xin, cheng qu; 辽宁，阜新，城区',
    weaid: 441
  },
  {
    display_text: '辽宁，阜新，彰武',
    search_text: 'ln, fx, zw; liao ning, fu xin, zhang wu; 辽宁，阜新，彰武',
    weaid: 2156
  },
  {
    display_text: '辽宁，辽阳，城区',
    search_text: 'ln, ly, cq; liao ning, liao yang, cheng qu; 辽宁，辽阳，城区',
    weaid: 442
  },
  {
    display_text: '辽宁，辽阳，辽阳县',
    search_text: 'ln, ly, lyx; liao ning, liao yang, liao yang xian; 辽宁，辽阳，辽阳县',
    weaid: 2228
  },
  {
    display_text: '辽宁，辽阳，灯塔',
    search_text: 'ln, ly, dt; liao ning, liao yang, deng ta; 辽宁，辽阳，灯塔',
    weaid: 659
  },
  {
    display_text: '辽宁，辽阳，弓长岭',
    search_text: 'ln, ly, gzl; liao ning, liao yang, gong zhang ling; 辽宁，辽阳，弓长岭',
    weaid: 2229
  },
  {
    display_text: '辽宁，铁岭，城区',
    search_text: 'ln, tl, cq; liao ning, tie ling, cheng qu; 辽宁，铁岭，城区',
    weaid: 443
  },
  {
    display_text: '辽宁，铁岭，开原',
    search_text: 'ln, tl, ky; liao ning, tie ling, kai yuan; 辽宁，铁岭，开原',
    weaid: 1103
  },
  {
    display_text: '辽宁，铁岭，昌图',
    search_text: 'ln, tl, ct; liao ning, tie ling, chang tu; 辽宁，铁岭，昌图',
    weaid: 576
  },
  {
    display_text: '辽宁，铁岭，西丰',
    search_text: 'ln, tl, xf; liao ning, tie ling, xi feng; 辽宁，铁岭，西丰',
    weaid: 1848
  },
  {
    display_text: '辽宁，铁岭，调兵山',
    search_text: 'ln, tl, dbs; liao ning, tie ling, diao bing shan; 辽宁，铁岭，调兵山',
    weaid: 2230
  },
  {
    display_text: '辽宁，朝阳，城区',
    search_text: 'ln, zy, cq; liao ning, zhao yang, cheng qu; 辽宁，朝阳，城区',
    weaid: 444
  },
  {
    display_text: '辽宁，朝阳，凌源',
    search_text: 'ln, zy, ly; liao ning, zhao yang, ling yuan; 辽宁，朝阳，凌源',
    weaid: 1264
  },
  {
    display_text: '辽宁，朝阳，喀左',
    search_text: 'ln, zy, kz; liao ning, zhao yang, ka zuo; 辽宁，朝阳，喀左',
    weaid: 2231
  },
  {
    display_text: '辽宁，朝阳，北票',
    search_text: 'ln, zy, bp; liao ning, zhao yang, bei piao; 辽宁，朝阳，北票',
    weaid: 508
  },
  {
    display_text: '辽宁，朝阳，建平县',
    search_text: 'ln, zy, jpx; liao ning, zhao yang, jian ping xian; 辽宁，朝阳，建平县',
    weaid: 2232
  },
  {
    display_text: '辽宁，盘锦，城区',
    search_text: 'ln, pj, cq; liao ning, pan jin, cheng qu; 辽宁，盘锦，城区',
    weaid: 445
  },
  {
    display_text: '辽宁，盘锦，大洼',
    search_text: 'ln, pj, dw; liao ning, pan jin, da wa; 辽宁，盘锦，大洼',
    weaid: 666
  },
  {
    display_text: '辽宁，盘锦，盘山',
    search_text: 'ln, pj, ps; liao ning, pan jin, pan shan; 辽宁，盘锦，盘山',
    weaid: 1433
  },
  {
    display_text: '辽宁，葫芦岛，城区',
    search_text: 'ln, hld, cq; liao ning, hu lu dao, cheng qu; 辽宁，葫芦岛，城区',
    weaid: 439
  },
  {
    display_text: '辽宁，葫芦岛，建昌',
    search_text: 'ln, hld, jc; liao ning, hu lu dao, jian chang; 辽宁，葫芦岛，建昌',
    weaid: 977
  },
  {
    display_text: '辽宁，葫芦岛，绥中',
    search_text: 'ln, hld, sz; liao ning, hu lu dao, sui zhong; 辽宁，葫芦岛，绥中',
    weaid: 1662
  },
  {
    display_text: '辽宁，葫芦岛，兴城',
    search_text: 'ln, hld, xc; liao ning, hu lu dao, xing cheng; 辽宁，葫芦岛，兴城',
    weaid: 1835
  },
  {
    display_text: '马来西亚，吉隆坡（Kuala Lumpur）',
    search_text: 'mlxy, jlp; ma lai xi ya, ji long po; 马来西亚，吉隆坡（Kuala Lumpur）',
    weaid: 2195
  },
  {
    display_text: '马来西亚，吉隆坡（Kuala Lumpur）',
    search_text: 'mlxy, jlp; ma lai xi ya, ji long po; 马来西亚，吉隆坡（Kuala Lumpur）',
    weaid: 2681
  },
  {
    display_text: '马来西亚，古晋（Kuching）',
    search_text: 'mlxy, gj; ma lai xi ya, gu jin; 马来西亚，古晋（Kuching）',
    weaid: 2678
  },
  {
    display_text: '马来西亚，古达（Kudat）',
    search_text: 'mlxy, gd; ma lai xi ya, gu da; 马来西亚，古达（Kudat）',
    weaid: 2680
  },
  {
    display_text: '马来西亚，斗湖（Tawau）',
    search_text: 'mlxy, dh; ma lai xi ya, dou hu; 马来西亚，斗湖（Tawau）',
    weaid: 2676
  },
  {
    display_text: "马来西亚，吉隆坡国际机场（Kualalumpur Int' LAirpor）",
    search_text: "mlxy, jlpgjjc; ma lai xi ya, ji long po guo ji ji chang; 马来西亚，吉隆坡国际机场（Kualalumpur Int' LAirpor）",
    weaid: 2683
  },
  {
    display_text: '马来西亚，淡马鲁（Temerloh）',
    search_text: 'mlxy, dml; ma lai xi ya, dan ma lu; 马来西亚，淡马鲁（Temerloh）',
    weaid: 2677
  },
  {
    display_text: '马来西亚，关丹（Kuantan）',
    search_text: 'mlxy, gd; ma lai xi ya, guan dan; 马来西亚，关丹（Kuantan）',
    weaid: 2674
  },
  {
    display_text: '马来西亚，丰盛港（Mersing）',
    search_text: 'mlxy, fsg; ma lai xi ya, feng sheng gang; 马来西亚，丰盛港（Mersing）',
    weaid: 2685
  },
  {
    display_text: '马来西亚，巴特沃斯（Butterworth）',
    search_text: 'mlxy, btws; ma lai xi ya, ba te wo si; 马来西亚，巴特沃斯（Butterworth）',
    weaid: 2679
  },
  {
    display_text: '马来西亚，哥打巴鲁（Kotabharu）',
    search_text: 'mlxy, gdbl; ma lai xi ya, ge da ba lu; 马来西亚，哥打巴鲁（Kotabharu）',
    weaid: 2675
  },
  {
    display_text: '马来西亚，瓜拉吉赖（Kualakrai）',
    search_text: 'mlxy, gljl; ma lai xi ya, gua la ji lai; 马来西亚，瓜拉吉赖（Kualakrai）',
    weaid: 2684
  },
  {
    display_text: '马来西亚，瓜拉登嘉楼（Kualatrengganu）',
    search_text: 'mlxy, gldjl; ma lai xi ya, gua la deng jia lou; 马来西亚，瓜拉登嘉楼（Kualatrengganu）',
    weaid: 2682
  },
  {
    display_text: '马来西亚，八打灵（Petalingjaya）',
    search_text: 'mlxy, bdl; ma lai xi ya, ba da ling; 马来西亚，八打灵（Petalingjaya）',
    weaid: 2673
  },
  {
    display_text: '美国，洛杉矶（Los Angeles）',
    search_text: 'mg, lsj; mei guo, luo shan ji; 美国，洛杉矶（Los Angeles）',
    weaid: 2194
  },
  {
    display_text: '美国，波士顿（Boston）',
    search_text: 'mg, bsd; mei guo, bo shi dun; 美国，波士顿（Boston）',
    weaid: 2203
  },
  {
    display_text: '美国，芝加哥（Chicago）',
    search_text: 'mg, zjg; mei guo, zhi jia ge; 美国，芝加哥（Chicago）',
    weaid: 2197
  },
  {
    display_text: '美国，纽约（New York）',
    search_text: 'mg, ny; mei guo, niu yue; 美国，纽约（New York）',
    weaid: 2189
  },
  {
    display_text: '美国，拉斯维加斯（Lasvegas）',
    search_text: 'mg, lswjs; mei guo, la si wei jia si; 美国，拉斯维加斯（Lasvegas）',
    weaid: 2204
  },
  {
    display_text: '美国，华盛顿（Washington D. C）',
    search_text: 'mg, hsd; mei guo, hua sheng dun; 美国，华盛顿（Washington D. C）',
    weaid: 2199
  },
  {
    display_text: '美国，旧金山（Sanfrancisco）',
    search_text: 'mg, jjs; mei guo, jiu jin shan; 美国，旧金山（Sanfrancisco）',
    weaid: 2208
  },
  {
    display_text: '内蒙古，呼和浩特，城区',
    search_text: 'nmg, hhht, cq; nei meng gu, hu he hao te, cheng qu; 内蒙古，呼和浩特，城区',
    weaid: 225
  },
  {
    display_text: '内蒙古，呼和浩特，土左旗',
    search_text: 'nmg, hhht, tzq; nei meng gu, hu he hao te, tu zuo qi; 内蒙古，呼和浩特，土左旗',
    weaid: 1713
  },
  {
    display_text: '内蒙古，呼和浩特，托县',
    search_text: 'nmg, hhht, tx; nei meng gu, hu he hao te, tuo xian; 内蒙古，呼和浩特，托县',
    weaid: 1702
  },
  {
    display_text: '内蒙古，呼和浩特，和林',
    search_text: 'nmg, hhht, hl; nei meng gu, hu he hao te, he lin; 内蒙古，呼和浩特，和林',
    weaid: 892
  },
  {
    display_text: '内蒙古，呼和浩特，清水河',
    search_text: 'nmg, hhht, qsh; nei meng gu, hu he hao te, qing shui he; 内蒙古，呼和浩特，清水河',
    weaid: 2233
  },
  {
    display_text: '内蒙古，呼和浩特，赛罕',
    search_text: 'nmg, hhht, sh; nei meng gu, hu he hao te, sai han; 内蒙古，呼和浩特，赛罕',
    weaid: 2234
  },
  {
    display_text: '内蒙古，呼和浩特，武川',
    search_text: 'nmg, hhht, wc; nei meng gu, hu he hao te, wu chuan; 内蒙古，呼和浩特，武川',
    weaid: 1753
  },
  {
    display_text: '内蒙古，包头，城区',
    search_text: 'nmg, bt, cq; nei meng gu, bao tou, cheng qu; 内蒙古，包头，城区',
    weaid: 235
  },
  {
    display_text: '内蒙古，包头，白云鄂博',
    search_text: 'nmg, bt, byeb; nei meng gu, bao tou, bai yun e bo; 内蒙古，包头，白云鄂博',
    weaid: 521
  },
  {
    display_text: '内蒙古，包头，土右旗',
    search_text: 'nmg, bt, tyq; nei meng gu, bao tou, tu you qi; 内蒙古，包头，土右旗',
    weaid: 1714
  },
  {
    display_text: '内蒙古，包头，固阳',
    search_text: 'nmg, bt, gy; nei meng gu, bao tou, gu yang; 内蒙古，包头，固阳',
    weaid: 827
  },
  {
    display_text: '内蒙古，包头，达茂旗',
    search_text: 'nmg, bt, dmq; nei meng gu, bao tou, da mao qi; 内蒙古，包头，达茂旗',
    weaid: 2236
  },
  {
    display_text: '内蒙古，乌海，城区',
    search_text: 'nmg, wh, cq; nei meng gu, wu hai, cheng qu; 内蒙古，乌海，城区',
    weaid: 226
  },
  {
    display_text: '内蒙古，乌兰察布，集宁',
    search_text: 'nmg, wlcb, jn; nei meng gu, wu lan cha bu, ji ning; 内蒙古，乌兰察布，集宁',
    weaid: 227
  },
  {
    display_text: '内蒙古，乌兰察布，卓资',
    search_text: 'nmg, wlcb, zz; nei meng gu, wu lan cha bu, zhuo zi; 内蒙古，乌兰察布，卓资',
    weaid: 2184
  },
  {
    display_text: '内蒙古，乌兰察布，化德',
    search_text: 'nmg, wlcb, hd; nei meng gu, wu lan cha bu, hua de; 内蒙古，乌兰察布，化德',
    weaid: 863
  },
  {
    display_text: '内蒙古，乌兰察布，商都',
    search_text: 'nmg, wlcb, sd; nei meng gu, wu lan cha bu, shang dou; 内蒙古，乌兰察布，商都',
    weaid: 1572
  },
  {
    display_text: '内蒙古，乌兰察布，城区',
    search_text: 'nmg, wlcb, cq; nei meng gu, wu lan cha bu, cheng qu; 内蒙古，乌兰察布，城区',
    weaid: 2714
  },
  {
    display_text: '内蒙古，乌兰察布，兴和',
    search_text: 'nmg, wlcb, xh; nei meng gu, wu lan cha bu, xing he; 内蒙古，乌兰察布，兴和',
    weaid: 1859
  },
  {
    display_text: '内蒙古，乌兰察布，凉城',
    search_text: 'nmg, wlcb, lc; nei meng gu, wu lan cha bu, liang cheng; 内蒙古，乌兰察布，凉城',
    weaid: 1118
  },
  {
    display_text: '内蒙古，乌兰察布，察右前旗',
    search_text: 'nmg, wlcb, cyqq; nei meng gu, wu lan cha bu, cha you qian qi; 内蒙古，乌兰察布，察右前旗',
    weaid: 543
  },
  {
    display_text: '内蒙古，乌兰察布，察右中旗',
    search_text: 'nmg, wlcb, cyzq; nei meng gu, wu lan cha bu, cha you zhong qi; 内蒙古，乌兰察布，察右中旗',
    weaid: 544
  },
  {
    display_text: '内蒙古，乌兰察布，察右后旗',
    search_text: 'nmg, wlcb, cyhq; nei meng gu, wu lan cha bu, cha you hou qi; 内蒙古，乌兰察布，察右后旗',
    weaid: 545
  },
  {
    display_text: '内蒙古，乌兰察布，四子王旗',
    search_text: 'nmg, wlcb, szwq; nei meng gu, wu lan cha bu, si zi wang qi; 内蒙古，乌兰察布，四子王旗',
    weaid: 1666
  },
  {
    display_text: '内蒙古，乌兰察布，丰镇',
    search_text: 'nmg, wlcb, fz; nei meng gu, wu lan cha bu, feng zhen; 内蒙古，乌兰察布，丰镇',
    weaid: 768
  },
  {
    display_text: '内蒙古，通辽，城区',
    search_text: 'nmg, tl, cq; nei meng gu, tong liao, cheng qu; 内蒙古，通辽，城区',
    weaid: 228
  },
  {
    display_text: '内蒙古，通辽，科左中旗',
    search_text: 'nmg, tl, kzzq; nei meng gu, tong liao, ke zuo zhong qi; 内蒙古，通辽，科左中旗',
    weaid: 1087
  },
  {
    display_text: '内蒙古，通辽，科左后旗',
    search_text: 'nmg, tl, kzhq; nei meng gu, tong liao, ke zuo hou qi; 内蒙古，通辽，科左后旗',
    weaid: 1088
  },
  {
    display_text: '内蒙古，通辽，开鲁',
    search_text: 'nmg, tl, kl; nei meng gu, tong liao, kai lu; 内蒙古，通辽，开鲁',
    weaid: 1095
  },
  {
    display_text: '内蒙古，通辽，库伦',
    search_text: 'nmg, tl, kl; nei meng gu, tong liao, ku lun; 内蒙古，通辽，库伦',
    weaid: 1093
  },
  {
    display_text: '内蒙古，通辽，奈曼',
    search_text: 'nmg, tl, nm; nei meng gu, tong liao, nai man; 内蒙古，通辽，奈曼',
    weaid: 1382
  },
  {
    display_text: '内蒙古，通辽，扎鲁特',
    search_text: 'nmg, tl, zlt; nei meng gu, tong liao, zha lu te; 内蒙古，通辽，扎鲁特',
    weaid: 2130
  },
  {
    display_text: '内蒙古，赤峰，城区',
    search_text: 'nmg, cf, cq; nei meng gu, chi feng, cheng qu; 内蒙古，赤峰，城区',
    weaid: 236
  },
  {
    display_text: '内蒙古，赤峰，阿鲁旗',
    search_text: 'nmg, cf, alq; nei meng gu, chi feng, a lu qi; 内蒙古，赤峰，阿鲁旗',
    weaid: 2242
  },
  {
    display_text: '内蒙古，赤峰，巴林左旗',
    search_text: 'nmg, cf, blzq; nei meng gu, chi feng, ba lin zuo qi; 内蒙古，赤峰，巴林左旗',
    weaid: 502
  },
  {
    display_text: '内蒙古，赤峰，巴林右旗',
    search_text: 'nmg, cf, blyq; nei meng gu, chi feng, ba lin you qi; 内蒙古，赤峰，巴林右旗',
    weaid: 503
  },
  {
    display_text: '内蒙古，赤峰，林西',
    search_text: 'nmg, cf, lx; nei meng gu, chi feng, lin xi; 内蒙古，赤峰，林西',
    weaid: 1235
  },
  {
    display_text: '内蒙古，赤峰，克什克腾',
    search_text: 'nmg, cf, kskt; nei meng gu, chi feng, ke shen ke teng; 内蒙古，赤峰，克什克腾',
    weaid: 1101
  },
  {
    display_text: '内蒙古，赤峰，翁牛特',
    search_text: 'nmg, cf, wnt; nei meng gu, chi feng, weng niu te; 内蒙古，赤峰，翁牛特',
    weaid: 1789
  },
  {
    display_text: '内蒙古，赤峰，喀喇沁',
    search_text: 'nmg, cf, klq; nei meng gu, chi feng, ka la qin; 内蒙古，赤峰，喀喇沁',
    weaid: 1094
  },
  {
    display_text: '内蒙古，赤峰，宁城',
    search_text: 'nmg, cf, nc; nei meng gu, chi feng, ning cheng; 内蒙古，赤峰，宁城',
    weaid: 1354
  },
  {
    display_text: '内蒙古，赤峰，敖汉',
    search_text: 'nmg, cf, ah; nei meng gu, chi feng, ao han; 内蒙古，赤峰，敖汉',
    weaid: 455
  },
  {
    display_text: '内蒙古，鄂尔多斯，城区',
    search_text: 'nmg, eeds, cq; nei meng gu, e er duo si, cheng qu; 内蒙古，鄂尔多斯，城区',
    weaid: 230
  },
  {
    display_text: '内蒙古，鄂尔多斯，达拉特',
    search_text: 'nmg, eeds, dlt; nei meng gu, e er duo si, da la te; 内蒙古，鄂尔多斯，达拉特',
    weaid: 637
  },
  {
    display_text: '内蒙古，鄂尔多斯，准格尔',
    search_text: 'nmg, eeds, zge; nei meng gu, e er duo si, zhun ge er; 内蒙古，鄂尔多斯，准格尔',
    weaid: 2111
  },
  {
    display_text: '内蒙古，鄂尔多斯，鄂前旗',
    search_text: 'nmg, eeds, eqq; nei meng gu, e er duo si, e qian qi; 内蒙古，鄂尔多斯，鄂前旗',
    weaid: 700
  },
  {
    display_text: '内蒙古，鄂尔多斯，鄂托克',
    search_text: 'nmg, eeds, etk; nei meng gu, e er duo si, e tuo ke; 内蒙古，鄂尔多斯，鄂托克',
    weaid: 699
  },
  {
    display_text: '内蒙古，鄂尔多斯，杭锦旗',
    search_text: 'nmg, eeds, hjq; nei meng gu, e er duo si, hang jin qi; 内蒙古，鄂尔多斯，杭锦旗',
    weaid: 2249
  },
  {
    display_text: '内蒙古，鄂尔多斯，乌审旗',
    search_text: 'nmg, eeds, wsq; nei meng gu, e er duo si, wu shen qi; 内蒙古，鄂尔多斯，乌审旗',
    weaid: 2250
  },
  {
    display_text: '内蒙古，鄂尔多斯，伊金霍洛',
    search_text: 'nmg, eeds, yjhl; nei meng gu, e er duo si, yi jin huo luo; 内蒙古，鄂尔多斯，伊金霍洛',
    weaid: 2001
  },
  {
    display_text: '内蒙古，鄂尔多斯，东胜',
    search_text: 'nmg, eeds, ds; nei meng gu, e er duo si, dong sheng; 内蒙古，鄂尔多斯，东胜',
    weaid: 652
  },
  {
    display_text: '内蒙古，巴彦淖尔，临河',
    search_text: 'nmg, byne, lh; nei meng gu, ba yan nao er, lin he; 内蒙古，巴彦淖尔，临河',
    weaid: 231
  },
  {
    display_text: '内蒙古，巴彦淖尔，五原',
    search_text: 'nmg, byne, wy; nei meng gu, ba yan nao er, wu yuan; 内蒙古，巴彦淖尔，五原',
    weaid: 1821
  },
  {
    display_text: '内蒙古，巴彦淖尔，磴口',
    search_text: 'nmg, byne, dk; nei meng gu, ba yan nao er, deng kou; 内蒙古，巴彦淖尔，磴口',
    weaid: 630
  },
  {
    display_text: '内蒙古，巴彦淖尔，乌前旗',
    search_text: 'nmg, byne, wqq; nei meng gu, ba yan nao er, wu qian qi; 内蒙古，巴彦淖尔，乌前旗',
    weaid: 1780
  },
  {
    display_text: '内蒙古，巴彦淖尔，乌中旗',
    search_text: 'nmg, byne, wzq; nei meng gu, ba yan nao er, wu zhong qi; 内蒙古，巴彦淖尔，乌中旗',
    weaid: 1781
  },
  {
    display_text: '内蒙古，巴彦淖尔，乌后旗',
    search_text: 'nmg, byne, whq; nei meng gu, ba yan nao er, wu hou qi; 内蒙古，巴彦淖尔，乌后旗',
    weaid: 1782
  },
  {
    display_text: '内蒙古，巴彦淖尔，杭锦后旗',
    search_text: 'nmg, byne, hjhq; nei meng gu, ba yan nao er, hang jin hou qi; 内蒙古，巴彦淖尔，杭锦后旗',
    weaid: 884
  },
  {
    display_text: '内蒙古，锡林郭勒，锡林浩特',
    search_text: 'nmg, xlgl, xlht; nei meng gu, xi lin guo lei, xi lin hao te; 内蒙古，锡林郭勒，锡林浩特',
    weaid: 232
  },
  {
    display_text: '内蒙古，锡林郭勒，二连浩特',
    search_text: 'nmg, xlgl, elht; nei meng gu, xi lin guo lei, er lian hao te; 内蒙古，锡林郭勒，二连浩特',
    weaid: 694
  },
  {
    display_text: '内蒙古，锡林郭勒，阿巴嘎',
    search_text: 'nmg, xlgl, abg; nei meng gu, xi lin guo lei, a ba ga; 内蒙古，锡林郭勒，阿巴嘎',
    weaid: 2255
  },
  {
    display_text: '内蒙古，锡林郭勒，苏左旗',
    search_text: 'nmg, xlgl, szq; nei meng gu, xi lin guo lei, su zuo qi; 内蒙古，锡林郭勒，苏左旗',
    weaid: 1608
  },
  {
    display_text: '内蒙古，锡林郭勒，苏右旗',
    search_text: 'nmg, xlgl, syq; nei meng gu, xi lin guo lei, su you qi; 内蒙古，锡林郭勒，苏右旗',
    weaid: 1609
  },
  {
    display_text: '内蒙古，锡林郭勒，东乌旗',
    search_text: 'nmg, xlgl, dwq; nei meng gu, xi lin guo lei, dong wu qi; 内蒙古，锡林郭勒，东乌旗',
    weaid: 668
  },
  {
    display_text: '内蒙古，锡林郭勒，西乌旗',
    search_text: 'nmg, xlgl, xwq; nei meng gu, xi lin guo lei, xi wu qi; 内蒙古，锡林郭勒，西乌旗',
    weaid: 1914
  },
  {
    display_text: '内蒙古，锡林郭勒，太仆寺',
    search_text: 'nmg, xlgl, tps; nei meng gu, xi lin guo lei, tai pu si; 内蒙古，锡林郭勒，太仆寺',
    weaid: 1717
  },
  {
    display_text: '内蒙古，锡林郭勒，镶黄旗',
    search_text: 'nmg, xlgl, xhq; nei meng gu, xi lin guo lei, xiang huang qi; 内蒙古，锡林郭勒，镶黄旗',
    weaid: 1864
  },
  {
    display_text: '内蒙古，锡林郭勒，正镶白旗',
    search_text: 'nmg, xlgl, zxbq; nei meng gu, xi lin guo lei, zheng xiang bai qi; 内蒙古，锡林郭勒，正镶白旗',
    weaid: 2164
  },
  {
    display_text: '内蒙古，锡林郭勒，正蓝旗',
    search_text: 'nmg, xlgl, zlq; nei meng gu, xi lin guo lei, zheng lan qi; 内蒙古，锡林郭勒，正蓝旗',
    weaid: 2257
  },
  {
    display_text: '内蒙古，锡林郭勒，多伦',
    search_text: 'nmg, xlgl, dl; nei meng gu, xi lin guo lei, duo lun; 内蒙古，锡林郭勒，多伦',
    weaid: 638
  },
  {
    display_text: '内蒙古，呼伦贝尔，海拉尔',
    search_text: 'nmg, hlbe, hle; nei meng gu, hu lun bei er, hai la er; 内蒙古，呼伦贝尔，海拉尔',
    weaid: 891
  },
  {
    display_text: '内蒙古，呼伦贝尔，阿荣旗',
    search_text: 'nmg, hlbe, arq; nei meng gu, hu lun bei er, a rong qi; 内蒙古，呼伦贝尔，阿荣旗',
    weaid: 459
  },
  {
    display_text: '内蒙古，呼伦贝尔，莫力达瓦',
    search_text: 'nmg, hlbe, mldw; nei meng gu, hu lun bei er, mo li da wa; 内蒙古，呼伦贝尔，莫力达瓦',
    weaid: 1316
  },
  {
    display_text: '内蒙古，呼伦贝尔，鄂伦春旗',
    search_text: 'nmg, hlbe, elcq; nei meng gu, hu lun bei er, e lun chun qi; 内蒙古，呼伦贝尔，鄂伦春旗',
    weaid: 2260
  },
  {
    display_text: '内蒙古，呼伦贝尔，鄂温克旗',
    search_text: 'nmg, hlbe, ewkq; nei meng gu, hu lun bei er, e wen ke qi; 内蒙古，呼伦贝尔，鄂温克旗',
    weaid: 2261
  },
  {
    display_text: '内蒙古，呼伦贝尔，陈旗',
    search_text: 'nmg, hlbe, cq; nei meng gu, hu lun bei er, chen qi; 内蒙古，呼伦贝尔，陈旗',
    weaid: 529
  },
  {
    display_text: '内蒙古，呼伦贝尔，新左旗',
    search_text: 'nmg, hlbe, xzq; nei meng gu, hu lun bei er, xin zuo qi; 内蒙古，呼伦贝尔，新左旗',
    weaid: 1832
  },
  {
    display_text: '内蒙古，呼伦贝尔，新右旗',
    search_text: 'nmg, hlbe, xyq; nei meng gu, hu lun bei er, xin you qi; 内蒙古，呼伦贝尔，新右旗',
    weaid: 1833
  },
  {
    display_text: '内蒙古，呼伦贝尔，满洲里',
    search_text: 'nmg, hlbe, mzl; nei meng gu, hu lun bei er, man zhou li; 内蒙古，呼伦贝尔，满洲里',
    weaid: 1347
  },
  {
    display_text: '内蒙古，呼伦贝尔，牙克石',
    search_text: 'nmg, hlbe, yks; nei meng gu, hu lun bei er, ya ke shi; 内蒙古，呼伦贝尔，牙克石',
    weaid: 2005
  },
  {
    display_text: '内蒙古，呼伦贝尔，扎兰屯',
    search_text: 'nmg, hlbe, zlt; nei meng gu, hu lun bei er, zha lan tun; 内蒙古，呼伦贝尔，扎兰屯',
    weaid: 2132
  },
  {
    display_text: '内蒙古，呼伦贝尔，额尔古纳',
    search_text: 'nmg, hlbe, eegn; nei meng gu, hu lun bei er, e er gu na; 内蒙古，呼伦贝尔，额尔古纳',
    weaid: 2262
  },
  {
    display_text: '内蒙古，呼伦贝尔，根河',
    search_text: 'nmg, hlbe, gh; nei meng gu, hu lun bei er, gen he; 内蒙古，呼伦贝尔，根河',
    weaid: 788
  },
  {
    display_text: '内蒙古，兴安盟，乌兰浩特',
    search_text: 'nmg, xam, wlht; nei meng gu, xing an meng, wu lan hao te; 内蒙古，兴安盟，乌兰浩特',
    weaid: 234
  },
  {
    display_text: '内蒙古，兴安盟，阿尔山',
    search_text: 'nmg, xam, aes; nei meng gu, xing an meng, a er shan; 内蒙古，兴安盟，阿尔山',
    weaid: 452
  },
  {
    display_text: '内蒙古，兴安盟，科右中旗',
    search_text: 'nmg, xam, kyzq; nei meng gu, xing an meng, ke you zhong qi; 内蒙古，兴安盟，科右中旗',
    weaid: 2263
  },
  {
    display_text: '内蒙古，兴安盟，扎赉特',
    search_text: 'nmg, xam, zlt; nei meng gu, xing an meng, zha lai te; 内蒙古，兴安盟，扎赉特',
    weaid: 2131
  },
  {
    display_text: '内蒙古，兴安盟，突泉',
    search_text: 'nmg, xam, tq; nei meng gu, xing an meng, tu quan; 内蒙古，兴安盟，突泉',
    weaid: 1719
  },
  {
    display_text: '内蒙古，兴安盟，科右前旗',
    search_text: 'nmg, xam, kyqq; nei meng gu, xing an meng, ke you qian qi; 内蒙古，兴安盟，科右前旗',
    weaid: 2266
  },
  {
    display_text: '内蒙古，阿拉善盟，阿左旗',
    search_text: 'nmg, alsm, azq; nei meng gu, a la shan meng, a zuo qi; 内蒙古，阿拉善盟，阿左旗',
    weaid: 229
  },
  {
    display_text: '内蒙古，阿拉善盟，阿右旗',
    search_text: 'nmg, alsm, ayq; nei meng gu, a la shan meng, a you qi; 内蒙古，阿拉善盟，阿右旗',
    weaid: 462
  },
  {
    display_text: '内蒙古，阿拉善盟，额济纳',
    search_text: 'nmg, alsm, ejn; nei meng gu, a la shan meng, e ji na; 内蒙古，阿拉善盟，额济纳',
    weaid: 693
  },
  {
    display_text: '宁夏，银川，城区',
    search_text: 'nx, yc, cq; ning xia, yin chuan, cheng qu; 宁夏，银川，城区',
    weaid: 286
  },
  {
    display_text: '宁夏，银川，永宁',
    search_text: 'nx, yc, yn; ning xia, yin chuan, yong ning; 宁夏，银川，永宁',
    weaid: 2023
  },
  {
    display_text: '宁夏，银川，灵武',
    search_text: 'nx, yc, lw; ning xia, yin chuan, ling wu; 宁夏，银川，灵武',
    weaid: 1230
  },
  {
    display_text: '宁夏，银川，贺兰',
    search_text: 'nx, yc, hl; ning xia, yin chuan, he lan; 宁夏，银川，贺兰',
    weaid: 890
  },
  {
    display_text: '宁夏，石嘴山，城区',
    search_text: 'nx, szs, cq; ning xia, shi zui shan, cheng qu; 宁夏，石嘴山，城区',
    weaid: 289
  },
  {
    display_text: '宁夏，石嘴山，惠农',
    search_text: 'nx, szs, hn; ning xia, shi zui shan, hui nong; 宁夏，石嘴山，惠农',
    weaid: 913
  },
  {
    display_text: '宁夏，石嘴山，平罗',
    search_text: 'nx, szs, pl; ning xia, shi zui shan, ping luo; 宁夏，石嘴山，平罗',
    weaid: 1427
  },
  {
    display_text: '宁夏，吴忠，城区',
    search_text: 'nx, wz, cq; ning xia, wu zhong, cheng qu; 宁夏，吴忠，城区',
    weaid: 290
  },
  {
    display_text: '宁夏，吴忠，同心',
    search_text: 'nx, wz, tx; ning xia, wu zhong, tong xin; 宁夏，吴忠，同心',
    weaid: 1733
  },
  {
    display_text: '宁夏，吴忠，盐池',
    search_text: 'nx, wz, yc; ning xia, wu zhong, yan chi; 宁夏，吴忠，盐池',
    weaid: 1971
  },
  {
    display_text: '宁夏，吴忠，青铜峡',
    search_text: 'nx, wz, qtx; ning xia, wu zhong, qing tong xia; 宁夏，吴忠，青铜峡',
    weaid: 1498
  },
  {
    display_text: '宁夏，固原，城区',
    search_text: 'nx, gy, cq; ning xia, gu yuan, cheng qu; 宁夏，固原，城区',
    weaid: 288
  },
  {
    display_text: '宁夏，固原，西吉',
    search_text: 'nx, gy, xj; ning xia, gu yuan, xi ji; 宁夏，固原，西吉',
    weaid: 1878
  },
  {
    display_text: '宁夏，固原，隆德',
    search_text: 'nx, gy, ld; ning xia, gu yuan, long de; 宁夏，固原，隆德',
    weaid: 1134
  },
  {
    display_text: '宁夏，固原，泾源',
    search_text: 'nx, gy, jy; ning xia, gu yuan, jing yuan; 宁夏，固原，泾源',
    weaid: 1074
  },
  {
    display_text: '宁夏，固原，彭阳',
    search_text: 'nx, gy, py; ning xia, gu yuan, peng yang; 宁夏，固原，彭阳',
    weaid: 1454
  },
  {
    display_text: '宁夏，中卫，城区',
    search_text: 'nx, zw, cq; ning xia, zhong wei, cheng qu; 宁夏，中卫，城区',
    weaid: 287
  },
  {
    display_text: '宁夏，中卫，中宁',
    search_text: 'nx, zw, zn; ning xia, zhong wei, zhong ning; 宁夏，中卫，中宁',
    weaid: 2139
  },
  {
    display_text: '宁夏，中卫，海原',
    search_text: 'nx, zw, hy; ning xia, zhong wei, hai yuan; 宁夏，中卫，海原',
    weaid: 963
  },
  {
    display_text: '青海，西宁，城区',
    search_text: 'qh, xn, cq; qing hai, xi ning, cheng qu; 青海，西宁，城区',
    weaid: 291
  },
  {
    display_text: '青海，西宁，大通',
    search_text: 'qh, xn, dt; qing hai, xi ning, da tong; 青海，西宁，大通',
    weaid: 664
  },
  {
    display_text: '青海，西宁，湟源',
    search_text: 'qh, xn, hy; qing hai, xi ning, huang yuan; 青海，西宁，湟源',
    weaid: 962
  },
  {
    display_text: '青海，西宁，湟中',
    search_text: 'qh, xn, hz; qing hai, xi ning, huang zhong; 青海，西宁，湟中',
    weaid: 2443
  },
  {
    display_text: '青海，海东，平安',
    search_text: 'qh, hd, pa; qing hai, hai dong, ping an; 青海，海东，平安',
    weaid: 297
  },
  {
    display_text: '青海，海东，乐都',
    search_text: 'qh, hd, ld; qing hai, hai dong, le dou; 青海，海东，乐都',
    weaid: 1140
  },
  {
    display_text: '青海，海东，民和',
    search_text: 'qh, hd, mh; qing hai, hai dong, min he; 青海，海东，民和',
    weaid: 1298
  },
  {
    display_text: '青海，海东，互助',
    search_text: 'qh, hd, hz; qing hai, hai dong, hu zhu; 青海，海东，互助',
    weaid: 1830
  },
  {
    display_text: '青海，海东，化隆',
    search_text: 'qh, hd, hl; qing hai, hai dong, hua long; 青海，海东，化隆',
    weaid: 900
  },
  {
    display_text: '青海，海东，循化',
    search_text: 'qh, hd, xh; qing hai, hai dong, xun hua; 青海，海东，循化',
    weaid: 1870
  },
  {
    display_text: '青海，黄南，同仁',
    search_text: 'qh, hn, tr; qing hai, huang nan, tong ren; 青海，黄南，同仁',
    weaid: 292
  },
  {
    display_text: '青海，黄南，尖扎',
    search_text: 'qh, hn, jz; qing hai, huang nan, jian zha; 青海，黄南，尖扎',
    weaid: 1079
  },
  {
    display_text: '青海，黄南，泽库',
    search_text: 'qh, hn, zk; qing hai, huang nan, ze ku; 青海，黄南，泽库',
    weaid: 2128
  },
  {
    display_text: '青海，黄南，河南',
    search_text: 'qh, hn, hn; qing hai, huang nan, he nan; 青海，黄南，河南',
    weaid: 908
  },
  {
    display_text: '青海，海南，共和',
    search_text: 'qh, hn, gh; qing hai, hai nan, gong he; 青海，海南，共和',
    weaid: 298
  },
  {
    display_text: '青海，海南，贵德',
    search_text: 'qh, hn, gd; qing hai, hai nan, gui de; 青海，海南，贵德',
    weaid: 781
  },
  {
    display_text: '青海，海南，兴海',
    search_text: 'qh, hn, xh; qing hai, hai nan, xing hai; 青海，海南，兴海',
    weaid: 1858
  },
  {
    display_text: '青海，海南，贵南',
    search_text: 'qh, hn, gn; qing hai, hai nan, gui nan; 青海，海南，贵南',
    weaid: 806
  },
  {
    display_text: '青海，海南，同德',
    search_text: 'qh, hn, td; qing hai, hai nan, tong de; 青海，海南，同德',
    weaid: 1680
  },
  {
    display_text: '青海，果洛，玛沁',
    search_text: 'qh, gl, mq; qing hai, guo luo, ma qin; 青海，果洛，玛沁',
    weaid: 294
  },
  {
    display_text: '青海，果洛，班玛',
    search_text: 'qh, gl, bm; qing hai, guo luo, ban ma; 青海，果洛，班玛',
    weaid: 506
  },
  {
    display_text: '青海，果洛，甘德',
    search_text: 'qh, gl, gd; qing hai, guo luo, gan de; 青海，果洛，甘德',
    weaid: 782
  },
  {
    display_text: '青海，果洛，达日',
    search_text: 'qh, gl, dr; qing hai, guo luo, da ri; 青海，果洛，达日',
    weaid: 650
  },
  {
    display_text: '青海，果洛，久治',
    search_text: 'qh, gl, jz; qing hai, guo luo, jiu zhi; 青海，果洛，久治',
    weaid: 1080
  },
  {
    display_text: '青海，果洛，玛多',
    search_text: 'qh, gl, md; qing hai, guo luo, ma duo; 青海，果洛，玛多',
    weaid: 1290
  },
  {
    display_text: '青海，玉树，城区',
    search_text: 'qh, ys, cq; qing hai, yu shu, cheng qu; 青海，玉树，城区',
    weaid: 295
  },
  {
    display_text: '青海，玉树，称多',
    search_text: 'qh, ys, cd; qing hai, yu shu, cheng duo; 青海，玉树，称多',
    weaid: 2445
  },
  {
    display_text: '青海，玉树，治多',
    search_text: 'qh, ys, zd; qing hai, yu shu, zhi duo; 青海，玉树，治多',
    weaid: 2107
  },
  {
    display_text: '青海，玉树，杂多',
    search_text: 'qh, ys, zd; qing hai, yu shu, za duo; 青海，玉树，杂多',
    weaid: 2108
  },
  {
    display_text: '青海，玉树，囊谦',
    search_text: 'qh, ys, nq; qing hai, yu shu, nang qian; 青海，玉树，囊谦',
    weaid: 2446
  },
  {
    display_text: '青海，玉树，曲麻莱',
    search_text: 'qh, ys, qml; qing hai, yu shu, qu ma lai; 青海，玉树，曲麻莱',
    weaid: 1485
  },
  {
    display_text: '青海，海西，德令哈',
    search_text: 'qh, hx, dlh; qing hai, hai xi, de ling ha; 青海，海西，德令哈',
    weaid: 296
  },
  {
    display_text: '青海，海西，天峻',
    search_text: 'qh, hx, tj; qing hai, hai xi, tian jun; 青海，海西，天峻',
    weaid: 1699
  },
  {
    display_text: '青海，海西，乌兰',
    search_text: 'qh, hx, wl; qing hai, hai xi, wu lan; 青海，海西，乌兰',
    weaid: 1777
  },
  {
    display_text: '青海，海西，茫崖',
    search_text: 'qh, hx, my; qing hai, hai xi, mang ya; 青海，海西，茫崖',
    weaid: 1339
  },
  {
    display_text: '青海，海西，大柴旦',
    search_text: 'qh, hx, dcd; qing hai, hai xi, da chai dan; 青海，海西，大柴旦',
    weaid: 605
  },
  {
    display_text: '青海，海西，冷湖',
    search_text: 'qh, hx, lh; qing hai, hai xi, leng hu; 青海，海西，冷湖',
    weaid: 634
  },
  {
    display_text: '青海，海北，海晏',
    search_text: 'qh, hb, hy; qing hai, hai bei, hai yan; 青海，海北，海晏',
    weaid: 293
  },
  {
    display_text: '青海，海北，门源',
    search_text: 'qh, hb, my; qing hai, hai bei, men yuan; 青海，海北，门源',
    weaid: 1342
  },
  {
    display_text: '青海，海北，祁连',
    search_text: 'qh, hb, ql; qing hai, hai bei, qi lian; 青海，海北，祁连',
    weaid: 1481
  },
  {
    display_text: '青海，海北，刚察',
    search_text: 'qh, hb, gc; qing hai, hai bei, gang cha; 青海，海北，刚察',
    weaid: 778
  },
  {
    display_text: '日本，东京（Tokyo）',
    search_text: 'rb, dj; ri ben, dong jing; 日本，东京（Tokyo）',
    weaid: 2201
  },
  {
    display_text: '日本，京都（Kyoto）',
    search_text: 'rb, jd; ri ben, jing du; 日本，京都（Kyoto）',
    weaid: 2207
  },
  {
    display_text: '日本，大阪（Osaka）',
    search_text: 'rb, db; ri ben, da ban; 日本，大阪（Osaka）',
    weaid: 2191
  },
  {
    display_text: '山东，济南，城区',
    search_text: 'sd, jn, cq; shan dong, ji nan, cheng qu; 山东，济南，城区',
    weaid: 299
  },
  {
    display_text: '山东，济南，长清',
    search_text: 'sd, jn, zq; shan dong, ji nan, zhang qing; 山东，济南，长清',
    weaid: 566
  },
  {
    display_text: '山东，济南，商河',
    search_text: 'sd, jn, sh; shan dong, ji nan, shang he; 山东，济南，商河',
    weaid: 1582
  },
  {
    display_text: '山东，济南，章丘',
    search_text: 'sd, jn, zq; shan dong, ji nan, zhang qiu; 山东，济南，章丘',
    weaid: 2147
  },
  {
    display_text: '山东，济南，平阴',
    search_text: 'sd, jn, py; shan dong, ji nan, ping yin; 山东，济南，平阴',
    weaid: 1455
  },
  {
    display_text: '山东，济南，济阳',
    search_text: 'sd, jn, jy; shan dong, ji nan, ji yang; 山东，济南，济阳',
    weaid: 1058
  },
  {
    display_text: '山东，济南，历下',
    search_text: 'sd, jn, lx; shan dong, ji nan, li xia; 山东，济南，历下',
    weaid: 2651
  },
  {
    display_text: '山东，青岛，城区',
    search_text: 'sd, qd, cq; shan dong, qing dao, cheng qu; 山东，青岛，城区',
    weaid: 310
  },
  {
    display_text: '山东，青岛，崂山',
    search_text: 'sd, qd, ls; shan dong, qing dao, lao shan; 山东，青岛，崂山',
    weaid: 2346
  },
  {
    display_text: '山东，青岛，即墨',
    search_text: 'sd, qd, jm; shan dong, qing dao, ji mo; 山东，青岛，即墨',
    weaid: 1012
  },
  {
    display_text: '山东，青岛，胶州',
    search_text: 'sd, qd, jz; shan dong, qing dao, jiao zhou; 山东，青岛，胶州',
    weaid: 1076
  },
  {
    display_text: '山东，青岛，黄岛',
    search_text: 'sd, qd, hd; shan dong, qing dao, huang dao; 山东，青岛，黄岛',
    weaid: 1013
  },
  {
    display_text: '山东，青岛，莱西',
    search_text: 'sd, qd, lx; shan dong, qing dao, lai xi; 山东，青岛，莱西',
    weaid: 1236
  },
  {
    display_text: '山东，青岛，平度',
    search_text: 'sd, qd, pd; shan dong, qing dao, ping du; 山东，青岛，平度',
    weaid: 1414
  },
  {
    display_text: '山东，淄博，城区',
    search_text: 'sd, zb, cq; shan dong, zi bo, cheng qu; 山东，淄博，城区',
    weaid: 311
  },
  {
    display_text: '山东，淄博，淄川',
    search_text: 'sd, zb, zc; shan dong, zi bo, zi chuan; 山东，淄博，淄川',
    weaid: 2347
  },
  {
    display_text: '山东，淄博，博山',
    search_text: 'sd, zb, bs; shan dong, zi bo, bo shan; 山东，淄博，博山',
    weaid: 2348
  },
  {
    display_text: '山东，淄博，高青',
    search_text: 'sd, zb, gq; shan dong, zi bo, gao qing; 山东，淄博，高青',
    weaid: 811
  },
  {
    display_text: '山东，淄博，周村',
    search_text: 'sd, zb, zc; shan dong, zi bo, zhou cun; 山东，淄博，周村',
    weaid: 2349
  },
  {
    display_text: '山东，淄博，沂源',
    search_text: 'sd, zb, yy; shan dong, zi bo, yi yuan; 山东，淄博，沂源',
    weaid: 2087
  },
  {
    display_text: '山东，淄博，桓台',
    search_text: 'sd, zb, ht; shan dong, zi bo, huan tai; 山东，淄博，桓台',
    weaid: 936
  },
  {
    display_text: '山东，淄博，临淄',
    search_text: 'sd, zb, lz; shan dong, zi bo, lin zi; 山东，淄博，临淄',
    weaid: 1281
  },
  {
    display_text: '山东，德州，城区',
    search_text: 'sd, dz, cq; shan dong, de zhou, cheng qu; 山东，德州，城区',
    weaid: 312
  },
  {
    display_text: '山东，德州，武城',
    search_text: 'sd, dz, wc; shan dong, de zhou, wu cheng; 山东，德州，武城',
    weaid: 1754
  },
  {
    display_text: '山东，德州，临邑',
    search_text: 'sd, dz, ly; shan dong, de zhou, lin yi; 山东，德州，临邑',
    weaid: 2350
  },
  {
    display_text: '山东，德州，齐河',
    search_text: 'sd, dz, qh; shan dong, de zhou, qi he; 山东，德州，齐河',
    weaid: 2351
  },
  {
    display_text: '山东，德州，乐陵',
    search_text: 'sd, dz, ll; shan dong, de zhou, le ling; 山东，德州，乐陵',
    weaid: 1172
  },
  {
    display_text: '山东，德州，庆云',
    search_text: 'sd, dz, qy; shan dong, de zhou, qing yun; 山东，德州，庆云',
    weaid: 1519
  },
  {
    display_text: '山东，德州，平原',
    search_text: 'sd, dz, py; shan dong, de zhou, ping yuan; 山东，德州，平原',
    weaid: 1457
  },
  {
    display_text: '山东，德州，宁津',
    search_text: 'sd, dz, nj; shan dong, de zhou, ning jin; 山东，德州，宁津',
    weaid: 1369
  },
  {
    display_text: '山东，德州，夏津',
    search_text: 'sd, dz, xj; shan dong, de zhou, xia jin; 山东，德州，夏津',
    weaid: 1874
  },
  {
    display_text: '山东，德州，禹城',
    search_text: 'sd, dz, yc; shan dong, de zhou, yu cheng; 山东，德州，禹城',
    weaid: 1958
  },
  {
    display_text: '山东，烟台，城区',
    search_text: 'sd, yt, cq; shan dong, yan tai, cheng qu; 山东，烟台，城区',
    weaid: 313
  },
  {
    display_text: '山东，烟台，莱州',
    search_text: 'sd, yt, lz; shan dong, yan tai, lai zhou; 山东，烟台，莱州',
    weaid: 1272
  },
  {
    display_text: '山东，烟台，长岛',
    search_text: 'sd, yt, zd; shan dong, yan tai, zhang dao; 山东，烟台，长岛',
    weaid: 534
  },
  {
    display_text: '山东，烟台，蓬莱',
    search_text: 'sd, yt, pl; shan dong, yan tai, peng lai; 山东，烟台，蓬莱',
    weaid: 1421
  },
  {
    display_text: '山东，烟台，龙口',
    search_text: 'sd, yt, lk; shan dong, yan tai, long kou; 山东，烟台，龙口',
    weaid: 1168
  },
  {
    display_text: '山东，烟台，招远',
    search_text: 'sd, yt, zy; shan dong, yan tai, zhao yuan; 山东，烟台，招远',
    weaid: 2173
  },
  {
    display_text: '山东，烟台，栖霞',
    search_text: 'sd, yt, qx; shan dong, yan tai, qi xia; 山东，烟台，栖霞',
    weaid: 1504
  },
  {
    display_text: '山东，烟台，福山',
    search_text: 'sd, yt, fs; shan dong, yan tai, fu shan; 山东，烟台，福山',
    weaid: 2352
  },
  {
    display_text: '山东，烟台，牟平',
    search_text: 'sd, yt, mp; shan dong, yan tai, mu ping; 山东，烟台，牟平',
    weaid: 1320
  },
  {
    display_text: '山东，烟台，莱阳',
    search_text: 'sd, yt, ly; shan dong, yan tai, lai yang; 山东，烟台，莱阳',
    weaid: 1252
  },
  {
    display_text: '山东，烟台，海阳',
    search_text: 'sd, yt, hy; shan dong, yan tai, hai yang; 山东，烟台，海阳',
    weaid: 949
  },
  {
    display_text: '山东，潍坊，城区',
    search_text: 'sd, wf, cq; shan dong, wei fang, cheng qu; 山东，潍坊，城区',
    weaid: 300
  },
  {
    display_text: '山东，潍坊，青州',
    search_text: 'sd, wf, qz; shan dong, wei fang, qing zhou; 山东，潍坊，青州',
    weaid: 1522
  },
  {
    display_text: '山东，潍坊，寿光',
    search_text: 'sd, wf, sg; shan dong, wei fang, shou guang; 山东，潍坊，寿光',
    weaid: 1578
  },
  {
    display_text: '山东，潍坊，临朐',
    search_text: 'sd, wf, lq; shan dong, wei fang, lin qu; 山东，潍坊，临朐',
    weaid: 1195
  },
  {
    display_text: '山东，潍坊，昌乐',
    search_text: 'sd, wf, cl; shan dong, wei fang, chang le; 山东，潍坊，昌乐',
    weaid: 550
  },
  {
    display_text: '山东，潍坊，昌邑',
    search_text: 'sd, wf, cy; shan dong, wei fang, chang yi; 山东，潍坊，昌邑',
    weaid: 591
  },
  {
    display_text: '山东，潍坊，安丘',
    search_text: 'sd, wf, aq; shan dong, wei fang, an qiu; 山东，潍坊，安丘',
    weaid: 466
  },
  {
    display_text: '山东，潍坊，高密',
    search_text: 'sd, wf, gm; shan dong, wei fang, gao mi; 山东，潍坊，高密',
    weaid: 803
  },
  {
    display_text: '山东，潍坊，诸城',
    search_text: 'sd, wf, zc; shan dong, wei fang, zhu cheng; 山东，潍坊，诸城',
    weaid: 2101
  },
  {
    display_text: '山东，济宁，城区',
    search_text: 'sd, jn, cq; shan dong, ji ning, cheng qu; 山东，济宁，城区',
    weaid: 314
  },
  {
    display_text: '山东，济宁，嘉祥',
    search_text: 'sd, jn, jx; shan dong, ji ning, jia xiang; 山东，济宁，嘉祥',
    weaid: 1045
  },
  {
    display_text: '山东，济宁，微山',
    search_text: 'sd, jn, ws; shan dong, ji ning, wei shan; 山东，济宁，微山',
    weaid: 1798
  },
  {
    display_text: '山东，济宁，鱼台',
    search_text: 'sd, jn, yt; shan dong, ji ning, yu tai; 山东，济宁，鱼台',
    weaid: 2051
  },
  {
    display_text: '山东，济宁，兖州',
    search_text: 'sd, jn, yz; shan dong, ji ning, yan zhou; 山东，济宁，兖州',
    weaid: 2088
  },
  {
    display_text: '山东，济宁，金乡',
    search_text: 'sd, jn, jx; shan dong, ji ning, jin xiang; 山东，济宁，金乡',
    weaid: 1044
  },
  {
    display_text: '山东，济宁，汶上',
    search_text: 'sd, jn, ws; shan dong, ji ning, wen shang; 山东，济宁，汶上',
    weaid: 1799
  },
  {
    display_text: '山东，济宁，泗水',
    search_text: 'sd, jn, ss; shan dong, ji ning, si shui; 山东，济宁，泗水',
    weaid: 1619
  },
  {
    display_text: '山东，济宁，梁山',
    search_text: 'sd, jn, ls; shan dong, ji ning, liang shan; 山东，济宁，梁山',
    weaid: 1203
  },
  {
    display_text: '山东，济宁，曲阜',
    search_text: 'sd, jn, qf; shan dong, ji ning, qu fu; 山东，济宁，曲阜',
    weaid: 1473
  },
  {
    display_text: '山东，济宁，邹城',
    search_text: 'sd, jn, zc; shan dong, ji ning, zou cheng; 山东，济宁，邹城',
    weaid: 2100
  },
  {
    display_text: '山东，泰安，城区',
    search_text: 'sd, ta, cq; shan dong, tai an, cheng qu; 山东，泰安，城区',
    weaid: 315
  },
  {
    display_text: '山东，泰安，新泰',
    search_text: 'sd, ta, xt; shan dong, tai an, xin tai; 山东，泰安，新泰',
    weaid: 1908
  },
  {
    display_text: '山东，泰安，肥城',
    search_text: 'sd, ta, fc; shan dong, tai an, fei cheng; 山东，泰安，肥城',
    weaid: 704
  },
  {
    display_text: '山东，泰安，东平',
    search_text: 'sd, ta, dp; shan dong, tai an, dong ping; 山东，泰安，东平',
    weaid: 644
  },
  {
    display_text: '山东，泰安，宁阳',
    search_text: 'sd, ta, ny; shan dong, tai an, ning yang; 山东，泰安，宁阳',
    weaid: 1396
  },
  {
    display_text: '山东，临沂，城区',
    search_text: 'sd, ly, cq; shan dong, lin yi, cheng qu; 山东，临沂，城区',
    weaid: 301
  },
  {
    display_text: '山东，临沂，莒南',
    search_text: 'sd, ly, jn; shan dong, lin yi, ju nan; 山东，临沂，莒南',
    weaid: 1014
  },
  {
    display_text: '山东，临沂，沂南',
    search_text: 'sd, ly, yn; shan dong, lin yi, yi nan; 山东，临沂，沂南',
    weaid: 2019
  },
  {
    display_text: '山东，临沂，兰陵',
    search_text: 'sd, ly, ll; shan dong, lin yi, lan ling; 山东，临沂，兰陵',
    weaid: 568
  },
  {
    display_text: '山东，临沂，临沭',
    search_text: 'sd, ly, ls; shan dong, lin yi, lin shu; 山东，临沂，临沭',
    weaid: 1204
  },
  {
    display_text: '山东，临沂，郯城',
    search_text: 'sd, ly, tc; shan dong, lin yi, tan cheng; 山东，临沂，郯城',
    weaid: 1672
  },
  {
    display_text: '山东，临沂，蒙阴',
    search_text: 'sd, ly, my; shan dong, lin yi, meng yin; 山东，临沂，蒙阴',
    weaid: 1340
  },
  {
    display_text: '山东，临沂，平邑',
    search_text: 'sd, ly, py; shan dong, lin yi, ping yi; 山东，临沂，平邑',
    weaid: 1456
  },
  {
    display_text: '山东，临沂，费县',
    search_text: 'sd, ly, fx; shan dong, lin yi, fei xian; 山东，临沂，费县',
    weaid: 748
  },
  {
    display_text: '山东，临沂，沂水',
    search_text: 'sd, ly, ys; shan dong, lin yi, yi shui; 山东，临沂，沂水',
    weaid: 2038
  },
  {
    display_text: '山东，菏泽，城区',
    search_text: 'sd, hz, cq; shan dong, he ze, cheng qu; 山东，菏泽，城区',
    weaid: 302
  },
  {
    display_text: '山东，菏泽，鄄城',
    search_text: 'sd, hz, jc; shan dong, he ze, juan cheng; 山东，菏泽，鄄城',
    weaid: 978
  },
  {
    display_text: '山东，菏泽，郓城',
    search_text: 'sd, hz, yc; shan dong, he ze, yun cheng; 山东，菏泽，郓城',
    weaid: 1957
  },
  {
    display_text: '山东，菏泽，东明',
    search_text: 'sd, hz, dm; shan dong, he ze, dong ming; 山东，菏泽，东明',
    weaid: 640
  },
  {
    display_text: '山东，菏泽，定陶',
    search_text: 'sd, hz, dt; shan dong, he ze, ding tao; 山东，菏泽，定陶',
    weaid: 660
  },
  {
    display_text: '山东，菏泽，巨野',
    search_text: 'sd, hz, jy; shan dong, he ze, ju ye; 山东，菏泽，巨野',
    weaid: 1065
  },
  {
    display_text: '山东，菏泽，曹县',
    search_text: 'sd, hz, cx; shan dong, he ze, cao xian; 山东，菏泽，曹县',
    weaid: 580
  },
  {
    display_text: '山东，菏泽，成武',
    search_text: 'sd, hz, cw; shan dong, he ze, cheng wu; 山东，菏泽，成武',
    weaid: 577
  },
  {
    display_text: '山东，菏泽，单县',
    search_text: 'sd, hz, dx; shan dong, he ze, dan xian; 山东，菏泽，单县',
    weaid: 1635
  },
  {
    display_text: '山东，滨州，城区',
    search_text: 'sd, bz, cq; shan dong, bin zhou, cheng qu; 山东，滨州，城区',
    weaid: 303
  },
  {
    display_text: '山东，滨州，博兴',
    search_text: 'sd, bz, bx; shan dong, bin zhou, bo xing; 山东，滨州，博兴',
    weaid: 515
  },
  {
    display_text: '山东，滨州，无棣',
    search_text: 'sd, bz, wd; shan dong, bin zhou, wu di; 山东，滨州，无棣',
    weaid: 1760
  },
  {
    display_text: '山东，滨州，阳信',
    search_text: 'sd, bz, yx; shan dong, bin zhou, yang xin; 山东，滨州，阳信',
    weaid: 2062
  },
  {
    display_text: '山东，滨州，惠民',
    search_text: 'sd, bz, hm; shan dong, bin zhou, hui min; 山东，滨州，惠民',
    weaid: 1783
  },
  {
    display_text: '山东，滨州，沾化',
    search_text: 'sd, bz, zh; shan dong, bin zhou, zhan hua; 山东，滨州，沾化',
    weaid: 2118
  },
  {
    display_text: '山东，滨州，邹平',
    search_text: 'sd, bz, zp; shan dong, bin zhou, zou ping; 山东，滨州，邹平',
    weaid: 2140
  },
  {
    display_text: '山东，东营，城区',
    search_text: 'sd, dy, cq; shan dong, dong ying, cheng qu; 山东，东营，城区',
    weaid: 304
  },
  {
    display_text: '山东，东营，河口',
    search_text: 'sd, dy, hk; shan dong, dong ying, he kou; 山东，东营，河口',
    weaid: 886
  },
  {
    display_text: '山东，东营，垦利',
    search_text: 'sd, dy, kl; shan dong, dong ying, ken li; 山东，东营，垦利',
    weaid: 2353
  },
  {
    display_text: '山东，东营，利津',
    search_text: 'sd, dy, lj; shan dong, dong ying, li jin; 山东，东营，利津',
    weaid: 1161
  },
  {
    display_text: '山东，东营，广饶',
    search_text: 'sd, dy, gr; shan dong, dong ying, guang rao; 山东，东营，广饶',
    weaid: 813
  },
  {
    display_text: '山东，威海，城区',
    search_text: 'sd, wh, cq; shan dong, wei hai, cheng qu; 山东，威海，城区',
    weaid: 305
  },
  {
    display_text: '山东，威海，文登',
    search_text: 'sd, wh, wd; shan dong, wei hai, wen deng; 山东，威海，文登',
    weaid: 2354
  },
  {
    display_text: '山东，威海，荣成',
    search_text: 'sd, wh, rc; shan dong, wei hai, rong cheng; 山东，威海，荣成',
    weaid: 2355
  },
  {
    display_text: '山东，威海，乳山',
    search_text: 'sd, wh, rs; shan dong, wei hai, ru shan; 山东，威海，乳山',
    weaid: 2356
  },
  {
    display_text: '山东，枣庄，城区',
    search_text: 'sd, zz, cq; shan dong, zao zhuang, cheng qu; 山东，枣庄，城区',
    weaid: 306
  },
  {
    display_text: '山东，枣庄，薛城',
    search_text: 'sd, zz, xc; shan dong, zao zhuang, xue cheng; 山东，枣庄，薛城',
    weaid: 2359
  },
  {
    display_text: '山东，枣庄，峄城',
    search_text: 'sd, zz, yc; shan dong, zao zhuang, yi cheng; 山东，枣庄，峄城',
    weaid: 2360
  },
  {
    display_text: '山东，枣庄，台儿庄',
    search_text: 'sd, zz, tez; shan dong, zao zhuang, tai er zhuang; 山东，枣庄，台儿庄',
    weaid: 2361
  },
  {
    display_text: '山东，枣庄，滕州',
    search_text: 'sd, zz, tz; shan dong, zao zhuang, teng zhou; 山东，枣庄，滕州',
    weaid: 1741
  },
  {
    display_text: '山东，日照，城区',
    search_text: 'sd, rz, cq; shan dong, ri zhao, cheng qu; 山东，日照，城区',
    weaid: 307
  },
  {
    display_text: '山东，日照，五莲',
    search_text: 'sd, rz, wl; shan dong, ri zhao, wu lian; 山东，日照，五莲',
    weaid: 2362
  },
  {
    display_text: '山东，日照，莒县',
    search_text: 'sd, rz, jx; shan dong, ri zhao, ju xian; 山东，日照，莒县',
    weaid: 1046
  },
  {
    display_text: '山东，莱芜，城区',
    search_text: 'sd, lw, cq; shan dong, lai wu, cheng qu; 山东，莱芜，城区',
    weaid: 308
  },
  {
    display_text: '山东，聊城，城区',
    search_text: 'sd, lc, cq; shan dong, liao cheng, cheng qu; 山东，聊城，城区',
    weaid: 309
  },
  {
    display_text: '山东，聊城，冠县',
    search_text: 'sd, lc, gx; shan dong, liao cheng, guan xian; 山东，聊城，冠县',
    weaid: 2363
  },
  {
    display_text: '山东，聊城，阳谷',
    search_text: 'sd, lc, yg; shan dong, liao cheng, yang gu; 山东，聊城，阳谷',
    weaid: 2364
  },
  {
    display_text: '山东，聊城，高唐',
    search_text: 'sd, lc, gt; shan dong, liao cheng, gao tang; 山东，聊城，高唐',
    weaid: 2365
  },
  {
    display_text: '山东，聊城，茌平',
    search_text: 'sd, lc, cp; shan dong, liao cheng, chi ping; 山东，聊城，茌平',
    weaid: 2366
  },
  {
    display_text: '山东，聊城，东阿',
    search_text: 'sd, lc, de; shan dong, liao cheng, dong e; 山东，聊城，东阿',
    weaid: 2367
  },
  {
    display_text: '山东，聊城，临清',
    search_text: 'sd, lc, lq; shan dong, liao cheng, lin qing; 山东，聊城，临清',
    weaid: 1193
  },
  {
    display_text: '山东，聊城，莘县',
    search_text: 'sd, lc, sx; shan dong, liao cheng, shen xian; 山东，聊城，莘县',
    weaid: 2368
  },
  {
    display_text: '山西，太原，城区',
    search_text: 'sx, ty, cq; shan xi, tai yuan, cheng qu; 山西，太原，城区',
    weaid: 326
  },
  {
    display_text: '山西，太原，清徐',
    search_text: 'sx, ty, qx; shan xi, tai yuan, qing xu; 山西，太原，清徐',
    weaid: 1509
  },
  {
    display_text: '山西，太原，阳曲',
    search_text: 'sx, ty, yq; shan xi, tai yuan, yang qu; 山西，太原，阳曲',
    weaid: 2031
  },
  {
    display_text: '山西，太原，娄烦',
    search_text: 'sx, ty, lf; shan xi, tai yuan, lou fan; 山西，太原，娄烦',
    weaid: 1141
  },
  {
    display_text: '山西，太原，古交',
    search_text: 'sx, ty, gj; shan xi, tai yuan, gu jiao; 山西，太原，古交',
    weaid: 2323
  },
  {
    display_text: '山西，太原，尖草坪区',
    search_text: 'sx, ty, jcpq; shan xi, tai yuan, jian cao ping qu; 山西，太原，尖草坪区',
    weaid: 2324
  },
  {
    display_text: '山西，太原，小店区',
    search_text: 'sx, ty, xdq; shan xi, tai yuan, xiao dian qu; 山西，太原，小店区',
    weaid: 2325
  },
  {
    display_text: '山西，大同，城区',
    search_text: 'sx, dt, cq; shan xi, da tong, cheng qu; 山西，大同，城区',
    weaid: 332
  },
  {
    display_text: '山西，大同，阳高',
    search_text: 'sx, dt, yg; shan xi, da tong, yang gao; 山西，大同，阳高',
    weaid: 2326
  },
  {
    display_text: '山西，大同，大同县',
    search_text: 'sx, dt, dtx; shan xi, da tong, da tong xian; 山西，大同，大同县',
    weaid: 2327
  },
  {
    display_text: '山西，大同，天镇',
    search_text: 'sx, dt, tz; shan xi, da tong, tian zhen; 山西，大同，天镇',
    weaid: 1740
  },
  {
    display_text: '山西，大同，广灵',
    search_text: 'sx, dt, gl; shan xi, da tong, guang ling; 山西，大同，广灵',
    weaid: 796
  },
  {
    display_text: '山西，大同，灵丘',
    search_text: 'sx, dt, lq; shan xi, da tong, ling qiu; 山西，大同，灵丘',
    weaid: 2328
  },
  {
    display_text: '山西，大同，浑源',
    search_text: 'sx, dt, hy; shan xi, da tong, hun yuan; 山西，大同，浑源',
    weaid: 960
  },
  {
    display_text: '山西，大同，左云',
    search_text: 'sx, dt, zy; shan xi, da tong, zuo yun; 山西，大同，左云',
    weaid: 2172
  },
  {
    display_text: '山西，阳泉，城区',
    search_text: 'sx, yq, cq; shan xi, yang quan, cheng qu; 山西，阳泉，城区',
    weaid: 333
  },
  {
    display_text: '山西，阳泉，盂县',
    search_text: 'sx, yq, yx; shan xi, yang quan, yu xian; 山西，阳泉，盂县',
    weaid: 2329
  },
  {
    display_text: '山西，阳泉，平定',
    search_text: 'sx, yq, pd; shan xi, yang quan, ping ding; 山西，阳泉，平定',
    weaid: 1412
  },
  {
    display_text: '山西，晋中，城区',
    search_text: 'sx, jz, cq; shan xi, jin zhong, cheng qu; 山西，晋中，城区',
    weaid: 334
  },
  {
    display_text: '山西，晋中，榆次',
    search_text: 'sx, jz, yc; shan xi, jin zhong, yu ci; 山西，晋中，榆次',
    weaid: 1973
  },
  {
    display_text: '山西，晋中，榆社',
    search_text: 'sx, jz, ys; shan xi, jin zhong, yu she; 山西，晋中，榆社',
    weaid: 2037
  },
  {
    display_text: '山西，晋中，左权',
    search_text: 'sx, jz, zq; shan xi, jin zhong, zuo quan; 山西，晋中，左权',
    weaid: 2148
  },
  {
    display_text: '山西，晋中，和顺',
    search_text: 'sx, jz, hs; shan xi, jin zhong, he shun; 山西，晋中，和顺',
    weaid: 926
  },
  {
    display_text: '山西，晋中，昔阳',
    search_text: 'sx, jz, xy; shan xi, jin zhong, xi yang; 山西，晋中，昔阳',
    weaid: 1928
  },
  {
    display_text: '山西，晋中，寿阳',
    search_text: 'sx, jz, sy; shan xi, jin zhong, shou yang; 山西，晋中，寿阳',
    weaid: 1646
  },
  {
    display_text: '山西，晋中，太谷',
    search_text: 'sx, jz, tg; shan xi, jin zhong, tai gu; 山西，晋中，太谷',
    weaid: 1683
  },
  {
    display_text: '山西，晋中，祁县',
    search_text: 'sx, jz, qx; shan xi, jin zhong, qi xian; 山西，晋中，祁县',
    weaid: 1502
  },
  {
    display_text: '山西，晋中，平遥',
    search_text: 'sx, jz, py; shan xi, jin zhong, ping yao; 山西，晋中，平遥',
    weaid: 1450
  },
  {
    display_text: '山西，晋中，灵石',
    search_text: 'sx, jz, ls; shan xi, jin zhong, ling shi; 山西，晋中，灵石',
    weaid: 1201
  },
  {
    display_text: '山西，晋中，介休',
    search_text: 'sx, jz, jx; shan xi, jin zhong, jie xiu; 山西，晋中，介休',
    weaid: 1042
  },
  {
    display_text: '山西，长治，城区',
    search_text: 'sx, zz, cq; shan xi, zhang zhi, cheng qu; 山西，长治，城区',
    weaid: 331
  },
  {
    display_text: '山西，长治，黎城',
    search_text: 'sx, zz, lc; shan xi, zhang zhi, li cheng; 山西，长治，黎城',
    weaid: 1115
  },
  {
    display_text: '山西，长治，屯留',
    search_text: 'sx, zz, tl; shan xi, zhang zhi, tun liu; 山西，长治，屯留',
    weaid: 1708
  },
  {
    display_text: '山西，长治，潞城',
    search_text: 'sx, zz, lc; shan xi, zhang zhi, lu cheng; 山西，长治，潞城',
    weaid: 1116
  },
  {
    display_text: '山西，长治，襄垣',
    search_text: 'sx, zz, xy; shan xi, zhang zhi, xiang yuan; 山西，长治，襄垣',
    weaid: 1941
  },
  {
    display_text: '山西，长治，平顺',
    search_text: 'sx, zz, ps; shan xi, zhang zhi, ping shun; 山西，长治，平顺',
    weaid: 1435
  },
  {
    display_text: '山西，长治，武乡',
    search_text: 'sx, zz, wx; shan xi, zhang zhi, wu xiang; 山西，长治，武乡',
    weaid: 1810
  },
  {
    display_text: '山西，长治，沁县',
    search_text: 'sx, zz, qx; shan xi, zhang zhi, qin xian; 山西，长治，沁县',
    weaid: 1503
  },
  {
    display_text: '山西，长治，长子',
    search_text: 'sx, zz, zz; shan xi, zhang zhi, zhang zi; 山西，长治，长子',
    weaid: 596
  },
  {
    display_text: '山西，长治，沁源',
    search_text: 'sx, zz, qy; shan xi, zhang zhi, qin yuan; 山西，长治，沁源',
    weaid: 1518
  },
  {
    display_text: '山西，长治，壶关',
    search_text: 'sx, zz, hg; shan xi, zhang zhi, hu guan; 山西，长治，壶关',
    weaid: 872
  },
  {
    display_text: '山西，晋城，城区',
    search_text: 'sx, jc, cq; shan xi, jin cheng, cheng qu; 山西，晋城，城区',
    weaid: 335
  },
  {
    display_text: '山西，晋城，沁水',
    search_text: 'sx, jc, qs; shan xi, jin cheng, qin shui; 山西，晋城，沁水',
    weaid: 1488
  },
  {
    display_text: '山西，晋城，阳城',
    search_text: 'sx, jc, yc; shan xi, jin cheng, yang cheng; 山西，晋城，阳城',
    weaid: 1955
  },
  {
    display_text: '山西，晋城，陵川',
    search_text: 'sx, jc, lc; shan xi, jin cheng, ling chuan; 山西，晋城，陵川',
    weaid: 1117
  },
  {
    display_text: '山西，晋城，高平',
    search_text: 'sx, jc, gp; shan xi, jin cheng, gao ping; 山西，晋城，高平',
    weaid: 809
  },
  {
    display_text: '山西，晋城，泽州',
    search_text: 'sx, jc, zz; shan xi, jin cheng, ze zhou; 山西，晋城，泽州',
    weaid: 2330
  },
  {
    display_text: '山西，临汾，城区',
    search_text: 'sx, lf, cq; shan xi, lin fen, cheng qu; 山西，临汾，城区',
    weaid: 327
  },
  {
    display_text: '山西，临汾，曲沃',
    search_text: 'sx, lf, qw; shan xi, lin fen, qu wo; 山西，临汾，曲沃',
    weaid: 1499
  },
  {
    display_text: '山西，临汾，永和',
    search_text: 'sx, lf, yh; shan xi, lin fen, yong he; 山西，临汾，永和',
    weaid: 1985
  },
  {
    display_text: '山西，临汾，隰县',
    search_text: 'sx, lf, xx; shan xi, lin fen, xi xian; 山西，临汾，隰县',
    weaid: 1918
  },
  {
    display_text: '山西，临汾，大宁',
    search_text: 'sx, lf, dn; shan xi, lin fen, da ning; 山西，临汾，大宁',
    weaid: 643
  },
  {
    display_text: '山西，临汾，吉县',
    search_text: 'sx, lf, jx; shan xi, lin fen, ji xian; 山西，临汾，吉县',
    weaid: 1043
  },
  {
    display_text: '山西，临汾，襄汾',
    search_text: 'sx, lf, xf; shan xi, lin fen, xiang fen; 山西，临汾，襄汾',
    weaid: 1849
  },
  {
    display_text: '山西，临汾，蒲县',
    search_text: 'sx, lf, px; shan xi, lin fen, pu xian; 山西，临汾，蒲县',
    weaid: 1444
  },
  {
    display_text: '山西，临汾，汾西',
    search_text: 'sx, lf, fx; shan xi, lin fen, fen xi; 山西，临汾，汾西',
    weaid: 747
  },
  {
    display_text: '山西，临汾，洪洞',
    search_text: 'sx, lf, hd; shan xi, lin fen, hong dong; 山西，临汾，洪洞',
    weaid: 939
  },
  {
    display_text: '山西，临汾，霍州',
    search_text: 'sx, lf, hz; shan xi, lin fen, huo zhou; 山西，临汾，霍州',
    weaid: 967
  },
  {
    display_text: '山西，临汾，乡宁',
    search_text: 'sx, lf, xn; shan xi, lin fen, xiang ning; 山西，临汾，乡宁',
    weaid: 1889
  },
  {
    display_text: '山西，临汾，翼城',
    search_text: 'sx, lf, yc; shan xi, lin fen, yi cheng; 山西，临汾，翼城',
    weaid: 1956
  },
  {
    display_text: '山西，临汾，侯马',
    search_text: 'sx, lf, hm; shan xi, lin fen, hou ma; 山西，临汾，侯马',
    weaid: 2331
  },
  {
    display_text: '山西，临汾，浮山',
    search_text: 'sx, lf, fs; shan xi, lin fen, fu shan; 山西，临汾，浮山',
    weaid: 739
  },
  {
    display_text: '山西，临汾，安泽',
    search_text: 'sx, lf, az; shan xi, lin fen, an ze; 山西，临汾，安泽',
    weaid: 478
  },
  {
    display_text: '山西，临汾，古县',
    search_text: 'sx, lf, gx; shan xi, lin fen, gu xian; 山西，临汾，古县',
    weaid: 821
  },
  {
    display_text: '山西，运城，城区',
    search_text: 'sx, yc, cq; shan xi, yun cheng, cheng qu; 山西，运城，城区',
    weaid: 328
  },
  {
    display_text: '山西，运城，临猗',
    search_text: 'sx, yc, ly; shan xi, yun cheng, lin yi; 山西，运城，临猗',
    weaid: 1259
  },
  {
    display_text: '山西，运城，稷山',
    search_text: 'sx, yc, js; shan xi, yun cheng, ji shan; 山西，运城，稷山',
    weaid: 1025
  },
  {
    display_text: '山西，运城，万荣',
    search_text: 'sx, yc, wr; shan xi, yun cheng, wan rong; 山西，运城，万荣',
    weaid: 1796
  },
  {
    display_text: '山西，运城，河津',
    search_text: 'sx, yc, hj; shan xi, yun cheng, he jin; 山西，运城，河津',
    weaid: 877
  },
  {
    display_text: '山西，运城，新绛',
    search_text: 'sx, yc, xj; shan xi, yun cheng, xin jiang; 山西，运城，新绛',
    weaid: 1873
  },
  {
    display_text: '山西，运城，绛县',
    search_text: 'sx, yc, jx; shan xi, yun cheng, jiang xian; 山西，运城，绛县',
    weaid: 2332
  },
  {
    display_text: '山西，运城，闻喜',
    search_text: 'sx, yc, wx; shan xi, yun cheng, wen xi; 山西，运城，闻喜',
    weaid: 2333
  },
  {
    display_text: '山西，运城，垣曲',
    search_text: 'sx, yc, yq; shan xi, yun cheng, yuan qu; 山西，运城，垣曲',
    weaid: 2032
  },
  {
    display_text: '山西，运城，永济',
    search_text: 'sx, yc, yj; shan xi, yun cheng, yong ji; 山西，运城，永济',
    weaid: 2000
  },
  {
    display_text: '山西，运城，芮城',
    search_text: 'sx, yc, rc; shan xi, yun cheng, rui cheng; 山西，运城，芮城',
    weaid: 1545
  },
  {
    display_text: '山西，运城，夏县',
    search_text: 'sx, yc, xx; shan xi, yun cheng, xia xian; 山西，运城，夏县',
    weaid: 2334
  },
  {
    display_text: '山西，运城，平陆',
    search_text: 'sx, yc, pl; shan xi, yun cheng, ping lu; 山西，运城，平陆',
    weaid: 1426
  },
  {
    display_text: '山西，朔州，城区',
    search_text: 'sx, sz, cq; shan xi, shuo zhou, cheng qu; 山西，朔州，城区',
    weaid: 329
  },
  {
    display_text: '山西，朔州，平鲁',
    search_text: 'sx, sz, pl; shan xi, shuo zhou, ping lu; 山西，朔州，平鲁',
    weaid: 2335
  },
  {
    display_text: '山西，朔州，山阴',
    search_text: 'sx, sz, sy; shan xi, shuo zhou, shan yin; 山西，朔州，山阴',
    weaid: 1654
  },
  {
    display_text: '山西，朔州，右玉',
    search_text: 'sx, sz, yy; shan xi, shuo zhou, you yu; 山西，朔州，右玉',
    weaid: 2086
  },
  {
    display_text: '山西，朔州，应县',
    search_text: 'sx, sz, yx; shan xi, shuo zhou, ying xian; 山西，朔州，应县',
    weaid: 2061
  },
  {
    display_text: '山西，朔州，怀仁',
    search_text: 'sx, sz, hr; shan xi, shuo zhou, huai ren; 山西，朔州，怀仁',
    weaid: 923
  },
  {
    display_text: '山西，忻州，城区',
    search_text: 'sx, xz, cq; shan xi, xin zhou, cheng qu; 山西，忻州，城区',
    weaid: 330
  },
  {
    display_text: '山西，忻州，定襄',
    search_text: 'sx, xz, dx; shan xi, xin zhou, ding xiang; 山西，忻州，定襄',
    weaid: 670
  },
  {
    display_text: '山西，忻州，五台县',
    search_text: 'sx, xz, wtx; shan xi, xin zhou, wu tai xian; 山西，忻州，五台县',
    weaid: 2336
  },
  {
    display_text: '山西，忻州，河曲',
    search_text: 'sx, xz, hq; shan xi, xin zhou, he qu; 山西，忻州，河曲',
    weaid: 921
  },
  {
    display_text: '山西，忻州，偏关',
    search_text: 'sx, xz, pg; shan xi, xin zhou, pian guan; 山西，忻州，偏关',
    weaid: 1415
  },
  {
    display_text: '山西，忻州，神池',
    search_text: 'sx, xz, sc; shan xi, xin zhou, shen chi; 山西，忻州，神池',
    weaid: 1557
  },
  {
    display_text: '山西，忻州，宁武',
    search_text: 'sx, xz, nw; shan xi, xin zhou, ning wu; 山西，忻州，宁武',
    weaid: 1388
  },
  {
    display_text: '山西，忻州，代县',
    search_text: 'sx, xz, dx; shan xi, xin zhou, dai xian; 山西，忻州，代县',
    weaid: 671
  },
  {
    display_text: '山西，忻州，繁峙',
    search_text: 'sx, xz, fz; shan xi, xin zhou, fan zhi; 山西，忻州，繁峙',
    weaid: 767
  },
  {
    display_text: '山西，忻州，保德',
    search_text: 'sx, xz, bd; shan xi, xin zhou, bao de; 山西，忻州，保德',
    weaid: 485
  },
  {
    display_text: '山西，忻州，静乐',
    search_text: 'sx, xz, jl; shan xi, xin zhou, jing le; 山西，忻州，静乐',
    weaid: 2338
  },
  {
    display_text: '山西，忻州，岢岚',
    search_text: 'sx, xz, kl; shan xi, xin zhou, ke lan; 山西，忻州，岢岚',
    weaid: 1091
  },
  {
    display_text: '山西，忻州，五寨',
    search_text: 'sx, xz, wz; shan xi, xin zhou, wu zhai; 山西，忻州，五寨',
    weaid: 1828
  },
  {
    display_text: '山西，忻州，原平',
    search_text: 'sx, xz, yp; shan xi, xin zhou, yuan ping; 山西，忻州，原平',
    weaid: 2025
  },
  {
    display_text: '山西，吕梁，城区',
    search_text: 'sx, ll, cq; shan xi, lv liang, cheng qu; 山西，吕梁，城区',
    weaid: 336
  },
  {
    display_text: '山西，吕梁，离石',
    search_text: 'sx, ll, ls; shan xi, lv liang, li shi; 山西，吕梁，离石',
    weaid: 1202
  },
  {
    display_text: '山西，吕梁，临县',
    search_text: 'sx, ll, lx; shan xi, lv liang, lin xian; 山西，吕梁，临县',
    weaid: 1233
  },
  {
    display_text: '山西，吕梁，兴县',
    search_text: 'sx, ll, xx; shan xi, lv liang, xing xian; 山西，吕梁，兴县',
    weaid: 1919
  },
  {
    display_text: '山西，吕梁，岚县',
    search_text: 'sx, ll, lx; shan xi, lv liang, lan xian; 山西，吕梁，岚县',
    weaid: 1234
  },
  {
    display_text: '山西，吕梁，柳林',
    search_text: 'sx, ll, ll; shan xi, lv liang, liu lin; 山西，吕梁，柳林',
    weaid: 1171
  },
  {
    display_text: '山西，吕梁，石楼',
    search_text: 'sx, ll, sl; shan xi, lv liang, shi lou; 山西，吕梁，石楼',
    weaid: 1596
  },
  {
    display_text: '山西，吕梁，方山',
    search_text: 'sx, ll, fs; shan xi, lv liang, fang shan; 山西，吕梁，方山',
    weaid: 740
  },
  {
    display_text: '山西，吕梁，交口',
    search_text: 'sx, ll, jk; shan xi, lv liang, jiao kou; 山西，吕梁，交口',
    weaid: 1004
  },
  {
    display_text: '山西，吕梁，中阳',
    search_text: 'sx, ll, zy; shan xi, lv liang, zhong yang; 山西，吕梁，中阳',
    weaid: 2165
  },
  {
    display_text: '山西，吕梁，孝义',
    search_text: 'sx, ll, xy; shan xi, lv liang, xiao yi; 山西，吕梁，孝义',
    weaid: 1932
  },
  {
    display_text: '山西，吕梁，汾阳',
    search_text: 'sx, ll, fy; shan xi, lv liang, fen yang; 山西，吕梁，汾阳',
    weaid: 757
  },
  {
    display_text: '山西，吕梁，文水',
    search_text: 'sx, ll, ws; shan xi, lv liang, wen shui; 山西，吕梁，文水',
    weaid: 1797
  },
  {
    display_text: '山西，吕梁，交城',
    search_text: 'sx, ll, jc; shan xi, lv liang, jiao cheng; 山西，吕梁，交城',
    weaid: 992
  },
  {
    display_text: '陕西，西安，城区',
    search_text: 'sx, xa, cq; shan xi, xi an, cheng qu; 陕西，西安，城区',
    weaid: 316
  },
  {
    display_text: '陕西，西安，长安',
    search_text: 'sx, xa, ca; shan xi, xi an, chang an; 陕西，西安，长安',
    weaid: 525
  },
  {
    display_text: '陕西，西安，临潼',
    search_text: 'sx, xa, lt; shan xi, xi an, lin tong; 陕西，西安，临潼',
    weaid: 1228
  },
  {
    display_text: '陕西，西安，蓝田',
    search_text: 'sx, xa, lt; shan xi, xi an, lan tian; 陕西，西安，蓝田',
    weaid: 1139
  },
  {
    display_text: '陕西，西安，周至',
    search_text: 'sx, xa, zz; shan xi, xi an, zhou zhi; 陕西，西安，周至',
    weaid: 2182
  },
  {
    display_text: '陕西，西安，户县',
    search_text: 'sx, xa, hx; shan xi, xi an, hu xian; 陕西，西安，户县',
    weaid: 945
  },
  {
    display_text: '陕西，西安，高陵',
    search_text: 'sx, xa, gl; shan xi, xi an, gao ling; 陕西，西安，高陵',
    weaid: 799
  },
  {
    display_text: '陕西，咸阳，城区',
    search_text: 'sx, xy, cq; shan xi, xian yang, cheng qu; 陕西，咸阳，城区',
    weaid: 324
  },
  {
    display_text: '陕西，咸阳，三原',
    search_text: 'sx, xy, sy; shan xi, xian yang, san yuan; 陕西，咸阳，三原',
    weaid: 1658
  },
  {
    display_text: '陕西，咸阳，礼泉',
    search_text: 'sx, xy, lq; shan xi, xian yang, li quan; 陕西，咸阳，礼泉',
    weaid: 1198
  },
  {
    display_text: '陕西，咸阳，永寿',
    search_text: 'sx, xy, ys; shan xi, xian yang, yong shou; 陕西，咸阳，永寿',
    weaid: 2049
  },
  {
    display_text: '陕西，咸阳，淳化',
    search_text: 'sx, xy, ch; shan xi, xian yang, chun hua; 陕西，咸阳，淳化',
    weaid: 547
  },
  {
    display_text: '陕西，咸阳，泾阳',
    search_text: 'sx, xy, jy; shan xi, xian yang, jing yang; 陕西，咸阳，泾阳',
    weaid: 1062
  },
  {
    display_text: '陕西，咸阳，武功',
    search_text: 'sx, xy, wg; shan xi, xian yang, wu gong; 陕西，咸阳，武功',
    weaid: 1767
  },
  {
    display_text: '陕西，咸阳，乾县',
    search_text: 'sx, xy, qx; shan xi, xian yang, qian xian; 陕西，咸阳，乾县',
    weaid: 825
  },
  {
    display_text: '陕西，咸阳，彬县',
    search_text: 'sx, xy, bx; shan xi, xian yang, bin xian; 陕西，咸阳，彬县',
    weaid: 516
  },
  {
    display_text: '陕西，咸阳，长武',
    search_text: 'sx, xy, zw; shan xi, xian yang, zhang wu; 陕西，咸阳，长武',
    weaid: 579
  },
  {
    display_text: '陕西，咸阳，旬邑',
    search_text: 'sx, xy, xy; shan xi, xian yang, xun yi; 陕西，咸阳，旬邑',
    weaid: 1938
  },
  {
    display_text: '陕西，咸阳，兴平',
    search_text: 'sx, xy, xp; shan xi, xian yang, xing ping; 陕西，咸阳，兴平',
    weaid: 1894
  },
  {
    display_text: '陕西，延安，城区',
    search_text: 'sx, ya, cq; shan xi, yan an, cheng qu; 陕西，延安，城区',
    weaid: 317
  },
  {
    display_text: '陕西，延安，延长',
    search_text: 'sx, ya, yc; shan xi, yan an, yan chang; 陕西，延安，延长',
    weaid: 1967
  },
  {
    display_text: '陕西，延安，延川',
    search_text: 'sx, ya, yc; shan xi, yan an, yan chuan; 陕西，延安，延川',
    weaid: 1968
  },
  {
    display_text: '陕西，延安，子长',
    search_text: 'sx, ya, zz; shan xi, yan an, zi zhang; 陕西，延安，子长',
    weaid: 2103
  },
  {
    display_text: '陕西，延安，宜川',
    search_text: 'sx, ya, yc; shan xi, yan an, yi chuan; 陕西，延安，宜川',
    weaid: 1969
  },
  {
    display_text: '陕西，延安，富县',
    search_text: 'sx, ya, fx; shan xi, yan an, fu xian; 陕西，延安，富县',
    weaid: 754
  },
  {
    display_text: '陕西，延安，志丹',
    search_text: 'sx, ya, zd; shan xi, yan an, zhi dan; 陕西，延安，志丹',
    weaid: 2339
  },
  {
    display_text: '陕西，延安，安塞',
    search_text: 'sx, ya, as; shan xi, yan an, an sai; 陕西，延安，安塞',
    weaid: 468
  },
  {
    display_text: '陕西，延安，甘泉',
    search_text: 'sx, ya, gq; shan xi, yan an, gan quan; 陕西，延安，甘泉',
    weaid: 812
  },
  {
    display_text: '陕西，延安，洛川',
    search_text: 'sx, ya, lc; shan xi, yan an, luo chuan; 陕西，延安，洛川',
    weaid: 1132
  },
  {
    display_text: '陕西，延安，黄陵',
    search_text: 'sx, ya, hl; shan xi, yan an, huang ling; 陕西，延安，黄陵',
    weaid: 895
  },
  {
    display_text: '陕西，延安，黄龙',
    search_text: 'sx, ya, hl; shan xi, yan an, huang long; 陕西，延安，黄龙',
    weaid: 899
  },
  {
    display_text: '陕西，延安，吴起',
    search_text: 'sx, ya, wq; shan xi, yan an, wu qi; 陕西，延安，吴起',
    weaid: 2340
  },
  {
    display_text: '陕西，榆林，城区',
    search_text: 'sx, yl, cq; shan xi, yu lin, cheng qu; 陕西，榆林，城区',
    weaid: 318
  },
  {
    display_text: '陕西，榆林，府谷',
    search_text: 'sx, yl, fg; shan xi, yu lin, fu gu; 陕西，榆林，府谷',
    weaid: 716
  },
  {
    display_text: '陕西，榆林，神木',
    search_text: 'sx, yl, sm; shan xi, yu lin, shen mu; 陕西，榆林，神木',
    weaid: 1601
  },
  {
    display_text: '陕西，榆林，佳县',
    search_text: 'sx, yl, jx; shan xi, yu lin, jia xian; 陕西，榆林，佳县',
    weaid: 1057
  },
  {
    display_text: '陕西，榆林，定边',
    search_text: 'sx, yl, db; shan xi, yu lin, ding bian; 陕西，榆林，定边',
    weaid: 603
  },
  {
    display_text: '陕西，榆林，靖边',
    search_text: 'sx, yl, jb; shan xi, yu lin, jing bian; 陕西，榆林，靖边',
    weaid: 975
  },
  {
    display_text: '陕西，榆林，横山',
    search_text: 'sx, yl, hs; shan xi, yu lin, heng shan; 陕西，榆林，横山',
    weaid: 933
  },
  {
    display_text: '陕西，榆林，米脂',
    search_text: 'sx, yl, mz; shan xi, yu lin, mi zhi; 陕西，榆林，米脂',
    weaid: 1344
  },
  {
    display_text: '陕西，榆林，子洲',
    search_text: 'sx, yl, zz; shan xi, yu lin, zi zhou; 陕西，榆林，子洲',
    weaid: 2181
  },
  {
    display_text: '陕西，榆林，绥德',
    search_text: 'sx, yl, sd; shan xi, yu lin, sui de; 陕西，榆林，绥德',
    weaid: 1569
  },
  {
    display_text: '陕西，榆林，吴堡',
    search_text: 'sx, yl, wb; shan xi, yu lin, wu bu; 陕西，榆林，吴堡',
    weaid: 1749
  },
  {
    display_text: '陕西，榆林，清涧',
    search_text: 'sx, yl, qj; shan xi, yu lin, qing jian; 陕西，榆林，清涧',
    weaid: 1479
  },
  {
    display_text: '陕西，榆林，榆阳',
    search_text: 'sx, yl, yy; shan xi, yu lin, yu yang; 陕西，榆林，榆阳',
    weaid: 2341
  },
  {
    display_text: '陕西，渭南，城区',
    search_text: 'sx, wn, cq; shan xi, wei nan, cheng qu; 陕西，渭南，城区',
    weaid: 325
  },
  {
    display_text: '陕西，渭南，潼关',
    search_text: 'sx, wn, tg; shan xi, wei nan, tong guan; 陕西，渭南，潼关',
    weaid: 1685
  },
  {
    display_text: '陕西，渭南，大荔',
    search_text: 'sx, wn, dl; shan xi, wei nan, da li; 陕西，渭南，大荔',
    weaid: 635
  },
  {
    display_text: '陕西，渭南，白水',
    search_text: 'sx, wn, bs; shan xi, wei nan, bai shui; 陕西，渭南，白水',
    weaid: 511
  },
  {
    display_text: '陕西，渭南，富平',
    search_text: 'sx, wn, fp; shan xi, wei nan, fu ping; 陕西，渭南，富平',
    weaid: 731
  },
  {
    display_text: '陕西，渭南，蒲城',
    search_text: 'sx, wn, pc; shan xi, wei nan, pu cheng; 陕西，渭南，蒲城',
    weaid: 1411
  },
  {
    display_text: '陕西，渭南，澄城',
    search_text: 'sx, wn, cc; shan xi, wei nan, cheng cheng; 陕西，渭南，澄城',
    weaid: 532
  },
  {
    display_text: '陕西，渭南，合阳',
    search_text: 'sx, wn, hy; shan xi, wei nan, he yang; 陕西，渭南，合阳',
    weaid: 954
  },
  {
    display_text: '陕西，渭南，韩城',
    search_text: 'sx, wn, hc; shan xi, wei nan, han cheng; 陕西，渭南，韩城',
    weaid: 859
  },
  {
    display_text: '陕西，渭南，华阴',
    search_text: 'sx, wn, hy; shan xi, wei nan, hua yin; 陕西，渭南，华阴',
    weaid: 958
  },
  {
    display_text: '陕西，渭南，华州',
    search_text: 'sx, wn, hz; shan xi, wei nan, hua zhou; 陕西，渭南，华州',
    weaid: 2731
  },
  {
    display_text: '陕西，商洛，城区',
    search_text: 'sx, sl, cq; shan xi, shang luo, cheng qu; 陕西，商洛，城区',
    weaid: 320
  },
  {
    display_text: '陕西，商洛，洛南',
    search_text: 'sx, sl, ln; shan xi, shang luo, luo nan; 陕西，商洛，洛南',
    weaid: 1183
  },
  {
    display_text: '陕西，商洛，柞水',
    search_text: 'sx, sl, zs; shan xi, shang luo, zha shui; 陕西，商洛，柞水',
    weaid: 2153
  },
  {
    display_text: '陕西，商洛，商州',
    search_text: 'sx, sl, sz; shan xi, shang luo, shang zhou; 陕西，商洛，商州',
    weaid: 2342
  },
  {
    display_text: '陕西，商洛，镇安',
    search_text: 'sx, sl, za; shan xi, shang luo, zhen an; 陕西，商洛，镇安',
    weaid: 2097
  },
  {
    display_text: '陕西，商洛，丹凤',
    search_text: 'sx, sl, df; shan xi, shang luo, dan feng; 陕西，商洛，丹凤',
    weaid: 617
  },
  {
    display_text: '陕西，商洛，商南',
    search_text: 'sx, sl, sn; shan xi, shang luo, shang nan; 陕西，商洛，商南',
    weaid: 1603
  },
  {
    display_text: '陕西，商洛，山阳',
    search_text: 'sx, sl, sy; shan xi, shang luo, shan yang; 陕西，商洛，山阳',
    weaid: 1651
  },
  {
    display_text: '陕西，安康，城区',
    search_text: 'sx, ak, cq; shan xi, an kang, cheng qu; 陕西，安康，城区',
    weaid: 321
  },
  {
    display_text: '陕西，安康，紫阳',
    search_text: 'sx, ak, zy; shan xi, an kang, zi yang; 陕西，安康，紫阳',
    weaid: 2168
  },
  {
    display_text: '陕西，安康，石泉',
    search_text: 'sx, ak, sq; shan xi, an kang, shi quan; 陕西，安康，石泉',
    weaid: 1618
  },
  {
    display_text: '陕西，安康，汉阴',
    search_text: 'sx, ak, hy; shan xi, an kang, han yin; 陕西，安康，汉阴',
    weaid: 959
  },
  {
    display_text: '陕西，安康，旬阳',
    search_text: 'sx, ak, xy; shan xi, an kang, xun yang; 陕西，安康，旬阳',
    weaid: 1930
  },
  {
    display_text: '陕西，安康，岚皋',
    search_text: 'sx, ak, lg; shan xi, an kang, lan gao; 陕西，安康，岚皋',
    weaid: 1145
  },
  {
    display_text: '陕西，安康，平利',
    search_text: 'sx, ak, pl; shan xi, an kang, ping li; 陕西，安康，平利',
    weaid: 1425
  },
  {
    display_text: '陕西，安康，白河',
    search_text: 'sx, ak, bh; shan xi, an kang, bai he; 陕西，安康，白河',
    weaid: 492
  },
  {
    display_text: '陕西，安康，镇坪',
    search_text: 'sx, ak, zp; shan xi, an kang, zhen ping; 陕西，安康，镇坪',
    weaid: 2144
  },
  {
    display_text: '陕西，安康，宁陕',
    search_text: 'sx, ak, ns; shan xi, an kang, ning shan; 陕西，安康，宁陕',
    weaid: 1387
  },
  {
    display_text: '陕西，汉中，城区',
    search_text: 'sx, hz, cq; shan xi, han zhong, cheng qu; 陕西，汉中，城区',
    weaid: 322
  },
  {
    display_text: '陕西，汉中，略阳',
    search_text: 'sx, hz, ly; shan xi, han zhong, lve yang; 陕西，汉中，略阳',
    weaid: 1257
  },
  {
    display_text: '陕西，汉中，勉县',
    search_text: 'sx, hz, mx; shan xi, han zhong, mian xian; 陕西，汉中，勉县',
    weaid: 1334
  },
  {
    display_text: '陕西，汉中，留坝',
    search_text: 'sx, hz, lb; shan xi, han zhong, liu ba; 陕西，汉中，留坝',
    weaid: 1108
  },
  {
    display_text: '陕西，汉中，洋县',
    search_text: 'sx, hz, yx; shan xi, han zhong, yang xian; 陕西，汉中，洋县',
    weaid: 2076
  },
  {
    display_text: '陕西，汉中，城固',
    search_text: 'sx, hz, cg; shan xi, han zhong, cheng gu; 陕西，汉中，城固',
    weaid: 540
  },
  {
    display_text: '陕西，汉中，西乡',
    search_text: 'sx, hz, xx; shan xi, han zhong, xi xiang; 陕西，汉中，西乡',
    weaid: 1924
  },
  {
    display_text: '陕西，汉中，佛坪',
    search_text: 'sx, hz, fp; shan xi, han zhong, fu ping; 陕西，汉中，佛坪',
    weaid: 732
  },
  {
    display_text: '陕西，汉中，宁强',
    search_text: 'sx, hz, nq; shan xi, han zhong, ning qiang; 陕西，汉中，宁强',
    weaid: 1386
  },
  {
    display_text: '陕西，汉中，南郑',
    search_text: 'sx, hz, nz; shan xi, han zhong, nan zheng; 陕西，汉中，南郑',
    weaid: 1401
  },
  {
    display_text: '陕西，汉中，镇巴',
    search_text: 'sx, hz, zb; shan xi, han zhong, zhen ba; 陕西，汉中，镇巴',
    weaid: 2098
  },
  {
    display_text: '陕西，宝鸡，城区',
    search_text: 'sx, bj, cq; shan xi, bao ji, cheng qu; 陕西，宝鸡，城区',
    weaid: 323
  },
  {
    display_text: '陕西，宝鸡，千阳',
    search_text: 'sx, bj, qy; shan xi, bao ji, qian yang; 陕西，宝鸡，千阳',
    weaid: 1515
  },
  {
    display_text: '陕西，宝鸡，麟游',
    search_text: 'sx, bj, ly; shan xi, bao ji, lin you; 陕西，宝鸡，麟游',
    weaid: 1263
  },
  {
    display_text: '陕西，宝鸡，岐山',
    search_text: 'sx, bj, qs; shan xi, bao ji, qi shan; 陕西，宝鸡，岐山',
    weaid: 1492
  },
  {
    display_text: '陕西，宝鸡，凤翔',
    search_text: 'sx, bj, fx; shan xi, bao ji, feng xiang; 陕西，宝鸡，凤翔',
    weaid: 756
  },
  {
    display_text: '陕西，宝鸡，扶风',
    search_text: 'sx, bj, ff; shan xi, bao ji, fu feng; 陕西，宝鸡，扶风',
    weaid: 711
  },
  {
    display_text: '陕西，宝鸡，眉县',
    search_text: 'sx, bj, mx; shan xi, bao ji, mei xian; 陕西，宝鸡，眉县',
    weaid: 1335
  },
  {
    display_text: '陕西，宝鸡，太白',
    search_text: 'sx, bj, tb; shan xi, bao ji, tai bai; 陕西，宝鸡，太白',
    weaid: 1670
  },
  {
    display_text: '陕西，宝鸡，凤县',
    search_text: 'sx, bj, fx; shan xi, bao ji, feng xian; 陕西，宝鸡，凤县',
    weaid: 755
  },
  {
    display_text: '陕西，宝鸡，陇县',
    search_text: 'sx, bj, lx; shan xi, bao ji, long xian; 陕西，宝鸡，陇县',
    weaid: 1247
  },
  {
    display_text: '陕西，宝鸡，陈仓',
    search_text: 'sx, bj, cc; shan xi, bao ji, chen cang; 陕西，宝鸡，陈仓',
    weaid: 2343
  },
  {
    display_text: '陕西，铜川，城区',
    search_text: 'sx, tc, cq; shan xi, tong chuan, cheng qu; 陕西，铜川，城区',
    weaid: 319
  },
  {
    display_text: '陕西，铜川，宜君',
    search_text: 'sx, tc, yj; shan xi, tong chuan, yi jun; 陕西，铜川，宜君',
    weaid: 2003
  },
  {
    display_text: '陕西，铜川，耀州',
    search_text: 'sx, tc, yz; shan xi, tong chuan, yao zhou; 陕西，铜川，耀州',
    weaid: 2344
  },
  {
    display_text: '陕西，杨凌，城区',
    search_text: 'sx, yl, cq; shan xi, yang ling, cheng qu; 陕西，杨凌，城区',
    weaid: 2345
  },
  {
    display_text: '上海，城区',
    search_text: 'sh, cq; shang hai, cheng qu; 上海，城区',
    weaid: 36
  },
  {
    display_text: '上海，闵行',
    search_text: 'sh, mx; shang hai, min xing; 上海，闵行',
    weaid: 46
  },
  {
    display_text: '上海，宝山',
    search_text: 'sh, bs; shang hai, bao shan; 上海，宝山',
    weaid: 37
  },
  {
    display_text: '上海，嘉定',
    search_text: 'sh, jd; shang hai, jia ding; 上海，嘉定',
    weaid: 38
  },
  {
    display_text: '上海，浦东新区',
    search_text: 'sh, pdxq; shang hai, pu dong xin qu; 上海，浦东新区',
    weaid: 40
  },
  {
    display_text: '上海，金山',
    search_text: 'sh, js; shang hai, jin shan; 上海，金山',
    weaid: 47
  },
  {
    display_text: '上海，青浦',
    search_text: 'sh, qp; shang hai, qing pu; 上海，青浦',
    weaid: 41
  },
  {
    display_text: '上海，松江',
    search_text: 'sh, sj; shang hai, song jiang; 上海，松江',
    weaid: 42
  },
  {
    display_text: '上海，奉贤',
    search_text: 'sh, fx; shang hai, feng xian; 上海，奉贤',
    weaid: 43
  },
  {
    display_text: '上海，崇明',
    search_text: 'sh, cm; shang hai, chong ming; 上海，崇明',
    weaid: 44
  },
  {
    display_text: '上海，徐汇',
    search_text: 'sh, xh; shang hai, xu hui; 上海，徐汇',
    weaid: 45
  },
  {
    display_text: '四川，成都，城区',
    search_text: 'sc, cd, cq; si chuan, cheng du, cheng qu; 四川，成都，城区',
    weaid: 265
  },
  {
    display_text: '四川，成都，龙泉驿',
    search_text: 'sc, cd, lqy; si chuan, cheng du, long quan yi; 四川，成都，龙泉驿',
    weaid: 2558
  },
  {
    display_text: '四川，成都，新都',
    search_text: 'sc, cd, xd; si chuan, cheng du, xin dou; 四川，成都，新都',
    weaid: 1846
  },
  {
    display_text: '四川，成都，温江',
    search_text: 'sc, cd, wj; si chuan, cheng du, wen jiang; 四川，成都，温江',
    weaid: 1775
  },
  {
    display_text: '四川，成都，金堂',
    search_text: 'sc, cd, jt; si chuan, cheng du, jin tang; 四川，成都，金堂',
    weaid: 1037
  },
  {
    display_text: '四川，成都，双流',
    search_text: 'sc, cd, sl; si chuan, cheng du, shuang liu; 四川，成都，双流',
    weaid: 1594
  },
  {
    display_text: '四川，成都，郫县',
    search_text: 'sc, cd, px; si chuan, cheng du, pi xian; 四川，成都，郫县',
    weaid: 1447
  },
  {
    display_text: '四川，成都，大邑',
    search_text: 'sc, cd, dy; si chuan, cheng du, da yi; 四川，成都，大邑',
    weaid: 683
  },
  {
    display_text: '四川，成都，蒲江',
    search_text: 'sc, cd, pj; si chuan, cheng du, pu jiang; 四川，成都，蒲江',
    weaid: 1420
  },
  {
    display_text: '四川，成都，新津',
    search_text: 'sc, cd, xj; si chuan, cheng du, xin jin; 四川，成都，新津',
    weaid: 1877
  },
  {
    display_text: '四川，成都，都江堰',
    search_text: 'sc, cd, djy; si chuan, cheng du, du jiang yan; 四川，成都，都江堰',
    weaid: 629
  },
  {
    display_text: '四川，成都，彭州',
    search_text: 'sc, cd, pz; si chuan, cheng du, peng zhou; 四川，成都，彭州',
    weaid: 1462
  },
  {
    display_text: '四川，成都，邛崃',
    search_text: 'sc, cd, ql; si chuan, cheng du, qiong lai; 四川，成都，邛崃',
    weaid: 1480
  },
  {
    display_text: '四川，成都，崇州',
    search_text: 'sc, cd, cz; si chuan, cheng du, chong zhou; 四川，成都，崇州',
    weaid: 595
  },
  {
    display_text: '四川，成都，青白江',
    search_text: 'sc, cd, qbj; si chuan, cheng du, qing bai jiang; 四川，成都，青白江',
    weaid: 2559
  },
  {
    display_text: '四川，成都，简阳',
    search_text: 'sc, cd, jy; si chuan, cheng du, jian yang; 四川，成都，简阳',
    weaid: 1061
  },
  {
    display_text: '四川，攀枝花，城区',
    search_text: 'sc, pzh, cq; si chuan, pan zhi hua, cheng qu; 四川，攀枝花，城区',
    weaid: 285
  },
  {
    display_text: '四川，攀枝花，仁和',
    search_text: 'sc, pzh, rh; si chuan, pan zhi hua, ren he; 四川，攀枝花，仁和',
    weaid: 2560
  },
  {
    display_text: '四川，攀枝花，米易',
    search_text: 'sc, pzh, my; si chuan, pan zhi hua, mi yi; 四川，攀枝花，米易',
    weaid: 1341
  },
  {
    display_text: '四川，攀枝花，盐边',
    search_text: 'sc, pzh, yb; si chuan, pan zhi hua, yan bian; 四川，攀枝花，盐边',
    weaid: 1953
  },
  {
    display_text: '四川，自贡，城区',
    search_text: 'sc, zg, cq; si chuan, zi gong, cheng qu; 四川，自贡，城区',
    weaid: 266
  },
  {
    display_text: '四川，自贡，富顺',
    search_text: 'sc, zg, fs; si chuan, zi gong, fu shun; 四川，自贡，富顺',
    weaid: 743
  },
  {
    display_text: '四川，自贡，荣县',
    search_text: 'sc, zg, rx; si chuan, zi gong, rong xian; 四川，自贡，荣县',
    weaid: 1547
  },
  {
    display_text: '四川，绵阳，城区',
    search_text: 'sc, my, cq; si chuan, mian yang, cheng qu; 四川，绵阳，城区',
    weaid: 267
  },
  {
    display_text: '四川，绵阳，三台',
    search_text: 'sc, my, st; si chuan, mian yang, san tai; 四川，绵阳，三台',
    weaid: 1629
  },
  {
    display_text: '四川，绵阳，盐亭',
    search_text: 'sc, my, yt; si chuan, mian yang, yan ting; 四川，绵阳，盐亭',
    weaid: 2054
  },
  {
    display_text: '四川，绵阳，梓潼',
    search_text: 'sc, my, zt; si chuan, mian yang, zi tong; 四川，绵阳，梓潼',
    weaid: 2155
  },
  {
    display_text: '四川，绵阳，北川',
    search_text: 'sc, my, bc; si chuan, mian yang, bei chuan; 四川，绵阳，北川',
    weaid: 2561
  },
  {
    display_text: '四川，绵阳，平武',
    search_text: 'sc, my, pw; si chuan, mian yang, ping wu; 四川，绵阳，平武',
    weaid: 1443
  },
  {
    display_text: '四川，绵阳，江油',
    search_text: 'sc, my, jy; si chuan, mian yang, jiang you; 四川，绵阳，江油',
    weaid: 1069
  },
  {
    display_text: '四川，绵阳，安州',
    search_text: 'sc, my, az; si chuan, mian yang, an zhou; 四川，绵阳，安州',
    weaid: 2728
  },
  {
    display_text: '四川，南充，城区',
    search_text: 'sc, nc, cq; si chuan, nan chong, cheng qu; 四川，南充，城区',
    weaid: 268
  },
  {
    display_text: '四川，南充，南部',
    search_text: 'sc, nc, nb; si chuan, nan chong, nan bu; 四川，南充，南部',
    weaid: 1353
  },
  {
    display_text: '四川，南充，营山',
    search_text: 'sc, nc, ys; si chuan, nan chong, ying shan; 四川，南充，营山',
    weaid: 2046
  },
  {
    display_text: '四川，南充，蓬安',
    search_text: 'sc, nc, pa; si chuan, nan chong, peng an; 四川，南充，蓬安',
    weaid: 1403
  },
  {
    display_text: '四川，南充，仪陇',
    search_text: 'sc, nc, yl; si chuan, nan chong, yi long; 四川，南充，仪陇',
    weaid: 2013
  },
  {
    display_text: '四川，南充，西充',
    search_text: 'sc, nc, xc; si chuan, nan chong, xi chong; 四川，南充，西充',
    weaid: 1841
  },
  {
    display_text: '四川，南充，阆中',
    search_text: 'sc, nc, lz; si chuan, nan chong, lang zhong; 四川，南充，阆中',
    weaid: 2562
  },
  {
    display_text: '四川，达州，城区',
    search_text: 'sc, dz, cq; si chuan, da zhou, cheng qu; 四川，达州，城区',
    weaid: 269
  },
  {
    display_text: '四川，达州，宣汉',
    search_text: 'sc, dz, xh; si chuan, da zhou, xuan han; 四川，达州，宣汉',
    weaid: 1857
  },
  {
    display_text: '四川，达州，开江',
    search_text: 'sc, dz, kj; si chuan, da zhou, kai jiang; 四川，达州，开江',
    weaid: 1090
  },
  {
    display_text: '四川，达州，大竹',
    search_text: 'sc, dz, dz; si chuan, da zhou, da zhu; 四川，达州，大竹',
    weaid: 689
  },
  {
    display_text: '四川，达州，渠县',
    search_text: 'sc, dz, qx; si chuan, da zhou, qu xian; 四川，达州，渠县',
    weaid: 1508
  },
  {
    display_text: '四川，达州，万源',
    search_text: 'sc, dz, wy; si chuan, da zhou, wan yuan; 四川，达州，万源',
    weaid: 1824
  },
  {
    display_text: '四川，达州，通川',
    search_text: 'sc, dz, tc; si chuan, da zhou, tong chuan; 四川，达州，通川',
    weaid: 2563
  },
  {
    display_text: '四川，达州，达川',
    search_text: 'sc, dz, dc; si chuan, da zhou, da chuan; 四川，达州，达川',
    weaid: 2564
  },
  {
    display_text: '四川，遂宁，城区',
    search_text: 'sc, sn, cq; si chuan, sui ning, cheng qu; 四川，遂宁，城区',
    weaid: 270
  },
  {
    display_text: '四川，遂宁，蓬溪',
    search_text: 'sc, sn, px; si chuan, sui ning, peng xi; 四川，遂宁，蓬溪',
    weaid: 1448
  },
  {
    display_text: '四川，遂宁，射洪',
    search_text: 'sc, sn, sh; si chuan, sui ning, she hong; 四川，遂宁，射洪',
    weaid: 1584
  },
  {
    display_text: '四川，广安，城区',
    search_text: 'sc, ga, cq; si chuan, guang an, cheng qu; 四川，广安，城区',
    weaid: 271
  },
  {
    display_text: '四川，广安，岳池',
    search_text: 'sc, ga, yc; si chuan, guang an, yue chi; 四川，广安，岳池',
    weaid: 1966
  },
  {
    display_text: '四川，广安，武胜',
    search_text: 'sc, ga, ws; si chuan, guang an, wu sheng; 四川，广安，武胜',
    weaid: 1801
  },
  {
    display_text: '四川，广安，邻水',
    search_text: 'sc, ga, ls; si chuan, guang an, lin shui; 四川，广安，邻水',
    weaid: 1215
  },
  {
    display_text: '四川，广安，华蓥',
    search_text: 'sc, ga, hy; si chuan, guang an, hua ying; 四川，广安，华蓥',
    weaid: 2565
  },
  {
    display_text: '四川，巴中，城区',
    search_text: 'sc, bz, cq; si chuan, ba zhong, cheng qu; 四川，巴中，城区',
    weaid: 272
  },
  {
    display_text: '四川，巴中，通江',
    search_text: 'sc, bz, tj; si chuan, ba zhong, tong jiang; 四川，巴中，通江',
    weaid: 1697
  },
  {
    display_text: '四川，巴中，南江',
    search_text: 'sc, bz, nj; si chuan, ba zhong, nan jiang; 四川，巴中，南江',
    weaid: 1371
  },
  {
    display_text: '四川，巴中，平昌',
    search_text: 'sc, bz, pc; si chuan, ba zhong, ping chang; 四川，巴中，平昌',
    weaid: 1410
  },
  {
    display_text: '四川，泸州，城区',
    search_text: 'sc, lz, cq; si chuan, lu zhou, cheng qu; 四川，泸州，城区',
    weaid: 273
  },
  {
    display_text: '四川，泸州，泸县',
    search_text: 'sc, lz, lx; si chuan, lu zhou, lu xian; 四川，泸州，泸县',
    weaid: 2566
  },
  {
    display_text: '四川，泸州，合江',
    search_text: 'sc, lz, hj; si chuan, lu zhou, he jiang; 四川，泸州，合江',
    weaid: 882
  },
  {
    display_text: '四川，泸州，叙永',
    search_text: 'sc, lz, xy; si chuan, lu zhou, xu yong; 四川，泸州，叙永',
    weaid: 1940
  },
  {
    display_text: '四川，泸州，古蔺',
    search_text: 'sc, lz, gl; si chuan, lu zhou, gu lin; 四川，泸州，古蔺',
    weaid: 797
  },
  {
    display_text: '四川，泸州，纳溪',
    search_text: 'sc, lz, nx; si chuan, lu zhou, na xi; 四川，泸州，纳溪',
    weaid: 1393
  },
  {
    display_text: '四川，宜宾，城区',
    search_text: 'sc, yb, cq; si chuan, yi bin, cheng qu; 四川，宜宾，城区',
    weaid: 274
  },
  {
    display_text: '四川，宜宾，宜宾县',
    search_text: 'sc, yb, ybx; si chuan, yi bin, yi bin xian; 四川，宜宾，宜宾县',
    weaid: 2567
  },
  {
    display_text: '四川，宜宾，南溪',
    search_text: 'sc, yb, nx; si chuan, yi bin, nan xi; 四川，宜宾，南溪',
    weaid: 1394
  },
  {
    display_text: '四川，宜宾，江安',
    search_text: 'sc, yb, ja; si chuan, yi bin, jiang an; 四川，宜宾，江安',
    weaid: 974
  },
  {
    display_text: '四川，宜宾，长宁',
    search_text: 'sc, yb, zn; si chuan, yi bin, zhang ning; 四川，宜宾，长宁',
    weaid: 562
  },
  {
    display_text: '四川，宜宾，高县',
    search_text: 'sc, yb, gx; si chuan, yi bin, gao xian; 四川，宜宾，高县',
    weaid: 823
  },
  {
    display_text: '四川，宜宾，珙县',
    search_text: 'sc, yb, gx; si chuan, yi bin, gong xian; 四川，宜宾，珙县',
    weaid: 824
  },
  {
    display_text: '四川，宜宾，筠连',
    search_text: 'sc, yb, yl; si chuan, yi bin, yun lian; 四川，宜宾，筠连',
    weaid: 2010
  },
  {
    display_text: '四川，宜宾，兴文',
    search_text: 'sc, yb, xw; si chuan, yi bin, xing wen; 四川，宜宾，兴文',
    weaid: 1911
  },
  {
    display_text: '四川，宜宾，屏山',
    search_text: 'sc, yb, ps; si chuan, yi bin, ping shan; 四川，宜宾，屏山',
    weaid: 1436
  },
  {
    display_text: '四川，内江，城区',
    search_text: 'sc, nj, cq; si chuan, nei jiang, cheng qu; 四川，内江，城区',
    weaid: 275
  },
  {
    display_text: '四川，内江，东兴',
    search_text: 'sc, nj, dx; si chuan, nei jiang, dong xing; 四川，内江，东兴',
    weaid: 2568
  },
  {
    display_text: '四川，内江，威远',
    search_text: 'sc, nj, wy; si chuan, nei jiang, wei yuan; 四川，内江，威远',
    weaid: 1826
  },
  {
    display_text: '四川，内江，资中',
    search_text: 'sc, nj, zz; si chuan, nei jiang, zi zhong; 四川，内江，资中',
    weaid: 2183
  },
  {
    display_text: '四川，内江，隆昌',
    search_text: 'sc, nj, lc; si chuan, nei jiang, long chang; 四川，内江，隆昌',
    weaid: 1129
  },
  {
    display_text: '四川，资阳，城区',
    search_text: 'sc, zy, cq; si chuan, zi yang, cheng qu; 四川，资阳，城区',
    weaid: 276
  },
  {
    display_text: '四川，资阳，安岳',
    search_text: 'sc, zy, ay; si chuan, zi yang, an yue; 四川，资阳，安岳',
    weaid: 477
  },
  {
    display_text: '四川，资阳，乐至',
    search_text: 'sc, zy, lz; si chuan, zi yang, le zhi; 四川，资阳，乐至',
    weaid: 1276
  },
  {
    display_text: '四川，乐山，城区',
    search_text: 'sc, ls, cq; si chuan, le shan, cheng qu; 四川，乐山，城区',
    weaid: 277
  },
  {
    display_text: '四川，乐山，犍为',
    search_text: 'sc, ls, qw; si chuan, le shan, qian wei; 四川，乐山，犍为',
    weaid: 1040
  },
  {
    display_text: '四川，乐山，井研',
    search_text: 'sc, ls, jy; si chuan, le shan, jing yan; 四川，乐山，井研',
    weaid: 1063
  },
  {
    display_text: '四川，乐山，夹江',
    search_text: 'sc, ls, jj; si chuan, le shan, jia jiang; 四川，乐山，夹江',
    weaid: 1003
  },
  {
    display_text: '四川，乐山，沐川',
    search_text: 'sc, ls, mc; si chuan, le shan, mu chuan; 四川，乐山，沐川',
    weaid: 1287
  },
  {
    display_text: '四川，乐山，峨边',
    search_text: 'sc, ls, eb; si chuan, le shan, e bian; 四川，乐山，峨边',
    weaid: 692
  },
  {
    display_text: '四川，乐山，马边',
    search_text: 'sc, ls, mb; si chuan, le shan, ma bian; 四川，乐山，马边',
    weaid: 1282
  },
  {
    display_text: '四川，乐山，峨眉山',
    search_text: 'sc, ls, ems; si chuan, le shan, e mei shan; 四川，乐山，峨眉山',
    weaid: 696
  },
  {
    display_text: '四川，眉山，城区',
    search_text: 'sc, ms, cq; si chuan, mei shan, cheng qu; 四川，眉山，城区',
    weaid: 278
  },
  {
    display_text: '四川，眉山，仁寿',
    search_text: 'sc, ms, rs; si chuan, mei shan, ren shou; 四川，眉山，仁寿',
    weaid: 1543
  },
  {
    display_text: '四川，眉山，彭山',
    search_text: 'sc, ms, ps; si chuan, mei shan, peng shan; 四川，眉山，彭山',
    weaid: 1438
  },
  {
    display_text: '四川，眉山，洪雅',
    search_text: 'sc, ms, hy; si chuan, mei shan, hong ya; 四川，眉山，洪雅',
    weaid: 956
  },
  {
    display_text: '四川，眉山，丹棱',
    search_text: 'sc, ms, dl; si chuan, mei shan, dan leng; 四川，眉山，丹棱',
    weaid: 636
  },
  {
    display_text: '四川，眉山，青神',
    search_text: 'sc, ms, qs; si chuan, mei shan, qing shen; 四川，眉山，青神',
    weaid: 1495
  },
  {
    display_text: '四川，凉山，城区',
    search_text: 'sc, ls, cq; si chuan, liang shan, cheng qu; 四川，凉山，城区',
    weaid: 279
  },
  {
    display_text: '四川，凉山，木里',
    search_text: 'sc, ls, ml; si chuan, liang shan, mu li; 四川，凉山，木里',
    weaid: 500
  },
  {
    display_text: '四川，凉山，盐源',
    search_text: 'sc, ls, yy; si chuan, liang shan, yan yuan; 四川，凉山，盐源',
    weaid: 1269
  },
  {
    display_text: '四川，凉山，德昌',
    search_text: 'sc, ls, dc; si chuan, liang shan, de chang; 四川，凉山，德昌',
    weaid: 611
  },
  {
    display_text: '四川，凉山，会理',
    search_text: 'sc, ls, hl; si chuan, liang shan, hui li; 四川，凉山，会理',
    weaid: 896
  },
  {
    display_text: '四川，凉山，会东',
    search_text: 'sc, ls, hd; si chuan, liang shan, hui dong; 四川，凉山，会东',
    weaid: 867
  },
  {
    display_text: '四川，凉山，宁南',
    search_text: 'sc, ls, nn; si chuan, liang shan, ning nan; 四川，凉山，宁南',
    weaid: 1384
  },
  {
    display_text: '四川，凉山，普格',
    search_text: 'sc, ls, pg; si chuan, liang shan, pu ge; 四川，凉山，普格',
    weaid: 490
  },
  {
    display_text: '四川，凉山，西昌',
    search_text: 'sc, ls, xc; si chuan, liang shan, xi chang; 四川，凉山，西昌',
    weaid: 1840
  },
  {
    display_text: '四川，凉山，金阳',
    search_text: 'sc, ls, jy; si chuan, liang shan, jin yang; 四川，凉山，金阳',
    weaid: 1064
  },
  {
    display_text: '四川，凉山，昭觉',
    search_text: 'sc, ls, zj; si chuan, liang shan, zhao jue; 四川，凉山，昭觉',
    weaid: 792
  },
  {
    display_text: '四川，凉山，喜德',
    search_text: 'sc, ls, xd; si chuan, liang shan, xi de; 四川，凉山，喜德',
    weaid: 1844
  },
  {
    display_text: '四川，凉山，冕宁',
    search_text: 'sc, ls, mn; si chuan, liang shan, mian ning; 四川，凉山，冕宁',
    weaid: 1318
  },
  {
    display_text: '四川，凉山，越西',
    search_text: 'sc, ls, yx; si chuan, liang shan, yue xi; 四川，凉山，越西',
    weaid: 2075
  },
  {
    display_text: '四川，凉山，甘洛',
    search_text: 'sc, ls, gl; si chuan, liang shan, gan luo; 四川，凉山，甘洛',
    weaid: 801
  },
  {
    display_text: '四川，凉山，雷波',
    search_text: 'sc, ls, lb; si chuan, liang shan, lei bo; 四川，凉山，雷波',
    weaid: 1112
  },
  {
    display_text: '四川，凉山，美姑',
    search_text: 'sc, ls, mg; si chuan, liang shan, mei gu; 四川，凉山，美姑',
    weaid: 1296
  },
  {
    display_text: '四川，凉山，布拖',
    search_text: 'sc, ls, bt; si chuan, liang shan, bu tuo; 四川，凉山，布拖',
    weaid: 513
  },
  {
    display_text: '四川，雅安，城区',
    search_text: 'sc, ya, cq; si chuan, ya an, cheng qu; 四川，雅安，城区',
    weaid: 280
  },
  {
    display_text: '四川，雅安，名山',
    search_text: 'sc, ya, ms; si chuan, ya an, ming shan; 四川，雅安，名山',
    weaid: 1331
  },
  {
    display_text: '四川，雅安，荥经',
    search_text: 'sc, ya, xj; si chuan, ya an, xing jing; 四川，雅安，荥经',
    weaid: 2570
  },
  {
    display_text: '四川，雅安，汉源',
    search_text: 'sc, ya, hy; si chuan, ya an, han yuan; 四川，雅安，汉源',
    weaid: 964
  },
  {
    display_text: '四川，雅安，石棉',
    search_text: 'sc, ya, sm; si chuan, ya an, shi mian; 四川，雅安，石棉',
    weaid: 1600
  },
  {
    display_text: '四川，雅安，天全',
    search_text: 'sc, ya, tq; si chuan, ya an, tian quan; 四川，雅安，天全',
    weaid: 1720
  },
  {
    display_text: '四川，雅安，芦山',
    search_text: 'sc, ya, ls; si chuan, ya an, lu shan; 四川，雅安，芦山',
    weaid: 1218
  },
  {
    display_text: '四川，雅安，宝兴',
    search_text: 'sc, ya, bx; si chuan, ya an, bao xing; 四川，雅安，宝兴',
    weaid: 517
  },
  {
    display_text: '四川，甘孜，城区',
    search_text: 'sc, gz, cq; si chuan, gan zi, cheng qu; 四川，甘孜，城区',
    weaid: 281
  },
  {
    display_text: '四川，甘孜，康定',
    search_text: 'sc, gz, kd; si chuan, gan zi, kang ding; 四川，甘孜，康定',
    weaid: 1085
  },
  {
    display_text: '四川，甘孜，泸定',
    search_text: 'sc, gz, ld; si chuan, gan zi, lu ding; 四川，甘孜，泸定',
    weaid: 2571
  },
  {
    display_text: '四川，甘孜，丹巴',
    search_text: 'sc, gz, db; si chuan, gan zi, dan ba; 四川，甘孜，丹巴',
    weaid: 2572
  },
  {
    display_text: '四川，甘孜，九龙',
    search_text: 'sc, gz, jl; si chuan, gan zi, jiu long; 四川，甘孜，九龙',
    weaid: 2573
  },
  {
    display_text: '四川，甘孜，雅江',
    search_text: 'sc, gz, yj; si chuan, gan zi, ya jiang; 四川，甘孜，雅江',
    weaid: 2574
  },
  {
    display_text: '四川，甘孜，道孚',
    search_text: 'sc, gz, df; si chuan, gan zi, dao fu; 四川，甘孜，道孚',
    weaid: 2575
  },
  {
    display_text: '四川，甘孜，炉霍',
    search_text: 'sc, gz, lh; si chuan, gan zi, lu huo; 四川，甘孜，炉霍',
    weaid: 2576
  },
  {
    display_text: '四川，甘孜，新龙',
    search_text: 'sc, gz, xl; si chuan, gan zi, xin long; 四川，甘孜，新龙',
    weaid: 2577
  },
  {
    display_text: '四川，甘孜，德格',
    search_text: 'sc, gz, dg; si chuan, gan zi, de ge; 四川，甘孜，德格',
    weaid: 2578
  },
  {
    display_text: '四川，甘孜，白玉',
    search_text: 'sc, gz, by; si chuan, gan zi, bai yu; 四川，甘孜，白玉',
    weaid: 2579
  },
  {
    display_text: '四川，甘孜，石渠',
    search_text: 'sc, gz, sq; si chuan, gan zi, shi qu; 四川，甘孜，石渠',
    weaid: 2580
  },
  {
    display_text: '四川，甘孜，色达',
    search_text: 'sc, gz, sd; si chuan, gan zi, se da; 四川，甘孜，色达',
    weaid: 2581
  },
  {
    display_text: '四川，甘孜，理塘',
    search_text: 'sc, gz, lt; si chuan, gan zi, li tang; 四川，甘孜，理塘',
    weaid: 2582
  },
  {
    display_text: '四川，甘孜，巴塘',
    search_text: 'sc, gz, bt; si chuan, gan zi, ba tang; 四川，甘孜，巴塘',
    weaid: 2583
  },
  {
    display_text: '四川，甘孜，乡城',
    search_text: 'sc, gz, xc; si chuan, gan zi, xiang cheng; 四川，甘孜，乡城',
    weaid: 2584
  },
  {
    display_text: '四川，甘孜，稻城',
    search_text: 'sc, gz, dc; si chuan, gan zi, dao cheng; 四川，甘孜，稻城',
    weaid: 2585
  },
  {
    display_text: '四川，甘孜，得荣',
    search_text: 'sc, gz, dr; si chuan, gan zi, de rong; 四川，甘孜，得荣',
    weaid: 2586
  },
  {
    display_text: '四川，阿坝，城区',
    search_text: 'sc, ab, cq; si chuan, a ba, cheng qu; 四川，阿坝，城区',
    weaid: 282
  },
  {
    display_text: '四川，阿坝，汶川',
    search_text: 'sc, ab, wc; si chuan, a ba, wen chuan; 四川，阿坝，汶川',
    weaid: 1758
  },
  {
    display_text: '四川，阿坝，理县',
    search_text: 'sc, ab, lx; si chuan, a ba, li xian; 四川，阿坝，理县',
    weaid: 1250
  },
  {
    display_text: '四川，阿坝，茂县',
    search_text: 'sc, ab, mx; si chuan, a ba, mao xian; 四川，阿坝，茂县',
    weaid: 1337
  },
  {
    display_text: '四川，阿坝，松潘',
    search_text: 'sc, ab, sp; si chuan, a ba, song pan; 四川，阿坝，松潘',
    weaid: 1611
  },
  {
    display_text: '四川，阿坝，九寨沟',
    search_text: 'sc, ab, jzg; si chuan, a ba, jiu zhai gou; 四川，阿坝，九寨沟',
    weaid: 2587
  },
  {
    display_text: '四川，阿坝，金川',
    search_text: 'sc, ab, jc; si chuan, a ba, jin chuan; 四川，阿坝，金川',
    weaid: 2588
  },
  {
    display_text: '四川，阿坝，小金',
    search_text: 'sc, ab, xj; si chuan, a ba, xiao jin; 四川，阿坝，小金',
    weaid: 1879
  },
  {
    display_text: '四川，阿坝，黑水',
    search_text: 'sc, ab, hs; si chuan, a ba, hei shui; 四川，阿坝，黑水',
    weaid: 2589
  },
  {
    display_text: '四川，阿坝，马尔康',
    search_text: 'sc, ab, mek; si chuan, a ba, ma er kang; 四川，阿坝，马尔康',
    weaid: 1291
  },
  {
    display_text: '四川，阿坝，壤塘',
    search_text: 'sc, ab, rt; si chuan, a ba, rang tang; 四川，阿坝，壤塘',
    weaid: 2590
  },
  {
    display_text: '四川，阿坝，若尔盖',
    search_text: 'sc, ab, reg; si chuan, a ba, ruo er gai; 四川，阿坝，若尔盖',
    weaid: 2591
  },
  {
    display_text: '四川，阿坝，红原',
    search_text: 'sc, ab, hy; si chuan, a ba, hong yuan; 四川，阿坝，红原',
    weaid: 2592
  },
  {
    display_text: '四川，德阳，城区',
    search_text: 'sc, dy, cq; si chuan, de yang, cheng qu; 四川，德阳，城区',
    weaid: 283
  },
  {
    display_text: '四川，德阳，中江',
    search_text: 'sc, dy, zj; si chuan, de yang, zhong jiang; 四川，德阳，中江',
    weaid: 2125
  },
  {
    display_text: '四川，德阳，广汉',
    search_text: 'sc, dy, gh; si chuan, de yang, guang han; 四川，德阳，广汉',
    weaid: 787
  },
  {
    display_text: '四川，德阳，什邡',
    search_text: 'sc, dy, sf; si chuan, de yang, shen fang; 四川，德阳，什邡',
    weaid: 1574
  },
  {
    display_text: '四川，德阳，绵竹',
    search_text: 'sc, dy, mz; si chuan, de yang, mian zhu; 四川，德阳，绵竹',
    weaid: 1345
  },
  {
    display_text: '四川，德阳，罗江',
    search_text: 'sc, dy, lj; si chuan, de yang, luo jiang; 四川，德阳，罗江',
    weaid: 2593
  },
  {
    display_text: '四川，广元，城区',
    search_text: 'sc, gy, cq; si chuan, guang yuan, cheng qu; 四川，广元，城区',
    weaid: 284
  },
  {
    display_text: '四川，广元，旺苍',
    search_text: 'sc, gy, wc; si chuan, guang yuan, wang cang; 四川，广元，旺苍',
    weaid: 1750
  },
  {
    display_text: '四川，广元，青川',
    search_text: 'sc, gy, qc; si chuan, guang yuan, qing chuan; 四川，广元，青川',
    weaid: 1469
  },
  {
    display_text: '四川，广元，剑阁',
    search_text: 'sc, gy, jg; si chuan, guang yuan, jian ge; 四川，广元，剑阁',
    weaid: 988
  },
  {
    display_text: '四川，广元，苍溪',
    search_text: 'sc, gy, cx; si chuan, guang yuan, cang xi; 四川，广元，苍溪',
    weaid: 587
  },
  {
    display_text: '台湾，台北，城区',
    search_text: 'tw, tb, cq; tai wan, tai bei, cheng qu; 台湾，台北，城区',
    weaid: 360
  },
  {
    display_text: '台湾，台北，桃园',
    search_text: 'tw, tb, ty; tai wan, tai bei, tao yuan; 台湾，台北，桃园',
    weaid: 2634
  },
  {
    display_text: '台湾，台北，新竹',
    search_text: 'tw, tb, xz; tai wan, tai bei, xin zhu; 台湾，台北，新竹',
    weaid: 2635
  },
  {
    display_text: '台湾，台北，宜兰',
    search_text: 'tw, tb, yl; tai wan, tai bei, yi lan; 台湾，台北，宜兰',
    weaid: 2636
  },
  {
    display_text: '台湾，高雄，城区',
    search_text: 'tw, gx, cq; tai wan, gao xiong, cheng qu; 台湾，高雄，城区',
    weaid: 361
  },
  {
    display_text: '台湾，高雄，嘉义',
    search_text: 'tw, gx, jy; tai wan, gao xiong, jia yi; 台湾，高雄，嘉义',
    weaid: 2637
  },
  {
    display_text: '台湾，高雄，台南',
    search_text: 'tw, gx, tn; tai wan, gao xiong, tai nan; 台湾，高雄，台南',
    weaid: 2638
  },
  {
    display_text: '台湾，高雄，台东',
    search_text: 'tw, gx, td; tai wan, gao xiong, tai dong; 台湾，高雄，台东',
    weaid: 2639
  },
  {
    display_text: '台湾，高雄，屏东',
    search_text: 'tw, gx, pd; tai wan, gao xiong, ping dong; 台湾，高雄，屏东',
    weaid: 2640
  },
  {
    display_text: '台湾，台中，城区',
    search_text: 'tw, tz, cq; tai wan, tai zhong, cheng qu; 台湾，台中，城区',
    weaid: 362
  },
  {
    display_text: '台湾，台中，苗栗',
    search_text: 'tw, tz, ml; tai wan, tai zhong, miao li; 台湾，台中，苗栗',
    weaid: 2641
  },
  {
    display_text: '台湾，台中，彰化',
    search_text: 'tw, tz, zh; tai wan, tai zhong, zhang hua; 台湾，台中，彰化',
    weaid: 2642
  },
  {
    display_text: '台湾，台中，南投',
    search_text: 'tw, tz, nt; tai wan, tai zhong, nan tou; 台湾，台中，南投',
    weaid: 2643
  },
  {
    display_text: '台湾，台中，花莲',
    search_text: 'tw, tz, hl; tai wan, tai zhong, hua lian; 台湾，台中，花莲',
    weaid: 2644
  },
  {
    display_text: '台湾，台中，云林',
    search_text: 'tw, tz, yl; tai wan, tai zhong, yun lin; 台湾，台中，云林',
    weaid: 2645
  },
  {
    display_text: '泰国，曼谷（Bangkok）',
    search_text: 'tg, mg; tai guo, man gu; 泰国，曼谷（Bangkok）',
    weaid: 2188
  },
  {
    display_text: '泰国，博他仑农业气象组（Phatthalung Agri Met）',
    search_text: 'tg, btlnyqxz; tai guo, bo ta lun nong ye qi xiang zu; 泰国，博他仑农业气象组（Phatthalung Agri Met）',
    weaid: 2661
  },
  {
    display_text: '泰国，北大年（Pattani）',
    search_text: 'tg, bdn; tai guo, bei da nian; 泰国，北大年（Pattani）',
    weaid: 2665
  },
  {
    display_text: '泰国，程逸（Uttaradit）',
    search_text: 'tg, cy; tai guo, cheng yi; 泰国，程逸（Uttaradit）',
    weaid: 2670
  },
  {
    display_text: '泰国，碧差汶（Phetchabun）',
    search_text: 'tg, bcw; tai guo, bi cha wen; 泰国，碧差汶（Phetchabun）',
    weaid: 2666
  },
  {
    display_text: '泰国，猜纳农业气象组（Chainat Agri Met）',
    search_text: 'tg, cnnyqxz; tai guo, cai na nong ye qi xiang zu; 泰国，猜纳农业气象组（Chainat Agri Met）',
    weaid: 2667
  },
  {
    display_text: '泰国，猜也贲（Chaiyaphum）',
    search_text: 'tg, cyb; tai guo, cai ye ben; 泰国，猜也贲（Chaiyaphum）',
    weaid: 2672
  },
  {
    display_text: '泰国，巴真武里（Prachinburi）',
    search_text: 'tg, bzwl; tai guo, ba zhen wu li; 泰国，巴真武里（Prachinburi）',
    weaid: 2660
  },
  {
    display_text: '泰国，北冲农业气象组（Pakchong Agri Met）',
    search_text: 'tg, bcnyqxz; tai guo, bei chong nong ye qi xiang zu; 泰国，北冲农业气象组（Pakchong Agri Met）',
    weaid: 2663
  },
  {
    display_text: '泰国，北碧府（Kanchanaburi）',
    search_text: 'tg, bbf; tai guo, bei bi fu; 泰国，北碧府（Kanchanaburi）',
    weaid: 2668
  },
  {
    display_text: '泰国，邦那农业气象组（Bangna Agri Met）',
    search_text: 'tg, bnnyqxz; tai guo, bang na nong ye qi xiang zu; 泰国，邦那农业气象组（Bangna Agri Met）',
    weaid: 2662
  },
  {
    display_text: '泰国，北柳农业气象组（Chachoengsao Agri Met）',
    search_text: 'tg, blnyqxz; tai guo, bei liu nong ye qi xiang zu; 泰国，北柳农业气象组（Chachoengsao Agri Met）',
    weaid: 2664
  },
  {
    display_text: '泰国，芭提雅（Phatthaya）',
    search_text: 'tg, bty; tai guo, ba ti ya; 泰国，芭提雅（Phatthaya）',
    weaid: 2669
  },
  {
    display_text: '泰国，春蓬（Chumphon）',
    search_text: 'tg, cp; tai guo, chun peng; 泰国，春蓬（Chumphon）',
    weaid: 2671
  },
  {
    display_text: '特立尼达和多巴哥，西班牙港（Port Of Spain）',
    search_text: 'tlndhdbg, xbyg; te li ni da he duo ba ge, xi ban ya gang; 特立尼达和多巴哥，西班牙港（Port Of Spain）',
    weaid: 2686
  },
  {
    display_text: "特立尼达和多巴哥，皮亚科国际机场（Piarco Int' LAirport）",
    search_text: "tlndhdbg, pykgjjc; te li ni da he duo ba ge, pi ya ke guo ji ji chang; 特立尼达和多巴哥，皮亚科国际机场（Piarco Int' LAirport）",
    weaid: 2687
  },
  {
    display_text: '天津，城区',
    search_text: 'tj, cq; tian jin, cheng qu; 天津，城区',
    weaid: 23
  },
  {
    display_text: '天津，武清',
    search_text: 'tj, wq; tian jin, wu qing; 天津，武清',
    weaid: 34
  },
  {
    display_text: '天津，宝坻',
    search_text: 'tj, bd; tian jin, bao di; 天津，宝坻',
    weaid: 24
  },
  {
    display_text: '天津，东丽',
    search_text: 'tj, dl; tian jin, dong li; 天津，东丽',
    weaid: 25
  },
  {
    display_text: '天津，西青',
    search_text: 'tj, xq; tian jin, xi qing; 天津，西青',
    weaid: 26
  },
  {
    display_text: '天津，北辰',
    search_text: 'tj, bc; tian jin, bei chen; 天津，北辰',
    weaid: 27
  },
  {
    display_text: '天津，宁河',
    search_text: 'tj, nh; tian jin, ning he; 天津，宁河',
    weaid: 35
  },
  {
    display_text: '天津，静海',
    search_text: 'tj, jh; tian jin, jing hai; 天津，静海',
    weaid: 30
  },
  {
    display_text: '天津，津南',
    search_text: 'tj, jn; tian jin, jin nan; 天津，津南',
    weaid: 31
  },
  {
    display_text: '天津，滨海新区',
    search_text: 'tj, bhxq; tian jin, bin hai xin qu; 天津，滨海新区',
    weaid: 32
  },
  {
    display_text: '天津，蓟县',
    search_text: 'tj, jx; tian jin, ji xian; 天津，蓟县',
    weaid: 28
  },
  {
    display_text: '西班牙，巴塞罗那（Barcelona）',
    search_text: 'xby, bsln; xi ban ya, ba sai luo na; 西班牙，巴塞罗那（Barcelona）',
    weaid: 2696
  },
  {
    display_text: '西班牙，奥维耶多（Oviedo）',
    search_text: 'xby, awyd; xi ban ya, ao wei ye duo; 西班牙，奥维耶多（Oviedo）',
    weaid: 2695
  },
  {
    display_text: '西班牙，阿尔巴塞特（Albacete Losllanos）',
    search_text: 'xby, aebst; xi ban ya, a er ba sai te; 西班牙，阿尔巴塞特（Albacete Losllanos）',
    weaid: 2697
  },
  {
    display_text: '西班牙，阿尔梅里亚（Almeria Aeropuerto）',
    search_text: 'xby, aemly; xi ban ya, a er mei li ya; 西班牙，阿尔梅里亚（Almeria Aeropuerto）',
    weaid: 2691
  },
  {
    display_text: '西班牙，阿利坎特（Alicante Elaltet）',
    search_text: 'xby, alkt; xi ban ya, a li kan te; 西班牙，阿利坎特（Alicante Elaltet）',
    weaid: 2699
  },
  {
    display_text: '西班牙，巴利亚多利德（Valladolid）',
    search_text: 'xby, blydld; xi ban ya, ba li ya duo li de; 西班牙，巴利亚多利德（Valladolid）',
    weaid: 2689
  },
  {
    display_text: '西班牙，奥伦塞（Orense）',
    search_text: 'xby, als; xi ban ya, ao lun sai; 西班牙，奥伦塞（Orense）',
    weaid: 2698
  },
  {
    display_text: '西班牙，阿维拉（Avila）',
    search_text: 'xby, awl; xi ban ya, a wei la; 西班牙，阿维拉（Avila）',
    weaid: 2688
  },
  {
    display_text: '西班牙，瓜达拉哈拉（Guadalajara）',
    search_text: 'xby, gdlhl; xi ban ya, gua da la ha la; 西班牙，瓜达拉哈拉（Guadalajara）',
    weaid: 2694
  },
  {
    display_text: '西班牙，巴伦西亚（Valencia）',
    search_text: 'xby, blxy; xi ban ya, ba lun xi ya; 西班牙，巴伦西亚（Valencia）',
    weaid: 2700
  },
  {
    display_text: '西班牙，阿尔马格罗（Almagro）',
    search_text: 'xby, aemgl; xi ban ya, a er ma ge luo; 西班牙，阿尔马格罗（Almagro）',
    weaid: 2692
  },
  {
    display_text: '西班牙，阿里坎特（Alicante）',
    search_text: 'xby, alkt; xi ban ya, a li kan te; 西班牙，阿里坎特（Alicante）',
    weaid: 2690
  },
  {
    display_text: '西班牙，哈恩（Jaen）',
    search_text: 'xby, he; xi ban ya, ha en; 西班牙，哈恩（Jaen）',
    weaid: 2693
  },
  {
    display_text: '西藏，拉萨，城区',
    search_text: 'xz, ls, cq; xi zang, la sa, cheng qu; 西藏，拉萨，城区',
    weaid: 353
  },
  {
    display_text: '西藏，拉萨，当雄',
    search_text: 'xz, ls, dx; xi zang, la sa, dang xiong; 西藏，拉萨，当雄',
    weaid: 2388
  },
  {
    display_text: '西藏，拉萨，尼木',
    search_text: 'xz, ls, nm; xi zang, la sa, ni mu; 西藏，拉萨，尼木',
    weaid: 1383
  },
  {
    display_text: '西藏，拉萨，林周',
    search_text: 'xz, ls, lz; xi zang, la sa, lin zhou; 西藏，拉萨，林周',
    weaid: 2389
  },
  {
    display_text: '西藏，拉萨，堆龙德庆',
    search_text: 'xz, ls, dldq; xi zang, la sa, dui long de qing; 西藏，拉萨，堆龙德庆',
    weaid: 2390
  },
  {
    display_text: '西藏，拉萨，曲水',
    search_text: 'xz, ls, qs; xi zang, la sa, qu shui; 西藏，拉萨，曲水',
    weaid: 2391
  },
  {
    display_text: '西藏，拉萨，达孜',
    search_text: 'xz, ls, dz; xi zang, la sa, da zi; 西藏，拉萨，达孜',
    weaid: 2392
  },
  {
    display_text: '西藏，拉萨，墨竹工卡',
    search_text: 'xz, ls, mzgk; xi zang, la sa, mo zhu gong ka; 西藏，拉萨，墨竹工卡',
    weaid: 2393
  },
  {
    display_text: '西藏，日喀则，城区',
    search_text: 'xz, rkz, cq; xi zang, ri ka ze, cheng qu; 西藏，日喀则，城区',
    weaid: 358
  },
  {
    display_text: '西藏，日喀则，拉孜',
    search_text: 'xz, rkz, lz; xi zang, ri ka ze, la zi; 西藏，日喀则，拉孜',
    weaid: 1279
  },
  {
    display_text: '西藏，日喀则，南木林',
    search_text: 'xz, rkz, nml; xi zang, ri ka ze, nan mu lin; 西藏，日喀则，南木林',
    weaid: 1381
  },
  {
    display_text: '西藏，日喀则，聂拉木',
    search_text: 'xz, rkz, nlm; xi zang, ri ka ze, nie la mu; 西藏，日喀则，聂拉木',
    weaid: 1379
  },
  {
    display_text: '西藏，日喀则，定日',
    search_text: 'xz, rkz, dr; xi zang, ri ka ze, ding ri; 西藏，日喀则，定日',
    weaid: 651
  },
  {
    display_text: '西藏，日喀则，江孜',
    search_text: 'xz, rkz, jz; xi zang, ri ka ze, jiang zi; 西藏，日喀则，江孜',
    weaid: 2394
  },
  {
    display_text: '西藏，日喀则，帕里',
    search_text: 'xz, rkz, pl; xi zang, ri ka ze, pa li; 西藏，日喀则，帕里',
    weaid: 2395
  },
  {
    display_text: '西藏，日喀则，仲巴',
    search_text: 'xz, rkz, zb; xi zang, ri ka ze, zhong ba; 西藏，日喀则，仲巴',
    weaid: 2396
  },
  {
    display_text: '西藏，日喀则，萨嘎',
    search_text: 'xz, rkz, sg; xi zang, ri ka ze, sa ga; 西藏，日喀则，萨嘎',
    weaid: 2397
  },
  {
    display_text: '西藏，日喀则，吉隆',
    search_text: 'xz, rkz, jl; xi zang, ri ka ze, ji long; 西藏，日喀则，吉隆',
    weaid: 2398
  },
  {
    display_text: '西藏，日喀则，昂仁',
    search_text: 'xz, rkz, ar; xi zang, ri ka ze, ang ren; 西藏，日喀则，昂仁',
    weaid: 2399
  },
  {
    display_text: '西藏，日喀则，定结',
    search_text: 'xz, rkz, dj; xi zang, ri ka ze, ding jie; 西藏，日喀则，定结',
    weaid: 2400
  },
  {
    display_text: '西藏，日喀则，萨迦',
    search_text: 'xz, rkz, sj; xi zang, ri ka ze, sa jia; 西藏，日喀则，萨迦',
    weaid: 2401
  },
  {
    display_text: '西藏，日喀则，谢通门',
    search_text: 'xz, rkz, xtm; xi zang, ri ka ze, xie tong men; 西藏，日喀则，谢通门',
    weaid: 2402
  },
  {
    display_text: '西藏，日喀则，岗巴',
    search_text: 'xz, rkz, gb; xi zang, ri ka ze, gang ba; 西藏，日喀则，岗巴',
    weaid: 2403
  },
  {
    display_text: '西藏，日喀则，白朗',
    search_text: 'xz, rkz, bl; xi zang, ri ka ze, bai lang; 西藏，日喀则，白朗',
    weaid: 2404
  },
  {
    display_text: '西藏，日喀则，亚东',
    search_text: 'xz, rkz, yd; xi zang, ri ka ze, ya dong; 西藏，日喀则，亚东',
    weaid: 2405
  },
  {
    display_text: '西藏，日喀则，康马',
    search_text: 'xz, rkz, km; xi zang, ri ka ze, kang ma; 西藏，日喀则，康马',
    weaid: 2406
  },
  {
    display_text: '西藏，日喀则，仁布',
    search_text: 'xz, rkz, rb; xi zang, ri ka ze, ren bu; 西藏，日喀则，仁布',
    weaid: 2407
  },
  {
    display_text: '西藏，山南，城区',
    search_text: 'xz, sn, cq; xi zang, shan nan, cheng qu; 西藏，山南，城区',
    weaid: 354
  },
  {
    display_text: '西藏，山南，贡嘎',
    search_text: 'xz, sn, gg; xi zang, shan nan, gong ga; 西藏，山南，贡嘎',
    weaid: 2408
  },
  {
    display_text: '西藏，山南，扎囊',
    search_text: 'xz, sn, zn; xi zang, shan nan, zha nang; 西藏，山南，扎囊',
    weaid: 2409
  },
  {
    display_text: '西藏，山南，加查',
    search_text: 'xz, sn, jc; xi zang, shan nan, jia cha; 西藏，山南，加查',
    weaid: 2410
  },
  {
    display_text: '西藏，山南，浪卡子',
    search_text: 'xz, sn, lqz; xi zang, shan nan, lang qia zi; 西藏，山南，浪卡子',
    weaid: 1170
  },
  {
    display_text: '西藏，山南，错那',
    search_text: 'xz, sn, cn; xi zang, shan nan, cuo na; 西藏，山南，错那',
    weaid: 526
  },
  {
    display_text: '西藏，山南，隆子',
    search_text: 'xz, sn, lz; xi zang, shan nan, long zi; 西藏，山南，隆子',
    weaid: 1280
  },
  {
    display_text: '西藏，山南，乃东',
    search_text: 'xz, sn, nd; xi zang, shan nan, nai dong; 西藏，山南，乃东',
    weaid: 2412
  },
  {
    display_text: '西藏，山南，桑日',
    search_text: 'xz, sn, sr; xi zang, shan nan, sang ri; 西藏，山南，桑日',
    weaid: 2413
  },
  {
    display_text: '西藏，山南，洛扎',
    search_text: 'xz, sn, lz; xi zang, shan nan, luo zha; 西藏，山南，洛扎',
    weaid: 2414
  },
  {
    display_text: '西藏，山南，措美',
    search_text: 'xz, sn, cm; xi zang, shan nan, cuo mei; 西藏，山南，措美',
    weaid: 2415
  },
  {
    display_text: '西藏，山南，琼结',
    search_text: 'xz, sn, qj; xi zang, shan nan, qiong jie; 西藏，山南，琼结',
    weaid: 2416
  },
  {
    display_text: '西藏，山南，曲松',
    search_text: 'xz, sn, qs; xi zang, shan nan, qu song; 西藏，山南，曲松',
    weaid: 2417
  },
  {
    display_text: '西藏，林芝，城区',
    search_text: 'xz, lz, cq; xi zang, lin zhi, cheng qu; 西藏，林芝，城区',
    weaid: 359
  },
  {
    display_text: '西藏，林芝，波密',
    search_text: 'xz, lz, bm; xi zang, lin zhi, bo mi; 西藏，林芝，波密',
    weaid: 2418
  },
  {
    display_text: '西藏，林芝，米林',
    search_text: 'xz, lz, ml; xi zang, lin zhi, mi lin; 西藏，林芝，米林',
    weaid: 2419
  },
  {
    display_text: '西藏，林芝，察隅',
    search_text: 'xz, lz, cy; xi zang, lin zhi, cha yu; 西藏，林芝，察隅',
    weaid: 2420
  },
  {
    display_text: '西藏，林芝，工布江达',
    search_text: 'xz, lz, gbjd; xi zang, lin zhi, gong bu jiang da; 西藏，林芝，工布江达',
    weaid: 2421
  },
  {
    display_text: '西藏，林芝，朗县',
    search_text: 'xz, lz, lx; xi zang, lin zhi, lang xian; 西藏，林芝，朗县',
    weaid: 2422
  },
  {
    display_text: '西藏，林芝，墨脱',
    search_text: 'xz, lz, mt; xi zang, lin zhi, mo tuo; 西藏，林芝，墨脱',
    weaid: 2423
  },
  {
    display_text: '西藏，昌都，城区',
    search_text: 'xz, cd, cq; xi zang, chang dou, cheng qu; 西藏，昌都，城区',
    weaid: 356
  },
  {
    display_text: '西藏，昌都，丁青',
    search_text: 'xz, cd, dq; xi zang, chang dou, ding qing; 西藏，昌都，丁青',
    weaid: 648
  },
  {
    display_text: '西藏，昌都，边坝',
    search_text: 'xz, cd, bb; xi zang, chang dou, bian ba; 西藏，昌都，边坝',
    weaid: 2424
  },
  {
    display_text: '西藏，昌都，洛隆',
    search_text: 'xz, cd, ll; xi zang, chang dou, luo long; 西藏，昌都，洛隆',
    weaid: 1179
  },
  {
    display_text: '西藏，昌都，左贡',
    search_text: 'xz, cd, zg; xi zang, chang dou, zuo gong; 西藏，昌都，左贡',
    weaid: 2110
  },
  {
    display_text: '西藏，昌都，芒康',
    search_text: 'xz, cd, mk; xi zang, chang dou, mang kang; 西藏，昌都，芒康',
    weaid: 1303
  },
  {
    display_text: '西藏，昌都，类乌齐',
    search_text: 'xz, cd, lwq; xi zang, chang dou, lei wu qi; 西藏，昌都，类乌齐',
    weaid: 2425
  },
  {
    display_text: '西藏，昌都，八宿',
    search_text: 'xz, cd, bs; xi zang, chang dou, ba su; 西藏，昌都，八宿',
    weaid: 2426
  },
  {
    display_text: '西藏，昌都，江达',
    search_text: 'xz, cd, jd; xi zang, chang dou, jiang da; 西藏，昌都，江达',
    weaid: 2427
  },
  {
    display_text: '西藏，昌都，察雅',
    search_text: 'xz, cd, cy; xi zang, chang dou, cha ya; 西藏，昌都，察雅',
    weaid: 2428
  },
  {
    display_text: '西藏，昌都，贡觉',
    search_text: 'xz, cd, gj; xi zang, chang dou, gong jue; 西藏，昌都，贡觉',
    weaid: 2429
  },
  {
    display_text: '西藏，那曲，城区',
    search_text: 'xz, nq, cq; xi zang, na qu, cheng qu; 西藏，那曲，城区',
    weaid: 357
  },
  {
    display_text: '西藏，那曲，尼玛',
    search_text: 'xz, nq, nm; xi zang, na qu, ni ma; 西藏，那曲，尼玛',
    weaid: 2430
  },
  {
    display_text: '西藏，那曲，嘉黎',
    search_text: 'xz, nq, jl; xi zang, na qu, jia li; 西藏，那曲，嘉黎',
    weaid: 1010
  },
  {
    display_text: '西藏，那曲，班戈',
    search_text: 'xz, nq, bg; xi zang, na qu, ban ge; 西藏，那曲，班戈',
    weaid: 489
  },
  {
    display_text: '西藏，那曲，安多',
    search_text: 'xz, nq, ad; xi zang, na qu, an duo; 西藏，那曲，安多',
    weaid: 2431
  },
  {
    display_text: '西藏，那曲，索县',
    search_text: 'xz, nq, sx; xi zang, na qu, suo xian; 西藏，那曲，索县',
    weaid: 2432
  },
  {
    display_text: '西藏，那曲，聂荣',
    search_text: 'xz, nq, nr; xi zang, na qu, nie rong; 西藏，那曲，聂荣',
    weaid: 2433
  },
  {
    display_text: '西藏，那曲，巴青',
    search_text: 'xz, nq, bq; xi zang, na qu, ba qing; 西藏，那曲，巴青',
    weaid: 2434
  },
  {
    display_text: '西藏，那曲，比如',
    search_text: 'xz, nq, br; xi zang, na qu, bi ru; 西藏，那曲，比如',
    weaid: 2435
  },
  {
    display_text: '西藏，那曲，双湖',
    search_text: 'xz, nq, sh; xi zang, na qu, shuang hu; 西藏，那曲，双湖',
    weaid: 2436
  },
  {
    display_text: '西藏，阿里，城区',
    search_text: 'xz, al, cq; xi zang, a li, cheng qu; 西藏，阿里，城区',
    weaid: 355
  },
  {
    display_text: '西藏，阿里，改则',
    search_text: 'xz, al, gz; xi zang, a li, gai ze; 西藏，阿里，改则',
    weaid: 839
  },
  {
    display_text: '西藏，阿里，普兰',
    search_text: 'xz, al, pl; xi zang, a li, pu lan; 西藏，阿里，普兰',
    weaid: 1422
  },
  {
    display_text: '西藏，阿里，札达',
    search_text: 'xz, al, zd; xi zang, a li, zha da; 西藏，阿里，札达',
    weaid: 2438
  },
  {
    display_text: '西藏，阿里，噶尔',
    search_text: 'xz, al, ge; xi zang, a li, ga er; 西藏，阿里，噶尔',
    weaid: 2439
  },
  {
    display_text: '西藏，阿里，日土',
    search_text: 'xz, al, rt; xi zang, a li, ri tu; 西藏，阿里，日土',
    weaid: 2440
  },
  {
    display_text: '西藏，阿里，革吉',
    search_text: 'xz, al, gj; xi zang, a li, ge ji; 西藏，阿里，革吉',
    weaid: 2441
  },
  {
    display_text: '西藏，阿里，措勤',
    search_text: 'xz, al, cq; xi zang, a li, cuo qin; 西藏，阿里，措勤',
    weaid: 2442
  },
  {
    display_text: '香港，城区',
    search_text: 'xg, cq; xiang gang, cheng qu; 香港，城区',
    weaid: 2628
  },
  {
    display_text: '香港，九龙',
    search_text: 'xg, jl; xiang gang, jiu long; 香港，九龙',
    weaid: 2629
  },
  {
    display_text: '香港，新界',
    search_text: 'xg, xj; xiang gang, xin jie; 香港，新界',
    weaid: 2630
  },
  {
    display_text: '新加坡，新加坡（Singapore）',
    search_text: 'xjp, xjp; xin jia po, xin jia po; 新加坡，新加坡（Singapore）',
    weaid: 2187
  },
  {
    display_text: '新疆，乌鲁木齐，城区',
    search_text: 'xj, wlmq, cq; xin jiang, wu lu mu qi, cheng qu; 新疆，乌鲁木齐，城区',
    weaid: 337
  },
  {
    display_text: '新疆，乌鲁木齐，达坂城',
    search_text: 'xj, wlmq, dbc; xin jiang, wu lu mu qi, da ban cheng; 新疆，乌鲁木齐，达坂城',
    weaid: 2370
  },
  {
    display_text: '新疆，克拉玛依，城区',
    search_text: 'xj, klmy, cq; xin jiang, ke la ma yi, cheng qu; 新疆，克拉玛依，城区',
    weaid: 352
  },
  {
    display_text: '新疆，克拉玛依，乌尔禾',
    search_text: 'xj, klmy, weh; xin jiang, ke la ma yi, wu er he; 新疆，克拉玛依，乌尔禾',
    weaid: 2374
  },
  {
    display_text: '新疆，克拉玛依，白碱滩',
    search_text: 'xj, klmy, bjt; xin jiang, ke la ma yi, bai jian tan; 新疆，克拉玛依，白碱滩',
    weaid: 2375
  },
  {
    display_text: '新疆，石河子，城区',
    search_text: 'xj, shz, cq; xin jiang, shi he zi, cheng qu; 新疆，石河子，城区',
    weaid: 338
  },
  {
    display_text: '新疆，昌吉，城区',
    search_text: 'xj, cj, cq; xin jiang, chang ji, cheng qu; 新疆，昌吉，城区',
    weaid: 339
  },
  {
    display_text: '新疆，昌吉，呼图壁',
    search_text: 'xj, cj, htb; xin jiang, chang ji, hu tu bi; 新疆，昌吉，呼图壁',
    weaid: 937
  },
  {
    display_text: '新疆，昌吉，阜康',
    search_text: 'xj, cj, fk; xin jiang, chang ji, fu kang; 新疆，昌吉，阜康',
    weaid: 722
  },
  {
    display_text: '新疆，昌吉，吉木萨尔',
    search_text: 'xj, cj, jmse; xin jiang, chang ji, ji mu sa er; 新疆，昌吉，吉木萨尔',
    weaid: 1011
  },
  {
    display_text: '新疆，昌吉，奇台',
    search_text: 'xj, cj, qt; xin jiang, chang ji, qi tai; 新疆，昌吉，奇台',
    weaid: 1496
  },
  {
    display_text: '新疆，昌吉，玛纳斯',
    search_text: 'xj, cj, mns; xin jiang, chang ji, ma na si; 新疆，昌吉，玛纳斯',
    weaid: 1319
  },
  {
    display_text: '新疆，昌吉，木垒',
    search_text: 'xj, cj, ml; xin jiang, chang ji, mu lei; 新疆，昌吉，木垒',
    weaid: 1308
  },
  {
    display_text: '新疆，吐鲁番，城区',
    search_text: 'xj, tlf, cq; xin jiang, tu lu fan, cheng qu; 新疆，吐鲁番，城区',
    weaid: 340
  },
  {
    display_text: '新疆，吐鲁番，托克逊',
    search_text: 'xj, tlf, tkx; xin jiang, tu lu fan, tuo ke xun; 新疆，吐鲁番，托克逊',
    weaid: 1703
  },
  {
    display_text: '新疆，吐鲁番，鄯善',
    search_text: 'xj, tlf, ss; xin jiang, tu lu fan, shan shan; 新疆，吐鲁番，鄯善',
    weaid: 1624
  },
  {
    display_text: '新疆，巴音郭楞，库尔勒',
    search_text: 'xj, bygl, kel; xin jiang, ba yin guo leng, ku er lei; 新疆，巴音郭楞，库尔勒',
    weaid: 341
  },
  {
    display_text: '新疆，巴音郭楞，轮台',
    search_text: 'xj, bygl, lt; xin jiang, ba yin guo leng, lun tai; 新疆，巴音郭楞，轮台',
    weaid: 1225
  },
  {
    display_text: '新疆，巴音郭楞，尉犁',
    search_text: 'xj, bygl, yl; xin jiang, ba yin guo leng, yu li; 新疆，巴音郭楞，尉犁',
    weaid: 1779
  },
  {
    display_text: '新疆，巴音郭楞，若羌',
    search_text: 'xj, bygl, rq; xin jiang, ba yin guo leng, ruo qiang; 新疆，巴音郭楞，若羌',
    weaid: 1541
  },
  {
    display_text: '新疆，巴音郭楞，且末',
    search_text: 'xj, bygl, qm; xin jiang, ba yin guo leng, qie mo; 新疆，巴音郭楞，且末',
    weaid: 1486
  },
  {
    display_text: '新疆，巴音郭楞，和静',
    search_text: 'xj, bygl, hj; xin jiang, ba yin guo leng, he jing; 新疆，巴音郭楞，和静',
    weaid: 883
  },
  {
    display_text: '新疆，巴音郭楞，焉耆',
    search_text: 'xj, bygl, yq; xin jiang, ba yin guo leng, yan qi; 新疆，巴音郭楞，焉耆',
    weaid: 2029
  },
  {
    display_text: '新疆，巴音郭楞，和硕',
    search_text: 'xj, bygl, hs; xin jiang, ba yin guo leng, he shuo; 新疆，巴音郭楞，和硕',
    weaid: 935
  },
  {
    display_text: '新疆，巴音郭楞，博湖',
    search_text: 'xj, bygl, bh; xin jiang, ba yin guo leng, bo hu; 新疆，巴音郭楞，博湖',
    weaid: 494
  },
  {
    display_text: '新疆，阿拉尔，城区',
    search_text: 'xj, ale, cq; xin jiang, a la er, cheng qu; 新疆，阿拉尔，城区',
    weaid: 342
  },
  {
    display_text: '新疆，阿克苏，城区',
    search_text: 'xj, aks, cq; xin jiang, a ke su, cheng qu; 新疆，阿克苏，城区',
    weaid: 343
  },
  {
    display_text: '新疆，阿克苏，乌什',
    search_text: 'xj, aks, ws; xin jiang, a ke su, wu shen; 新疆，阿克苏，乌什',
    weaid: 1805
  },
  {
    display_text: '新疆，阿克苏，温宿',
    search_text: 'xj, aks, ws; xin jiang, a ke su, wen su; 新疆，阿克苏，温宿',
    weaid: 1807
  },
  {
    display_text: '新疆，阿克苏，拜城',
    search_text: 'xj, aks, bc; xin jiang, a ke su, bai cheng; 新疆，阿克苏，拜城',
    weaid: 483
  },
  {
    display_text: '新疆，阿克苏，新和',
    search_text: 'xj, aks, xh; xin jiang, a ke su, xin he; 新疆，阿克苏，新和',
    weaid: 1862
  },
  {
    display_text: '新疆，阿克苏，沙雅',
    search_text: 'xj, aks, sy; xin jiang, a ke su, sha ya; 新疆，阿克苏，沙雅',
    weaid: 1652
  },
  {
    display_text: '新疆，阿克苏，库车',
    search_text: 'xj, aks, kc; xin jiang, a ke su, ku che; 新疆，阿克苏，库车',
    weaid: 1082
  },
  {
    display_text: '新疆，阿克苏，柯坪',
    search_text: 'xj, aks, kp; xin jiang, a ke su, ke ping; 新疆，阿克苏，柯坪',
    weaid: 1098
  },
  {
    display_text: '新疆，阿克苏，阿瓦提',
    search_text: 'xj, aks, awt; xin jiang, a ke su, a wa ti; 新疆，阿克苏，阿瓦提',
    weaid: 470
  },
  {
    display_text: '新疆，喀什，城区',
    search_text: 'xj, ks, cq; xin jiang, ka shi, cheng qu; 新疆，喀什，城区',
    weaid: 344
  },
  {
    display_text: '新疆，喀什，英吉沙',
    search_text: 'xj, ks, yjs; xin jiang, ka shi, ying ji sha; 新疆，喀什，英吉沙',
    weaid: 2002
  },
  {
    display_text: '新疆，喀什，塔什库尔干',
    search_text: 'xj, ks, tskeg; xin jiang, ka shi, ta shen ku er gan; 新疆，喀什，塔什库尔干',
    weaid: 1722
  },
  {
    display_text: '新疆，喀什，麦盖提',
    search_text: 'xj, ks, mgt; xin jiang, ka shi, mai gai ti; 新疆，喀什，麦盖提',
    weaid: 1293
  },
  {
    display_text: '新疆，喀什，莎车',
    search_text: 'xj, ks, sc; xin jiang, ka shi, sha che; 新疆，喀什，莎车',
    weaid: 1565
  },
  {
    display_text: '新疆，喀什，叶城',
    search_text: 'xj, ks, yc; xin jiang, ka shi, ye cheng; 新疆，喀什，叶城',
    weaid: 1972
  },
  {
    display_text: '新疆，喀什，泽普',
    search_text: 'xj, ks, zp; xin jiang, ka shi, ze pu; 新疆，喀什，泽普',
    weaid: 2146
  },
  {
    display_text: '新疆，喀什，巴楚',
    search_text: 'xj, ks, bc; xin jiang, ka shi, ba chu; 新疆，喀什，巴楚',
    weaid: 484
  },
  {
    display_text: '新疆，喀什，岳普湖',
    search_text: 'xj, ks, yph; xin jiang, ka shi, yue pu hu; 新疆，喀什，岳普湖',
    weaid: 2024
  },
  {
    display_text: '新疆，喀什，伽师',
    search_text: 'xj, ks, gs; xin jiang, ka shi, ga shi; 新疆，喀什，伽师',
    weaid: 1034
  },
  {
    display_text: '新疆，喀什，疏附',
    search_text: 'xj, ks, sf; xin jiang, ka shi, shu fu; 新疆，喀什，疏附',
    weaid: 2383
  },
  {
    display_text: '新疆，喀什，疏勒',
    search_text: 'xj, ks, sl; xin jiang, ka shi, shu le; 新疆，喀什，疏勒',
    weaid: 2384
  },
  {
    display_text: '新疆，伊犁，伊宁',
    search_text: 'xj, yl, yn; xin jiang, yi li, yi ning; 新疆，伊犁，伊宁',
    weaid: 345
  },
  {
    display_text: '新疆，伊犁，察布查尔',
    search_text: 'xj, yl, cbce; xin jiang, yi li, cha bu cha er; 新疆，伊犁，察布查尔',
    weaid: 527
  },
  {
    display_text: '新疆，伊犁，尼勒克',
    search_text: 'xj, yl, nlk; xin jiang, yi li, ni lei ke; 新疆，伊犁，尼勒克',
    weaid: 1378
  },
  {
    display_text: '新疆，伊犁，伊宁县',
    search_text: 'xj, yl, ynx; xin jiang, yi li, yi ning xian; 新疆，伊犁，伊宁县',
    weaid: 2385
  },
  {
    display_text: '新疆，伊犁，巩留',
    search_text: 'xj, yl, gl; xin jiang, yi li, gong liu; 新疆，伊犁，巩留',
    weaid: 800
  },
  {
    display_text: '新疆，伊犁，新源',
    search_text: 'xj, yl, xy; xin jiang, yi li, xin yuan; 新疆，伊犁，新源',
    weaid: 1943
  },
  {
    display_text: '新疆，伊犁，昭苏',
    search_text: 'xj, yl, zs; xin jiang, yi li, zhao su; 新疆，伊犁，昭苏',
    weaid: 2154
  },
  {
    display_text: '新疆，伊犁，特克斯',
    search_text: 'xj, yl, tks; xin jiang, yi li, te ke si; 新疆，伊犁，特克斯',
    weaid: 1701
  },
  {
    display_text: '新疆，伊犁，霍城',
    search_text: 'xj, yl, hc; xin jiang, yi li, huo cheng; 新疆，伊犁，霍城',
    weaid: 861
  },
  {
    display_text: '新疆，伊犁，霍尔果斯',
    search_text: 'xj, yl, hegs; xin jiang, yi li, huo er guo si; 新疆，伊犁，霍尔果斯',
    weaid: 2386
  },
  {
    display_text: '新疆，伊犁，奎屯',
    search_text: 'xj, yl, kt; xin jiang, yi li, kui tun; 新疆，伊犁，奎屯',
    weaid: 2213
  },
  {
    display_text: '新疆，塔城，城区',
    search_text: 'xj, tc, cq; xin jiang, ta cheng, cheng qu; 新疆，塔城，城区',
    weaid: 346
  },
  {
    display_text: '新疆，塔城，裕民',
    search_text: 'xj, tc, ym; xin jiang, ta cheng, yu min; 新疆，塔城，裕民',
    weaid: 2017
  },
  {
    display_text: '新疆，塔城，额敏',
    search_text: 'xj, tc, em; xin jiang, ta cheng, e min; 新疆，塔城，额敏',
    weaid: 695
  },
  {
    display_text: '新疆，塔城，和布克赛尔',
    search_text: 'xj, tc, hbkse; xin jiang, ta cheng, he bu ke sai er; 新疆，塔城，和布克赛尔',
    weaid: 851
  },
  {
    display_text: '新疆，塔城，托里',
    search_text: 'xj, tc, tl; xin jiang, ta cheng, tuo li; 新疆，塔城，托里',
    weaid: 1710
  },
  {
    display_text: '新疆，塔城，乌苏',
    search_text: 'xj, tc, ws; xin jiang, ta cheng, wu su; 新疆，塔城，乌苏',
    weaid: 1806
  },
  {
    display_text: '新疆，塔城，沙湾',
    search_text: 'xj, tc, sw; xin jiang, ta cheng, sha wan; 新疆，塔城，沙湾',
    weaid: 1631
  },
  {
    display_text: '新疆，哈密，城区',
    search_text: 'xj, hm, cq; xin jiang, ha mi, cheng qu; 新疆，哈密，城区',
    weaid: 347
  },
  {
    display_text: '新疆，哈密，巴里坤',
    search_text: 'xj, hm, blk; xin jiang, ha mi, ba li kun; 新疆，哈密，巴里坤',
    weaid: 501
  },
  {
    display_text: '新疆，哈密，伊吾',
    search_text: 'xj, hm, yw; xin jiang, ha mi, yi wu; 新疆，哈密，伊吾',
    weaid: 2058
  },
  {
    display_text: '新疆，和田，城区',
    search_text: 'xj, ht, cq; xin jiang, he tian, cheng qu; 新疆，和田，城区',
    weaid: 348
  },
  {
    display_text: '新疆，和田，皮山',
    search_text: 'xj, ht, ps; xin jiang, he tian, pi shan; 新疆，和田，皮山',
    weaid: 1437
  },
  {
    display_text: '新疆，和田，策勒',
    search_text: 'xj, ht, cl; xin jiang, he tian, ce lei; 新疆，和田，策勒',
    weaid: 552
  },
  {
    display_text: '新疆，和田，墨玉',
    search_text: 'xj, ht, my; xin jiang, he tian, mo yu; 新疆，和田，墨玉',
    weaid: 1343
  },
  {
    display_text: '新疆，和田，洛浦',
    search_text: 'xj, ht, lp; xin jiang, he tian, luo pu; 新疆，和田，洛浦',
    weaid: 1192
  },
  {
    display_text: '新疆，和田，民丰',
    search_text: 'xj, ht, mf; xin jiang, he tian, min feng; 新疆，和田，民丰',
    weaid: 1292
  },
  {
    display_text: '新疆，和田，于田',
    search_text: 'xj, ht, yt; xin jiang, he tian, yu tian; 新疆，和田，于田',
    weaid: 2055
  },
  {
    display_text: '新疆，阿勒泰，城区',
    search_text: 'xj, alt, cq; xin jiang, a lei tai, cheng qu; 新疆，阿勒泰，城区',
    weaid: 349
  },
  {
    display_text: '新疆，阿勒泰，哈巴河',
    search_text: 'xj, alt, hbh; xin jiang, a lei tai, ha ba he; 新疆，阿勒泰，哈巴河',
    weaid: 852
  },
  {
    display_text: '新疆，阿勒泰，吉木乃',
    search_text: 'xj, alt, jmn; xin jiang, a lei tai, ji mu nai; 新疆，阿勒泰，吉木乃',
    weaid: 976
  },
  {
    display_text: '新疆，阿勒泰，布尔津',
    search_text: 'xj, alt, bej; xin jiang, a lei tai, bu er jin; 新疆，阿勒泰，布尔津',
    weaid: 487
  },
  {
    display_text: '新疆，阿勒泰，福海',
    search_text: 'xj, alt, fh; xin jiang, a lei tai, fu hai; 新疆，阿勒泰，福海',
    weaid: 717
  },
  {
    display_text: '新疆，阿勒泰，富蕴',
    search_text: 'xj, alt, fy; xin jiang, a lei tai, fu yun; 新疆，阿勒泰，富蕴',
    weaid: 765
  },
  {
    display_text: '新疆，阿勒泰，青河',
    search_text: 'xj, alt, qh; xin jiang, a lei tai, qing he; 新疆，阿勒泰，青河',
    weaid: 1475
  },
  {
    display_text: '新疆，克州，阿图什',
    search_text: 'xj, kz, ats; xin jiang, ke zhou, a tu shen; 新疆，克州，阿图什',
    weaid: 350
  },
  {
    display_text: '新疆，克州，乌恰',
    search_text: 'xj, kz, wq; xin jiang, ke zhou, wu qia; 新疆，克州，乌恰',
    weaid: 1793
  },
  {
    display_text: '新疆，克州，阿克陶',
    search_text: 'xj, kz, akt; xin jiang, ke zhou, a ke tao; 新疆，克州，阿克陶',
    weaid: 460
  },
  {
    display_text: '新疆，克州，阿合奇',
    search_text: 'xj, kz, ahq; xin jiang, ke zhou, a he qi; 新疆，克州，阿合奇',
    weaid: 456
  },
  {
    display_text: '新疆，博尔塔拉，博乐',
    search_text: 'xj, betl, bl; xin jiang, bo er ta la, bo le; 新疆，博尔塔拉，博乐',
    weaid: 351
  },
  {
    display_text: '新疆，博尔塔拉，温泉',
    search_text: 'xj, betl, wq; xin jiang, bo er ta la, wen quan; 新疆，博尔塔拉，温泉',
    weaid: 1795
  },
  {
    display_text: '新疆，博尔塔拉，精河',
    search_text: 'xj, betl, jh; xin jiang, bo er ta la, jing he; 新疆，博尔塔拉，精河',
    weaid: 996
  },
  {
    display_text: '新疆，博尔塔拉，阿拉山口',
    search_text: 'xj, betl, alsk; xin jiang, bo er ta la, a la shan kou; 新疆，博尔塔拉，阿拉山口',
    weaid: 2387
  },
  {
    display_text: '英国，伦敦（London）',
    search_text: 'yg, ld; ying guo, lun dun; 英国，伦敦（London）',
    weaid: 2196
  },
  {
    display_text: '越南，河内（Hanoi）',
    search_text: 'yn, hn; yue nan, he nei; 越南，河内（Hanoi）',
    weaid: 2210
  },
  {
    display_text: '越南，岘港（Danang）',
    search_text: 'yn, xg; yue nan, xian gang; 越南，岘港（Danang）',
    weaid: 2211
  },
  {
    display_text: '云南，昆明，城区',
    search_text: 'yn, km, cq; yun nan, kun ming, cheng qu; 云南，昆明，城区',
    weaid: 209
  },
  {
    display_text: '云南，昆明，东川',
    search_text: 'yn, km, dc; yun nan, kun ming, dong chuan; 云南，昆明，东川',
    weaid: 608
  },
  {
    display_text: '云南，昆明，寻甸',
    search_text: 'yn, km, xd; yun nan, kun ming, xun dian; 云南，昆明，寻甸',
    weaid: 1845
  },
  {
    display_text: '云南，昆明，晋宁',
    search_text: 'yn, km, jn; yun nan, kun ming, jin ning; 云南，昆明，晋宁',
    weaid: 1018
  },
  {
    display_text: '云南，昆明，宜良',
    search_text: 'yn, km, yl; yun nan, kun ming, yi liang; 云南，昆明，宜良',
    weaid: 2012
  },
  {
    display_text: '云南，昆明，石林',
    search_text: 'yn, km, sl; yun nan, kun ming, shi lin; 云南，昆明，石林',
    weaid: 1595
  },
  {
    display_text: '云南，昆明，呈贡',
    search_text: 'yn, km, cg; yun nan, kun ming, cheng gong; 云南，昆明，呈贡',
    weaid: 539
  },
  {
    display_text: '云南，昆明，富民',
    search_text: 'yn, km, fm; yun nan, kun ming, fu min; 云南，昆明，富民',
    weaid: 724
  },
  {
    display_text: '云南，昆明，嵩明',
    search_text: 'yn, km, sm; yun nan, kun ming, song ming; 云南，昆明，嵩明',
    weaid: 1599
  },
  {
    display_text: '云南，昆明，禄劝',
    search_text: 'yn, km, lq; yun nan, kun ming, lu quan; 云南，昆明，禄劝',
    weaid: 1251
  },
  {
    display_text: '云南，昆明，安宁',
    search_text: 'yn, km, an; yun nan, kun ming, an ning; 云南，昆明，安宁',
    weaid: 464
  },
  {
    display_text: '云南，大理，城区',
    search_text: 'yn, dl, cq; yun nan, da li, cheng qu; 云南，大理，城区',
    weaid: 222
  },
  {
    display_text: '云南，大理，云龙',
    search_text: 'yn, dl, yl; yun nan, da li, yun long; 云南，大理，云龙',
    weaid: 2615
  },
  {
    display_text: '云南，大理，漾濞',
    search_text: 'yn, dl, yb; yun nan, da li, yang bi; 云南，大理，漾濞',
    weaid: 1954
  },
  {
    display_text: '云南，大理，永平',
    search_text: 'yn, dl, yp; yun nan, da li, yong ping; 云南，大理，永平',
    weaid: 2027
  },
  {
    display_text: '云南，大理，宾川',
    search_text: 'yn, dl, bc; yun nan, da li, bin chuan; 云南，大理，宾川',
    weaid: 482
  },
  {
    display_text: '云南，大理，弥渡',
    search_text: 'yn, dl, md; yun nan, da li, mi du; 云南，大理，弥渡',
    weaid: 1289
  },
  {
    display_text: '云南，大理，祥云',
    search_text: 'yn, dl, xy; yun nan, da li, xiang yun; 云南，大理，祥云',
    weaid: 1942
  },
  {
    display_text: '云南，大理，巍山',
    search_text: 'yn, dl, ws; yun nan, da li, wei shan; 云南，大理，巍山',
    weaid: 1803
  },
  {
    display_text: '云南，大理，剑川',
    search_text: 'yn, dl, jc; yun nan, da li, jian chuan; 云南，大理，剑川',
    weaid: 979
  },
  {
    display_text: '云南，大理，洱源',
    search_text: 'yn, dl, ey; yun nan, da li, er yuan; 云南，大理，洱源',
    weaid: 701
  },
  {
    display_text: '云南，大理，鹤庆',
    search_text: 'yn, dl, hq; yun nan, da li, he qing; 云南，大理，鹤庆',
    weaid: 920
  },
  {
    display_text: '云南，大理，南涧',
    search_text: 'yn, dl, nj; yun nan, da li, nan jian; 云南，大理，南涧',
    weaid: 1372
  },
  {
    display_text: '云南，红河，城区',
    search_text: 'yn, hh, cq; yun nan, hong he, cheng qu; 云南，红河，城区',
    weaid: 210
  },
  {
    display_text: '云南，红河，石屏',
    search_text: 'yn, hh, sp; yun nan, hong he, shi ping; 云南，红河，石屏',
    weaid: 1614
  },
  {
    display_text: '云南，红河，建水',
    search_text: 'yn, hh, js; yun nan, hong he, jian shui; 云南，红河，建水',
    weaid: 1033
  },
  {
    display_text: '云南，红河，弥勒',
    search_text: 'yn, hh, ml; yun nan, hong he, mi le; 云南，红河，弥勒',
    weaid: 1306
  },
  {
    display_text: '云南，红河，元阳',
    search_text: 'yn, hh, yy; yun nan, hong he, yuan yang; 云南，红河，元阳',
    weaid: 2084
  },
  {
    display_text: '云南，红河，绿春',
    search_text: 'yn, hh, lc; yun nan, hong he, lv chun; 云南，红河，绿春',
    weaid: 1131
  },
  {
    display_text: '云南，红河，开远',
    search_text: 'yn, hh, ky; yun nan, hong he, kai yuan; 云南，红河，开远',
    weaid: 1104
  },
  {
    display_text: '云南，红河，个旧',
    search_text: 'yn, hh, gj; yun nan, hong he, ge jiu; 云南，红河，个旧',
    weaid: 791
  },
  {
    display_text: '云南，红河，蒙自',
    search_text: 'yn, hh, mz; yun nan, hong he, meng zi; 云南，红河，蒙自',
    weaid: 1346
  },
  {
    display_text: '云南，红河，屏边',
    search_text: 'yn, hh, pb; yun nan, hong he, ping bian; 云南，红河，屏边',
    weaid: 1408
  },
  {
    display_text: '云南，红河，泸西',
    search_text: 'yn, hh, lx; yun nan, hong he, lu xi; 云南，红河，泸西',
    weaid: 1246
  },
  {
    display_text: '云南，红河，金平',
    search_text: 'yn, hh, jp; yun nan, hong he, jin ping; 云南，红河，金平',
    weaid: 1022
  },
  {
    display_text: '云南，红河，河口',
    search_text: 'yn, hh, hk; yun nan, hong he, he kou; 云南，红河，河口',
    weaid: 2616
  },
  {
    display_text: '云南，曲靖，城区',
    search_text: 'yn, qj, cq; yun nan, qu jing, cheng qu; 云南，曲靖，城区',
    weaid: 223
  },
  {
    display_text: '云南，曲靖，沾益',
    search_text: 'yn, qj, zy; yun nan, qu jing, zhan yi; 云南，曲靖，沾益',
    weaid: 2170
  },
  {
    display_text: '云南，曲靖，陆良',
    search_text: 'yn, qj, ll; yun nan, qu jing, lu liang; 云南，曲靖，陆良',
    weaid: 1177
  },
  {
    display_text: '云南，曲靖，富源',
    search_text: 'yn, qj, fy; yun nan, qu jing, fu yuan; 云南，曲靖，富源',
    weaid: 764
  },
  {
    display_text: '云南，曲靖，马龙',
    search_text: 'yn, qj, ml; yun nan, qu jing, ma long; 云南，曲靖，马龙',
    weaid: 1312
  },
  {
    display_text: '云南，曲靖，师宗',
    search_text: 'yn, qj, sz; yun nan, qu jing, shi zong; 云南，曲靖，师宗',
    weaid: 1665
  },
  {
    display_text: '云南，曲靖，罗平',
    search_text: 'yn, qj, lp; yun nan, qu jing, luo ping; 云南，曲靖，罗平',
    weaid: 1189
  },
  {
    display_text: '云南，曲靖，会泽',
    search_text: 'yn, qj, hz; yun nan, qu jing, hui ze; 云南，曲靖，会泽',
    weaid: 966
  },
  {
    display_text: '云南，曲靖，宣威',
    search_text: 'yn, qj, xw; yun nan, qu jing, xuan wei; 云南，曲靖，宣威',
    weaid: 1913
  },
  {
    display_text: '云南，保山，城区',
    search_text: 'yn, bs, cq; yun nan, bao shan, cheng qu; 云南，保山，城区',
    weaid: 224
  },
  {
    display_text: '云南，保山，龙陵',
    search_text: 'yn, bs, ll; yun nan, bao shan, long ling; 云南，保山，龙陵',
    weaid: 1178
  },
  {
    display_text: '云南，保山，施甸',
    search_text: 'yn, bs, sd; yun nan, bao shan, shi dian; 云南，保山，施甸',
    weaid: 1570
  },
  {
    display_text: '云南，保山，昌宁',
    search_text: 'yn, bs, cn; yun nan, bao shan, chang ning; 云南，保山，昌宁',
    weaid: 563
  },
  {
    display_text: '云南，保山，腾冲',
    search_text: 'yn, bs, tc; yun nan, bao shan, teng chong; 云南，保山，腾冲',
    weaid: 1677
  },
  {
    display_text: '云南，文山，城区',
    search_text: 'yn, ws, cq; yun nan, wen shan, cheng qu; 云南，文山，城区',
    weaid: 211
  },
  {
    display_text: '云南，文山，西畴',
    search_text: 'yn, ws, xc; yun nan, wen shan, xi chou; 云南，文山，西畴',
    weaid: 1842
  },
  {
    display_text: '云南，文山，马关',
    search_text: 'yn, ws, mg; yun nan, wen shan, ma guan; 云南，文山，马关',
    weaid: 1295
  },
  {
    display_text: '云南，文山，麻栗坡',
    search_text: 'yn, ws, mlp; yun nan, wen shan, ma li po; 云南，文山，麻栗坡',
    weaid: 1315
  },
  {
    display_text: '云南，文山，砚山',
    search_text: 'yn, ws, ys; yun nan, wen shan, yan shan; 云南，文山，砚山',
    weaid: 2048
  },
  {
    display_text: '云南，文山，丘北',
    search_text: 'yn, ws, qb; yun nan, wen shan, qiu bei; 云南，文山，丘北',
    weaid: 1467
  },
  {
    display_text: '云南，文山，广南',
    search_text: 'yn, ws, gn; yun nan, wen shan, guang nan; 云南，文山，广南',
    weaid: 805
  },
  {
    display_text: '云南，文山，富宁',
    search_text: 'yn, ws, fn; yun nan, wen shan, fu ning; 云南，文山，富宁',
    weaid: 728
  },
  {
    display_text: '云南，玉溪，城区',
    search_text: 'yn, yx, cq; yun nan, yu xi, cheng qu; 云南，玉溪，城区',
    weaid: 212
  },
  {
    display_text: '云南，玉溪，澄江',
    search_text: 'yn, yx, cj; yun nan, yu xi, cheng jiang; 云南，玉溪，澄江',
    weaid: 549
  },
  {
    display_text: '云南，玉溪，江川',
    search_text: 'yn, yx, jc; yun nan, yu xi, jiang chuan; 云南，玉溪，江川',
    weaid: 980
  },
  {
    display_text: '云南，玉溪，通海',
    search_text: 'yn, yx, th; yun nan, yu xi, tong hai; 云南，玉溪，通海',
    weaid: 1686
  },
  {
    display_text: '云南，玉溪，华宁',
    search_text: 'yn, yx, hn; yun nan, yu xi, hua ning; 云南，玉溪，华宁',
    weaid: 911
  },
  {
    display_text: '云南，玉溪，新平',
    search_text: 'yn, yx, xp; yun nan, yu xi, xin ping; 云南，玉溪，新平',
    weaid: 1893
  },
  {
    display_text: '云南，玉溪，易门',
    search_text: 'yn, yx, ym; yun nan, yu xi, yi men; 云南，玉溪，易门',
    weaid: 2015
  },
  {
    display_text: '云南，玉溪，峨山',
    search_text: 'yn, yx, es; yun nan, yu xi, e shan; 云南，玉溪，峨山',
    weaid: 698
  },
  {
    display_text: '云南，玉溪，元江',
    search_text: 'yn, yx, yj; yun nan, yu xi, yuan jiang; 云南，玉溪，元江',
    weaid: 1998
  },
  {
    display_text: '云南，楚雄，城区',
    search_text: 'yn, cx, cq; yun nan, chu xiong, cheng qu; 云南，楚雄，城区',
    weaid: 213
  },
  {
    display_text: '云南，楚雄，大姚',
    search_text: 'yn, cx, dy; yun nan, chu xiong, da yao; 云南，楚雄，大姚',
    weaid: 681
  },
  {
    display_text: '云南，楚雄，元谋',
    search_text: 'yn, cx, ym; yun nan, chu xiong, yuan mou; 云南，楚雄，元谋',
    weaid: 2018
  },
  {
    display_text: '云南，楚雄，姚安',
    search_text: 'yn, cx, ya; yun nan, chu xiong, yao an; 云南，楚雄，姚安',
    weaid: 1952
  },
  {
    display_text: '云南，楚雄，牟定',
    search_text: 'yn, cx, md; yun nan, chu xiong, mou ding; 云南，楚雄，牟定',
    weaid: 1288
  },
  {
    display_text: '云南，楚雄，南华',
    search_text: 'yn, cx, nh; yun nan, chu xiong, nan hua; 云南，楚雄，南华',
    weaid: 1367
  },
  {
    display_text: '云南，楚雄，武定',
    search_text: 'yn, cx, wd; yun nan, chu xiong, wu ding; 云南，楚雄，武定',
    weaid: 1761
  },
  {
    display_text: '云南，楚雄，禄丰',
    search_text: 'yn, cx, lf; yun nan, chu xiong, lu feng; 云南，楚雄，禄丰',
    weaid: 1144
  },
  {
    display_text: '云南，楚雄，双柏',
    search_text: 'yn, cx, sb; yun nan, chu xiong, shuang bai; 云南，楚雄，双柏',
    weaid: 1551
  },
  {
    display_text: '云南，楚雄，永仁',
    search_text: 'yn, cx, yr; yun nan, chu xiong, yong ren; 云南，楚雄，永仁',
    weaid: 2033
  },
  {
    display_text: '云南，普洱，城区',
    search_text: 'yn, pe, cq; yun nan, pu er, cheng qu; 云南，普洱，城区',
    weaid: 214
  },
  {
    display_text: '云南，普洱，景谷',
    search_text: 'yn, pe, jg; yun nan, pu er, jing gu; 云南，普洱，景谷',
    weaid: 991
  },
  {
    display_text: '云南，普洱，景东',
    search_text: 'yn, pe, jd; yun nan, pu er, jing dong; 云南，普洱，景东',
    weaid: 986
  },
  {
    display_text: '云南，普洱，澜沧',
    search_text: 'yn, pe, lc; yun nan, pu er, lan cang; 云南，普洱，澜沧',
    weaid: 1113
  },
  {
    display_text: '云南，普洱，墨江',
    search_text: 'yn, pe, mj; yun nan, pu er, mo jiang; 云南，普洱，墨江',
    weaid: 1302
  },
  {
    display_text: '云南，普洱，江城',
    search_text: 'yn, pe, jc; yun nan, pu er, jiang cheng; 云南，普洱，江城',
    weaid: 981
  },
  {
    display_text: '云南，普洱，孟连',
    search_text: 'yn, pe, ml; yun nan, pu er, meng lian; 云南，普洱，孟连',
    weaid: 1310
  },
  {
    display_text: '云南，普洱，西盟',
    search_text: 'yn, pe, xm; yun nan, pu er, xi meng; 云南，普洱，西盟',
    weaid: 1886
  },
  {
    display_text: '云南，普洱，镇沅',
    search_text: 'yn, pe, zy; yun nan, pu er, zhen yuan; 云南，普洱，镇沅',
    weaid: 2178
  },
  {
    display_text: '云南，普洱，宁洱',
    search_text: 'yn, pe, ne; yun nan, pu er, ning er; 云南，普洱，宁洱',
    weaid: 2617
  },
  {
    display_text: '云南，昭通，城区',
    search_text: 'yn, zt, cq; yun nan, zhao tong, cheng qu; 云南，昭通，城区',
    weaid: 215
  },
  {
    display_text: '云南，昭通，鲁甸',
    search_text: 'yn, zt, ld; yun nan, zhao tong, lu dian; 云南，昭通，鲁甸',
    weaid: 1138
  },
  {
    display_text: '云南，昭通，彝良',
    search_text: 'yn, zt, yl; yun nan, zhao tong, yi liang; 云南，昭通，彝良',
    weaid: 2011
  },
  {
    display_text: '云南，昭通，镇雄',
    search_text: 'yn, zt, zx; yun nan, zhao tong, zhen xiong; 云南，昭通，镇雄',
    weaid: 2162
  },
  {
    display_text: '云南，昭通，威信',
    search_text: 'yn, zt, wx; yun nan, zhao tong, wei xin; 云南，昭通，威信',
    weaid: 1812
  },
  {
    display_text: '云南，昭通，巧家',
    search_text: 'yn, zt, qj; yun nan, zhao tong, qiao jia; 云南，昭通，巧家',
    weaid: 1478
  },
  {
    display_text: '云南，昭通，绥江',
    search_text: 'yn, zt, sj; yun nan, zhao tong, sui jiang; 云南，昭通，绥江',
    weaid: 1588
  },
  {
    display_text: '云南，昭通，永善',
    search_text: 'yn, zt, ys; yun nan, zhao tong, yong shan; 云南，昭通，永善',
    weaid: 2047
  },
  {
    display_text: '云南，昭通，盐津',
    search_text: 'yn, zt, yj; yun nan, zhao tong, yan jin; 云南，昭通，盐津',
    weaid: 1997
  },
  {
    display_text: '云南，昭通，大关',
    search_text: 'yn, zt, dg; yun nan, zhao tong, da guan; 云南，昭通，大关',
    weaid: 620
  },
  {
    display_text: '云南，昭通，水富',
    search_text: 'yn, zt, sf; yun nan, zhao tong, shui fu; 云南，昭通，水富',
    weaid: 2618
  },
  {
    display_text: '云南，临沧，城区',
    search_text: 'yn, lc, cq; yun nan, lin cang, cheng qu; 云南，临沧，城区',
    weaid: 216
  },
  {
    display_text: '云南，临沧，沧源',
    search_text: 'yn, lc, cy; yun nan, lin cang, cang yuan; 云南，临沧，沧源',
    weaid: 594
  },
  {
    display_text: '云南，临沧，耿马',
    search_text: 'yn, lc, gm; yun nan, lin cang, geng ma; 云南，临沧，耿马',
    weaid: 802
  },
  {
    display_text: '云南，临沧，双江',
    search_text: 'yn, lc, sj; yun nan, lin cang, shuang jiang; 云南，临沧，双江',
    weaid: 1589
  },
  {
    display_text: '云南，临沧，凤庆',
    search_text: 'yn, lc, fq; yun nan, lin cang, feng qing; 云南，临沧，凤庆',
    weaid: 735
  },
  {
    display_text: '云南，临沧，永德',
    search_text: 'yn, lc, yd; yun nan, lin cang, yong de; 云南，临沧，永德',
    weaid: 1976
  },
  {
    display_text: '云南，临沧，云县',
    search_text: 'yn, lc, yx; yun nan, lin cang, yun xian; 云南，临沧，云县',
    weaid: 2619
  },
  {
    display_text: '云南，临沧，镇康',
    search_text: 'yn, lc, zk; yun nan, lin cang, zhen kang; 云南，临沧，镇康',
    weaid: 2127
  },
  {
    display_text: '云南，怒江，城区',
    search_text: 'yn, nj, cq; yun nan, nu jiang, cheng qu; 云南，怒江，城区',
    weaid: 217
  },
  {
    display_text: '云南，怒江，福贡',
    search_text: 'yn, nj, fg; yun nan, nu jiang, fu gong; 云南，怒江，福贡',
    weaid: 715
  },
  {
    display_text: '云南，怒江，兰坪',
    search_text: 'yn, nj, lp; yun nan, nu jiang, lan ping; 云南，怒江，兰坪',
    weaid: 1190
  },
  {
    display_text: '云南，怒江，泸水',
    search_text: 'yn, nj, ls; yun nan, nu jiang, lu shui; 云南，怒江，泸水',
    weaid: 1219
  },
  {
    display_text: '云南，怒江，贡山',
    search_text: 'yn, nj, gs; yun nan, nu jiang, gong shan; 云南，怒江，贡山',
    weaid: 817
  },
  {
    display_text: '云南，迪庆，香格里拉',
    search_text: 'yn, dq, xgll; yun nan, di qing, xiang ge li la; 云南，迪庆，香格里拉',
    weaid: 218
  },
  {
    display_text: '云南，迪庆，德钦',
    search_text: 'yn, dq, dq; yun nan, di qing, de qin; 云南，迪庆，德钦',
    weaid: 649
  },
  {
    display_text: '云南，迪庆，维西',
    search_text: 'yn, dq, wx; yun nan, di qing, wei xi; 云南，迪庆，维西',
    weaid: 1814
  },
  {
    display_text: '云南，丽江，城区',
    search_text: 'yn, lj, cq; yun nan, li jiang, cheng qu; 云南，丽江，城区',
    weaid: 219
  },
  {
    display_text: '云南，丽江，永胜',
    search_text: 'yn, lj, ys; yun nan, li jiang, yong sheng; 云南，丽江，永胜',
    weaid: 2050
  },
  {
    display_text: '云南，丽江，华坪',
    search_text: 'yn, lj, hp; yun nan, li jiang, hua ping; 云南，丽江，华坪',
    weaid: 916
  },
  {
    display_text: '云南，丽江，宁蒗',
    search_text: 'yn, lj, nl; yun nan, li jiang, ning lang; 云南，丽江，宁蒗',
    weaid: 1374
  },
  {
    display_text: '云南，德宏，城区',
    search_text: 'yn, dh, cq; yun nan, de hong, cheng qu; 云南，德宏，城区',
    weaid: 220
  },
  {
    display_text: '云南，德宏，陇川',
    search_text: 'yn, dh, lc; yun nan, de hong, long chuan; 云南，德宏，陇川',
    weaid: 1130
  },
  {
    display_text: '云南，德宏，盈江',
    search_text: 'yn, dh, yj; yun nan, de hong, ying jiang; 云南，德宏，盈江',
    weaid: 1996
  },
  {
    display_text: '云南，德宏，瑞丽',
    search_text: 'yn, dh, rl; yun nan, de hong, rui li; 云南，德宏，瑞丽',
    weaid: 1536
  },
  {
    display_text: '云南，德宏，梁河',
    search_text: 'yn, dh, lh; yun nan, de hong, liang he; 云南，德宏，梁河',
    weaid: 1152
  },
  {
    display_text: '云南，德宏，芒市',
    search_text: 'yn, dh, ms; yun nan, de hong, mang shi; 云南，德宏，芒市',
    weaid: 1245
  },
  {
    display_text: '云南，西双版纳，景洪',
    search_text: 'yn, xsbn, jh; yun nan, xi shuang ban na, jing hong; 云南，西双版纳，景洪',
    weaid: 221
  },
  {
    display_text: '云南，西双版纳，勐海',
    search_text: 'yn, xsbn, mh; yun nan, xi shuang ban na, meng hai; 云南，西双版纳，勐海',
    weaid: 1297
  },
  {
    display_text: '云南，西双版纳，勐腊',
    search_text: 'yn, xsbn, ml; yun nan, xi shuang ban na, meng la; 云南，西双版纳，勐腊',
    weaid: 1305
  },
  {
    display_text: '浙江，杭州，城区',
    search_text: 'zj, hz, cq; zhe jiang, hang zhou, cheng qu; 浙江，杭州，城区',
    weaid: 94
  },
  {
    display_text: '浙江，杭州，萧山',
    search_text: 'zj, hz, xs; zhe jiang, hang zhou, xiao shan; 浙江，杭州，萧山',
    weaid: 1901
  },
  {
    display_text: '浙江，杭州，桐庐',
    search_text: 'zj, hz, tl; zhe jiang, hang zhou, tong lu; 浙江，杭州，桐庐',
    weaid: 1711
  },
  {
    display_text: '浙江，杭州，淳安',
    search_text: 'zj, hz, ca; zhe jiang, hang zhou, chun an; 浙江，杭州，淳安',
    weaid: 524
  },
  {
    display_text: '浙江，杭州，建德',
    search_text: 'zj, hz, jd; zhe jiang, hang zhou, jian de; 浙江，杭州，建德',
    weaid: 984
  },
  {
    display_text: '浙江，杭州，余杭',
    search_text: 'zj, hz, yh; zhe jiang, hang zhou, yu hang; 浙江，杭州，余杭',
    weaid: 1983
  },
  {
    display_text: '浙江，杭州，临安',
    search_text: 'zj, hz, la; zhe jiang, hang zhou, lin an; 浙江，杭州，临安',
    weaid: 1106
  },
  {
    display_text: '浙江，杭州，富阳',
    search_text: 'zj, hz, fy; zhe jiang, hang zhou, fu yang; 浙江，杭州，富阳',
    weaid: 759
  },
  {
    display_text: '浙江，湖州，城区',
    search_text: 'zj, hz, cq; zhe jiang, hu zhou, cheng qu; 浙江，湖州，城区',
    weaid: 96
  },
  {
    display_text: '浙江，湖州，长兴',
    search_text: 'zj, hz, cx; zhe jiang, hu zhou, chang xing; 浙江，湖州，长兴',
    weaid: 581
  },
  {
    display_text: '浙江，湖州，安吉',
    search_text: 'zj, hz, aj; zhe jiang, hu zhou, an ji; 浙江，湖州，安吉',
    weaid: 458
  },
  {
    display_text: '浙江，湖州，德清',
    search_text: 'zj, hz, dq; zhe jiang, hu zhou, de qing; 浙江，湖州，德清',
    weaid: 646
  },
  {
    display_text: '浙江，嘉兴，城区',
    search_text: 'zj, jx, cq; zhe jiang, jia xing, cheng qu; 浙江，嘉兴，城区',
    weaid: 97
  },
  {
    display_text: '浙江，嘉兴，嘉善',
    search_text: 'zj, jx, js; zhe jiang, jia xing, jia shan; 浙江，嘉兴，嘉善',
    weaid: 1028
  },
  {
    display_text: '浙江，嘉兴，海宁',
    search_text: 'zj, jx, hn; zhe jiang, jia xing, hai ning; 浙江，嘉兴，海宁',
    weaid: 910
  },
  {
    display_text: '浙江，嘉兴，桐乡',
    search_text: 'zj, jx, tx; zhe jiang, jia xing, tong xiang; 浙江，嘉兴，桐乡',
    weaid: 1731
  },
  {
    display_text: '浙江，嘉兴，平湖',
    search_text: 'zj, jx, ph; zhe jiang, jia xing, ping hu; 浙江，嘉兴，平湖',
    weaid: 1311
  },
  {
    display_text: '浙江，嘉兴，海盐',
    search_text: 'zj, jx, hy; zhe jiang, jia xing, hai yan; 浙江，嘉兴，海盐',
    weaid: 950
  },
  {
    display_text: '浙江，宁波，城区',
    search_text: 'zj, nb, cq; zhe jiang, ning bo, cheng qu; 浙江，宁波，城区',
    weaid: 104
  },
  {
    display_text: '浙江，宁波，慈溪',
    search_text: 'zj, nb, cx; zhe jiang, ning bo, ci xi; 浙江，宁波，慈溪',
    weaid: 582
  },
  {
    display_text: '浙江，宁波，余姚',
    search_text: 'zj, nb, yy; zhe jiang, ning bo, yu yao; 浙江，宁波，余姚',
    weaid: 2080
  },
  {
    display_text: '浙江，宁波，奉化',
    search_text: 'zj, nb, fh; zhe jiang, ning bo, feng hua; 浙江，宁波，奉化',
    weaid: 718
  },
  {
    display_text: '浙江，宁波，象山',
    search_text: 'zj, nb, xs; zhe jiang, ning bo, xiang shan; 浙江，宁波，象山',
    weaid: 2493
  },
  {
    display_text: '浙江，宁波，宁海',
    search_text: 'zj, nb, nh; zhe jiang, ning bo, ning hai; 浙江，宁波，宁海',
    weaid: 1362
  },
  {
    display_text: '浙江，宁波，北仑',
    search_text: 'zj, nb, bl; zhe jiang, ning bo, bei lun; 浙江，宁波，北仑',
    weaid: 2494
  },
  {
    display_text: '浙江，宁波，鄞州',
    search_text: 'zj, nb, yz; zhe jiang, ning bo, yin zhou; 浙江，宁波，鄞州',
    weaid: 2495
  },
  {
    display_text: '浙江，宁波，镇海',
    search_text: 'zj, nb, zh; zhe jiang, ning bo, zhen hai; 浙江，宁波，镇海',
    weaid: 2113
  },
  {
    display_text: '浙江，绍兴，越城',
    search_text: 'zj, sx, yc; zhe jiang, shao xing, yue cheng; 浙江，绍兴，越城',
    weaid: 99
  },
  {
    display_text: '浙江，绍兴，诸暨',
    search_text: 'zj, sx, zj; zhe jiang, shao xing, zhu ji; 浙江，绍兴，诸暨',
    weaid: 2120
  },
  {
    display_text: '浙江，绍兴，上虞',
    search_text: 'zj, sx, sy; zhe jiang, shao xing, shang yu; 浙江，绍兴，上虞',
    weaid: 1656
  },
  {
    display_text: '浙江，绍兴，新昌',
    search_text: 'zj, sx, xc; zhe jiang, shao xing, xin chang; 浙江，绍兴，新昌',
    weaid: 1836
  },
  {
    display_text: '浙江，绍兴，嵊州',
    search_text: 'zj, sx, sz; zhe jiang, shao xing, sheng zhou; 浙江，绍兴，嵊州',
    weaid: 2496
  },
  {
    display_text: '浙江，绍兴，柯桥',
    search_text: 'zj, sx, kq; zhe jiang, shao xing, ke qiao; 浙江，绍兴，柯桥',
    weaid: 2497
  },
  {
    display_text: '浙江，台州，城区',
    search_text: 'zj, tz, cq; zhe jiang, tai zhou, cheng qu; 浙江，台州，城区',
    weaid: 100
  },
  {
    display_text: '浙江，台州，玉环',
    search_text: 'zj, tz, yh; zhe jiang, tai zhou, yu huan; 浙江，台州，玉环',
    weaid: 1988
  },
  {
    display_text: '浙江，台州，三门',
    search_text: 'zj, tz, sm; zhe jiang, tai zhou, san men; 浙江，台州，三门',
    weaid: 1597
  },
  {
    display_text: '浙江，台州，天台',
    search_text: 'zj, tz, tt; zhe jiang, tai zhou, tian tai; 浙江，台州，天台',
    weaid: 1727
  },
  {
    display_text: '浙江，台州，仙居',
    search_text: 'zj, tz, xj; zhe jiang, tai zhou, xian ju; 浙江，台州，仙居',
    weaid: 1880
  },
  {
    display_text: '浙江，台州，温岭',
    search_text: 'zj, tz, wl; zhe jiang, tai zhou, wen ling; 浙江，台州，温岭',
    weaid: 1778
  },
  {
    display_text: '浙江，台州，临海',
    search_text: 'zj, tz, lh; zhe jiang, tai zhou, lin hai; 浙江，台州，临海',
    weaid: 1148
  },
  {
    display_text: '浙江，台州，椒江',
    search_text: 'zj, tz, jj; zhe jiang, tai zhou, jiao jiang; 浙江，台州，椒江',
    weaid: 1002
  },
  {
    display_text: '浙江，台州，黄岩',
    search_text: 'zj, tz, hy; zhe jiang, tai zhou, huang yan; 浙江，台州，黄岩',
    weaid: 951
  },
  {
    display_text: '浙江，台州，路桥',
    search_text: 'zj, tz, lq; zhe jiang, tai zhou, lu qiao; 浙江，台州，路桥',
    weaid: 2499
  },
  {
    display_text: '浙江，温州，城区',
    search_text: 'zj, wz, cq; zhe jiang, wen zhou, cheng qu; 浙江，温州，城区',
    weaid: 101
  },
  {
    display_text: '浙江，温州，泰顺',
    search_text: 'zj, wz, ts; zhe jiang, wen zhou, tai shun; 浙江，温州，泰顺',
    weaid: 1723
  },
  {
    display_text: '浙江，温州，文成',
    search_text: 'zj, wz, wc; zhe jiang, wen zhou, wen cheng; 浙江，温州，文成',
    weaid: 1755
  },
  {
    display_text: '浙江，温州，平阳',
    search_text: 'zj, wz, py; zhe jiang, wen zhou, ping yang; 浙江，温州，平阳',
    weaid: 1451
  },
  {
    display_text: '浙江，温州，瑞安',
    search_text: 'zj, wz, ra; zhe jiang, wen zhou, rui an; 浙江，温州，瑞安',
    weaid: 1525
  },
  {
    display_text: '浙江，温州，洞头',
    search_text: 'zj, wz, dt; zhe jiang, wen zhou, dong tou; 浙江，温州，洞头',
    weaid: 663
  },
  {
    display_text: '浙江，温州，乐清',
    search_text: 'zj, wz, yq; zhe jiang, wen zhou, yue qing; 浙江，温州，乐清',
    weaid: 1194
  },
  {
    display_text: '浙江，温州，永嘉',
    search_text: 'zj, wz, yj; zhe jiang, wen zhou, yong jia; 浙江，温州，永嘉',
    weaid: 1991
  },
  {
    display_text: '浙江，温州，苍南',
    search_text: 'zj, wz, cn; zhe jiang, wen zhou, cang nan; 浙江，温州，苍南',
    weaid: 559
  },
  {
    display_text: '浙江，丽水，城区',
    search_text: 'zj, ls, cq; zhe jiang, li shui, cheng qu; 浙江，丽水，城区',
    weaid: 102
  },
  {
    display_text: '浙江，丽水，遂昌',
    search_text: 'zj, ls, sc; zhe jiang, li shui, sui chang; 浙江，丽水，遂昌',
    weaid: 1559
  },
  {
    display_text: '浙江，丽水，龙泉',
    search_text: 'zj, ls, lq; zhe jiang, li shui, long quan; 浙江，丽水，龙泉',
    weaid: 1197
  },
  {
    display_text: '浙江，丽水，缙云',
    search_text: 'zj, ls, jy; zhe jiang, li shui, jin yun; 浙江，丽水，缙云',
    weaid: 1071
  },
  {
    display_text: '浙江，丽水，青田',
    search_text: 'zj, ls, qt; zhe jiang, li shui, qing tian; 浙江，丽水，青田',
    weaid: 1497
  },
  {
    display_text: '浙江，丽水，云和',
    search_text: 'zj, ls, yh; zhe jiang, li shui, yun he; 浙江，丽水，云和',
    weaid: 1986
  },
  {
    display_text: '浙江，丽水，庆元',
    search_text: 'zj, ls, qy; zhe jiang, li shui, qing yuan; 浙江，丽水，庆元',
    weaid: 1520
  },
  {
    display_text: '浙江，丽水，松阳',
    search_text: 'zj, ls, sy; zhe jiang, li shui, song yang; 浙江，丽水，松阳',
    weaid: 1649
  },
  {
    display_text: '浙江，丽水，景宁',
    search_text: 'zj, ls, jn; zhe jiang, li shui, jing ning; 浙江，丽水，景宁',
    weaid: 1016
  },
  {
    display_text: '浙江，金华，城区',
    search_text: 'zj, jh, cq; zhe jiang, jin hua, cheng qu; 浙江，金华，城区',
    weaid: 98
  },
  {
    display_text: '浙江，金华，浦江',
    search_text: 'zj, jh, pj; zhe jiang, jin hua, pu jiang; 浙江，金华，浦江',
    weaid: 1418
  },
  {
    display_text: '浙江，金华，兰溪',
    search_text: 'zj, jh, lx; zhe jiang, jin hua, lan xi; 浙江，金华，兰溪',
    weaid: 1240
  },
  {
    display_text: '浙江，金华，义乌',
    search_text: 'zj, jh, yw; zhe jiang, jin hua, yi wu; 浙江，金华，义乌',
    weaid: 2057
  },
  {
    display_text: '浙江，金华，东阳',
    search_text: 'zj, jh, dy; zhe jiang, jin hua, dong yang; 浙江，金华，东阳',
    weaid: 679
  },
  {
    display_text: '浙江，金华，武义',
    search_text: 'zj, jh, wy; zhe jiang, jin hua, wu yi; 浙江，金华，武义',
    weaid: 1817
  },
  {
    display_text: '浙江，金华，永康',
    search_text: 'zj, jh, yk; zhe jiang, jin hua, yong kang; 浙江，金华，永康',
    weaid: 2004
  },
  {
    display_text: '浙江，金华，磐安',
    search_text: 'zj, jh, pa; zhe jiang, jin hua, pan an; 浙江，金华，磐安',
    weaid: 1402
  },
  {
    display_text: '浙江，衢州，城区',
    search_text: 'zj, qz, cq; zhe jiang, qu zhou, cheng qu; 浙江，衢州，城区',
    weaid: 103
  },
  {
    display_text: '浙江，衢州，常山',
    search_text: 'zj, qz, cs; zhe jiang, qu zhou, chang shan; 浙江，衢州，常山',
    weaid: 570
  },
  {
    display_text: '浙江，衢州，开化',
    search_text: 'zj, qz, kh; zhe jiang, qu zhou, kai hua; 浙江，衢州，开化',
    weaid: 1089
  },
  {
    display_text: '浙江，衢州，龙游',
    search_text: 'zj, qz, ly; zhe jiang, qu zhou, long you; 浙江，衢州，龙游',
    weaid: 1262
  },
  {
    display_text: '浙江，衢州，江山',
    search_text: 'zj, qz, js; zhe jiang, qu zhou, jiang shan; 浙江，衢州，江山',
    weaid: 1027
  },
  {
    display_text: '浙江，衢州，衢江',
    search_text: 'zj, qz, qj; zhe jiang, qu zhou, qu jiang; 浙江，衢州，衢江',
    weaid: 2500
  },
  {
    display_text: '浙江，舟山，城区',
    search_text: 'zj, zs, cq; zhe jiang, zhou shan, cheng qu; 浙江，舟山，城区',
    weaid: 95
  },
  {
    display_text: '浙江，舟山，嵊泗',
    search_text: 'zj, zs, ss; zhe jiang, zhou shan, sheng si; 浙江，舟山，嵊泗',
    weaid: 1625
  },
  {
    display_text: '浙江，舟山，岱山',
    search_text: 'zj, zs, ds; zhe jiang, zhou shan, dai shan; 浙江，舟山，岱山',
    weaid: 655
  },
  {
    display_text: '浙江，舟山，普陀',
    search_text: 'zj, zs, pt; zhe jiang, zhou shan, pu tuo; 浙江，舟山，普陀',
    weaid: 1442
  },
  {
    display_text: '浙江，舟山，定海',
    search_text: 'zj, zs, dh; zhe jiang, zhou shan, ding hai; 浙江，舟山，定海',
    weaid: 2501
  },
  {
    display_text: '重庆，城区',
    search_text: 'cq, cq; chong qing, cheng qu; 重庆，城区',
    weaid: 105
  },
  {
    display_text: '重庆，永川',
    search_text: 'cq, yc; chong qing, yong chuan; 重庆，永川',
    weaid: 140
  },
  {
    display_text: '重庆，合川',
    search_text: 'cq, hc; chong qing, he chuan; 重庆，合川',
    weaid: 106
  },
  {
    display_text: '重庆，南川',
    search_text: 'cq, nc; chong qing, nan chuan; 重庆，南川',
    weaid: 107
  },
  {
    display_text: '重庆，江津',
    search_text: 'cq, jj; chong qing, jiang jin; 重庆，江津',
    weaid: 108
  },
  {
    display_text: '重庆，渝北',
    search_text: 'cq, yb; chong qing, yu bei; 重庆，渝北',
    weaid: 110
  },
  {
    display_text: '重庆，北碚',
    search_text: 'cq, bb; chong qing, bei bei; 重庆，北碚',
    weaid: 111
  },
  {
    display_text: '重庆，巴南',
    search_text: 'cq, bn; chong qing, ba nan; 重庆，巴南',
    weaid: 112
  },
  {
    display_text: '重庆，长寿',
    search_text: 'cq, cs; chong qing, chang shou; 重庆，长寿',
    weaid: 113
  },
  {
    display_text: '重庆，黔江',
    search_text: 'cq, qj; chong qing, qian jiang; 重庆，黔江',
    weaid: 114
  },
  {
    display_text: '重庆，万州',
    search_text: 'cq, wz; chong qing, wan zhou; 重庆，万州',
    weaid: 116
  },
  {
    display_text: '重庆，涪陵',
    search_text: 'cq, fl; chong qing, fu ling; 重庆，涪陵',
    weaid: 117
  },
  {
    display_text: '重庆，城口',
    search_text: 'cq, ck; chong qing, cheng kou; 重庆，城口',
    weaid: 119
  },
  {
    display_text: '重庆，云阳',
    search_text: 'cq, yy; chong qing, yun yang; 重庆，云阳',
    weaid: 120
  },
  {
    display_text: '重庆，巫溪',
    search_text: 'cq, wx; chong qing, wu xi; 重庆，巫溪',
    weaid: 121
  },
  {
    display_text: '重庆，奉节',
    search_text: 'cq, fj; chong qing, feng jie; 重庆，奉节',
    weaid: 122
  },
  {
    display_text: '重庆，巫山',
    search_text: 'cq, ws; chong qing, wu shan; 重庆，巫山',
    weaid: 123
  },
  {
    display_text: '重庆，潼南',
    search_text: 'cq, tn; chong qing, tong nan; 重庆，潼南',
    weaid: 124
  },
  {
    display_text: '重庆，垫江',
    search_text: 'cq, dj; chong qing, dian jiang; 重庆，垫江',
    weaid: 125
  },
  {
    display_text: '重庆，梁平',
    search_text: 'cq, lp; chong qing, liang ping; 重庆，梁平',
    weaid: 126
  },
  {
    display_text: '重庆，忠县',
    search_text: 'cq, zx; chong qing, zhong xian; 重庆，忠县',
    weaid: 127
  },
  {
    display_text: '重庆，石柱',
    search_text: 'cq, sz; chong qing, shi zhu; 重庆，石柱',
    weaid: 128
  },
  {
    display_text: '重庆，大足',
    search_text: 'cq, dz; chong qing, da zu; 重庆，大足',
    weaid: 129
  },
  {
    display_text: '重庆，荣昌',
    search_text: 'cq, rc; chong qing, rong chang; 重庆，荣昌',
    weaid: 130
  },
  {
    display_text: '重庆，铜梁',
    search_text: 'cq, tl; chong qing, tong liang; 重庆，铜梁',
    weaid: 131
  },
  {
    display_text: '重庆，璧山',
    search_text: 'cq, bs; chong qing, bi shan; 重庆，璧山',
    weaid: 132
  },
  {
    display_text: '重庆，丰都',
    search_text: 'cq, fd; chong qing, feng dou; 重庆，丰都',
    weaid: 133
  },
  {
    display_text: '重庆，武隆',
    search_text: 'cq, wl; chong qing, wu long; 重庆，武隆',
    weaid: 134
  },
  {
    display_text: '重庆，彭水',
    search_text: 'cq, ps; chong qing, peng shui; 重庆，彭水',
    weaid: 135
  },
  {
    display_text: '重庆，綦江',
    search_text: 'cq, qj; chong qing, qi jiang; 重庆，綦江',
    weaid: 136
  },
  {
    display_text: '重庆，酉阳',
    search_text: 'cq, yy; chong qing, you yang; 重庆，酉阳',
    weaid: 137
  },
  {
    display_text: '重庆，秀山',
    search_text: 'cq, xs; chong qing, xiu shan; 重庆，秀山',
    weaid: 138
  },
  {
    display_text: '重庆，开州',
    search_text: 'cq, kz; chong qing, kai zhou; 重庆，开州',
    weaid: 2727
  }
]

export default cities
