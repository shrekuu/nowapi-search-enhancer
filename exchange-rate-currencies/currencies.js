const currencies = [
    {
        display_text: '阿尔巴尼亚列克, ALL',
        search_text: 'ALL; aebnylk; Albanian Lek; a er ba ni ya lie ke; 阿尔巴尼亚列克',
        code: 'ALL'
    },
    {
        display_text: '阿尔及利亚第纳尔, DZD',
        search_text: 'DZD; aejlydne; Algerian Dinar; a er ji li ya di na er; 阿尔及利亚第纳尔',
        code: 'DZD'
    },
    {
        display_text: '阿富汗尼, AFN',
        search_text: 'AFN; afhn; Afghani; a fu han ni; 阿富汗尼',
        code: 'AFN'
    },
    {
        display_text: '阿根廷披索, ARS',
        search_text: 'ARS; agtps; Argentine peso; a gen ting pi suo; 阿根廷披索',
        code: 'ARS'
    },
    {
        display_text: '阿联酋迪拉姆, AED',
        search_text: 'AED; alqdlm; United Arab Emirates Dirham; a lian qiu di la mu; 阿联酋迪拉姆',
        code: 'AED'
    },
    {
        display_text: '阿鲁巴盾, AWG',
        search_text: 'AWG; albd; Aruba Shield; a lu ba dun; 阿鲁巴盾',
        code: 'AWG'
    },
    {
        display_text: '阿曼里亚尔, OMR',
        search_text: 'OMR; amlye; Omani Rial; a man li ya er; 阿曼里亚尔',
        code: 'OMR'
    },
    {
        display_text: '阿塞拜疆新马纳特, AZN',
        search_text: 'AZN; asbjxmnt; Azerbaijan New Manat; a sai bai jiang xin ma na te; 阿塞拜疆新马纳特',
        code: 'AZN'
    },
    {
        display_text: '埃及镑, EGP',
        search_text: 'EGP; ajb; Egyptian pound; ai ji bang; 埃及镑',
        code: 'EGP'
    },
    {
        display_text: '埃塞俄比亚比尔, ETB',
        search_text: 'ETB; asebybe; Ethiopian Bill; ai sai e bi ya bi er; 埃塞俄比亚比尔',
        code: 'ETB'
    },
    {
        display_text: '安哥拉宽扎, AOA',
        search_text: 'AOA; aglkz; Angola Kwanza; an ge la kuan zha; 安哥拉宽扎',
        code: 'AOA'
    },
    {
        display_text: '澳大利亚元, AUD',
        search_text: 'AUD; adlyy; Australian dollar; ao da li ya yuan; 澳大利亚元',
        code: 'AUD'
    },
    {
        display_text: '澳门币, MOP',
        search_text: 'MOP; amb; MOP; ao men bi; 澳门币',
        code: 'MOP'
    },
    {
        display_text: '巴巴多斯元, BBD',
        search_text: 'BBD; bbdsy; Barbados Dollar; ba ba duo si yuan; 巴巴多斯元',
        code: 'BBD'
    },
    {
        display_text: '巴哈马元, BSD',
        search_text: 'BSD; bhmy; Bahamian dollar; ba ha ma yuan; 巴哈马元',
        code: 'BSD'
    },
    {
        display_text: '巴基斯坦卢比, PKR',
        search_text: 'PKR; bjstlb; Pakistan Rupee; ba ji si tan lu bi; 巴基斯坦卢比',
        code: 'PKR'
    },
    {
        display_text: '巴拉圭瓜拉尼, PYG',
        search_text: 'PYG; blggln; Paraguay Guarani; ba la gui gua la ni; 巴拉圭瓜拉尼',
        code: 'PYG'
    },
    {
        display_text: '巴林第纳尔, BHD',
        search_text: 'BHD; bldne; Bahraini Dinar; ba lin di na er; 巴林第纳尔',
        code: 'BHD'
    },
    {
        display_text: '巴拿马巴波亚, PAB',
        search_text: 'PAB; bnmbby; Panamanian Balboa; ba na ma ba bo ya; 巴拿马巴波亚',
        code: 'PAB'
    },
    {
        display_text: '巴西雷亚尔, BRL',
        search_text: 'BRL; bxlye; Brazilian Real; ba xi lei ya er; 巴西雷亚尔',
        code: 'BRL'
    },
    {
        display_text: '白俄罗斯卢布, BYR',
        search_text: 'BYR; belslb; Belarusian ruble; bai e luo si lu bu; 白俄罗斯卢布',
        code: 'BYR'
    },
    {
        display_text: '百慕大元, BMD',
        search_text: 'BMD; bmdy; Bermudian dollar; bai mu da yuan; 百慕大元',
        code: 'BMD'
    },
    {
        display_text: '保加利亚列瓦, BGN',
        search_text: 'BGN; bjlylw; Bulgarian Leva; bao jia li ya lie wa; 保加利亚列瓦',
        code: 'BGN'
    },
    {
        display_text: '冰岛克朗, ISK',
        search_text: 'ISK; bdkl; Icelandic Krona; bing dao ke lang; 冰岛克朗',
        code: 'ISK'
    },
    {
        display_text: '波兰兹罗提, PLN',
        search_text: 'PLN; blzlt; Polish Zloty; bo lan zi luo ti; 波兰兹罗提',
        code: 'PLN'
    },
    {
        display_text: '波斯尼亚和黑塞哥维那可, BAM',
        search_text: 'BAM; bsnyhhsgwnk; Bosnia and Herzegovina; bo si ni ya he hei sai ge wei na ke; 波斯尼亚和黑塞哥维那可',
        code: 'BAM'
    },
    {
        display_text: '玻利维亚诺, BOB',
        search_text: 'BOB; blwyn; Boliviano; bo li wei ya nuo; 玻利维亚诺',
        code: 'BOB'
    },
    {
        display_text: '伯利兹元, BZD',
        search_text: 'BZD; blzy; Belize Dollar; bo li zi yuan; 伯利兹元',
        code: 'BZD'
    },
    {
        display_text: '博茨瓦纳普拉, BWP',
        search_text: 'BWP; bcwnpl; Botswana Pula; bo ci wa na pu la; 博茨瓦纳普拉',
        code: 'BWP'
    },
    {
        display_text: '不丹努扎姆, BTN',
        search_text: 'BTN; bdnzm; Bhutan Nuzam; bu dan nu zha mu; 不丹努扎姆',
        code: 'BTN'
    },
    {
        display_text: '布隆迪法郎, BIF',
        search_text: 'BIF; bldfl; Burundi Franc; bu long di fa lang; 布隆迪法郎',
        code: 'BIF'
    },
    {
        display_text: '朝鲜元, KPW',
        search_text: 'KPW; cxy; Korean won; chao xian yuan; 朝鲜元',
        code: 'KPW'
    },
    {
        display_text: '丹麦克朗, DKK',
        search_text: 'DKK; dmkl; Danish Krone; dan mai ke lang; 丹麦克朗',
        code: 'DKK'
    },
    {
        display_text: '东加勒比元, XCD',
        search_text: 'XCD; djlby; East Caribbean Dollar; dong jia lei bi yuan; 东加勒比元',
        code: 'XCD'
    },
    {
        display_text: '多米尼加比索, DOP',
        search_text: 'DOP; dmnjbs; Dominican Peso; duo mi ni jia bi suo; 多米尼加比索',
        code: 'DOP'
    },
    {
        display_text: '俄罗斯卢布, RUB',
        search_text: 'RUB; elslb; Russian ruble; e luo si lu bu; 俄罗斯卢布',
        code: 'RUB'
    },
    {
        display_text: '厄立特里亚, ERN',
        search_text: 'ERN; eltly; Eritrea; e li te li ya; 厄立特里亚',
        code: 'ERN'
    },
    {
        display_text: '菲律宾比索, PHP',
        search_text: 'PHP; flbbs; Philippine Peso; fei lv bin bi suo; 菲律宾比索',
        code: 'PHP'
    },
    {
        display_text: '斐济元, FJD',
        search_text: 'FJD; fjy; Fiji Dollar; fei ji yuan; 斐济元',
        code: 'FJD'
    },
    {
        display_text: '佛得角埃斯库多, CVE',
        search_text: 'CVE; fdjaskd; Cape Verde Escudo; fu de jiao ai si ku duo; 佛得角埃斯库多',
        code: 'CVE'
    },
    {
        display_text: '福克兰群岛镑, FKP',
        search_text: 'FKP; fklqdb; Falkland Islands Pound; fu ke lan qun dao bang; 福克兰群岛镑',
        code: 'FKP'
    },
    {
        display_text: '冈比亚达拉西, GMD',
        search_text: 'GMD; gbydlx; Gambian Dalasi; gang bi ya da la xi; 冈比亚达拉西',
        code: 'GMD'
    },
    {
        display_text: '刚果法郎, CDF',
        search_text: 'CDF; ggfl; Congo franc; gang guo fa lang; 刚果法郎',
        code: 'CDF'
    },
    {
        display_text: '港币, HKD',
        search_text: 'HKD; gb; Hong Kong dollar; gang bi; 港币',
        code: 'HKD'
    },
    {
        display_text: '哥伦比亚比索, COP',
        search_text: 'COP; glbybs; Colombian Peso; ge lun bi ya bi suo; 哥伦比亚比索',
        code: 'COP'
    },
    {
        display_text: '哥斯达黎加科朗, CRC',
        search_text: 'CRC; gsdljkl; Costa Rica; ge si da li jia ke lang; 哥斯达黎加科朗',
        code: 'CRC'
    },
    {
        display_text: '格鲁吉亚拉里, GEL',
        search_text: 'GEL; gljyll; Georgia Larry; ge lu ji ya la li; 格鲁吉亚拉里',
        code: 'GEL'
    },
    {
        display_text: '古巴比索, CUP',
        search_text: 'CUP; gbbs; Cuban Peso; gu ba bi suo; 古巴比索',
        code: 'CUP'
    },
    {
        display_text: '圭亚那元, GYD',
        search_text: 'GYD; gyny; Guyana; gui ya na yuan; 圭亚那元',
        code: 'GYD'
    },
    {
        display_text: '哈萨克斯坦坚戈, KZT',
        search_text: 'KZT; hskstjg; Kazakhstan Tenge; ha sa ke si tan jian ge; 哈萨克斯坦坚戈',
        code: 'KZT'
    },
    {
        display_text: '海地古德, HTG',
        search_text: 'HTG; hdgd; Haitian Gourde; hai di gu de; 海地古德',
        code: 'HTG'
    },
    {
        display_text: '韩国元, KRW',
        search_text: 'KRW; hgy; Korean yuan; han guo yuan; 韩国元',
        code: 'KRW'
    },
    {
        display_text: '荷兰盾, ANG',
        search_text: 'ANG; hld; Dutch Shield; he lan dun; 荷兰盾',
        code: 'ANG'
    },
    {
        display_text: '洪都拉斯伦皮拉, HNL',
        search_text: 'HNL; hdlslpl; Honduran Lempira; hong dou la si lun pi la; 洪都拉斯伦皮拉',
        code: 'HNL'
    },
    {
        display_text: '黄金, XAU',
        search_text: 'XAU; hj; gold; huang jin; 黄金',
        code: 'XAU'
    },
    {
        display_text: '吉布提法郎, DJF',
        search_text: 'DJF; jbtfl; Djibouti Franc; ji bu ti fa lang; 吉布提法郎',
        code: 'DJF'
    },
    {
        display_text: '吉尔吉斯索姆, KGS',
        search_text: 'KGS; jejssm; Kyrgyz Som; ji er ji si suo mu; 吉尔吉斯索姆',
        code: 'KGS'
    },
    {
        display_text: '几内亚法郎, GNF',
        search_text: 'GNF; jnyfl; Guinea Franc; ji nei ya fa lang; 几内亚法郎',
        code: 'GNF'
    },
    {
        display_text: '加拿大元, CAD',
        search_text: 'CAD; jndy; Canadian dollar; jia na da yuan; 加拿大元',
        code: 'CAD'
    },
    {
        display_text: '加纳塞地, GHS',
        search_text: 'GHS; jnsd; Ghana Cedi; jia na sai de; 加纳塞地',
        code: 'GHS'
    },
    {
        display_text: '柬埔寨瑞尔, KHR',
        search_text: 'KHR; jpzre; Cambodian Riel; jian pu zhai rui er; 柬埔寨瑞尔',
        code: 'KHR'
    },
    {
        display_text: '捷克克朗, CZK',
        search_text: 'CZK; jkkl; Czech Koruna; jie ke ke lang; 捷克克朗',
        code: 'CZK'
    },
    {
        display_text: '津巴布韦元, ZWL',
        search_text: 'ZWL; jbbwy; Zimbabwean Yuan; jin ba bu wei yuan; 津巴布韦元',
        code: 'ZWL'
    },
    {
        display_text: '卡塔尔里亚尔, QAR',
        search_text: 'QAR; ktelye; Qatari Rial; ka ta er li ya er; 卡塔尔里亚尔',
        code: 'QAR'
    },
    {
        display_text: '开曼群岛元, KYD',
        search_text: 'KYD; kmqdy; Cayman Islands Dollar; kai man qun dao yuan; 开曼群岛元',
        code: 'KYD'
    },
    {
        display_text: '科摩罗法郎, KMF',
        search_text: 'KMF; kmlfl; Comoros Franc; ke mo luo fa lang; 科摩罗法郎',
        code: 'KMF'
    },
    {
        display_text: '科威特第纳尔, KWD',
        search_text: 'KWD; kwtdne; Kuwaiti Dinar; ke wei te di na er; 科威特第纳尔',
        code: 'KWD'
    },
    {
        display_text: '克罗地亚库纳, HRK',
        search_text: 'HRK; kldykn; Croatian Kuna; ke luo de ya ku na; 克罗地亚库纳',
        code: 'HRK'
    },
    {
        display_text: '肯尼亚先令, KES',
        search_text: 'KES; knyxl; Kenyan shilling; ken ni ya xian ling; 肯尼亚先令',
        code: 'KES'
    },
    {
        display_text: '拉脱维亚拉特, LVL',
        search_text: 'LVL; ltwylt; Latvian Lat; la tuo wei ya la te; 拉脱维亚拉特',
        code: 'LVL'
    },
    {
        display_text: '莱索托洛提, LSL',
        search_text: 'LSL; lstlt; Lesotho Loti; lai suo tuo luo ti; 莱索托洛提',
        code: 'LSL'
    },
    {
        display_text: '老挝基普, LAK',
        search_text: 'LAK; lwjp; Lao Kip; lao wo ji pu; 老挝基普',
        code: 'LAK'
    },
    {
        display_text: '离岸人民币, CNH',
        search_text: 'CNH; larmb; Offshore renminbi; li an ren min bi; 离岸人民币',
        code: 'CNH'
    },
    {
        display_text: '黎巴嫩镑, LBP',
        search_text: 'LBP; lbnb; Lebanese pound; li ba nen bang; 黎巴嫩镑',
        code: 'LBP'
    },
    {
        display_text: '立陶宛立特, LTL',
        search_text: 'LTL; ltwlt; Lithuanian Lita; li tao wan li te; 立陶宛立特',
        code: 'LTL'
    },
    {
        display_text: '利比里亚元, LRD',
        search_text: 'LRD; lblyy; Liberia; li bi li ya yuan; 利比里亚元',
        code: 'LRD'
    },
    {
        display_text: '利比亚第纳尔, LYD',
        search_text: 'LYD; lbydne; Libyan Dinar; li bi ya di na er; 利比亚第纳尔',
        code: 'LYD'
    },
    {
        display_text: '卢旺达法郎, RWF',
        search_text: 'RWF; lwdfl; Rwanda Franc; lu wang da fa lang; 卢旺达法郎',
        code: 'RWF'
    },
    {
        display_text: '罗马尼亚列伊, RON',
        search_text: 'RON; lmnyly; Romanian lei; luo ma ni ya lie yi; 罗马尼亚列伊',
        code: 'RON'
    },
    {
        display_text: '马达加斯加阿里亚里, MGA',
        search_text: 'MGA; mdjsjalyl; Ariari, Madagascar; ma da jia si jia a li ya li; 马达加斯加阿里亚里',
        code: 'MGA'
    },
    {
        display_text: '马尔代夫拉菲亚, MVR',
        search_text: 'MVR; medflfy; Maldives Raffia; ma er dai fu la fei ya; 马尔代夫拉菲亚',
        code: 'MVR'
    },
    {
        display_text: '马拉维克瓦查, MWK',
        search_text: 'MWK; mlwkwc; Malawi Kwacha; ma la wei ke wa cha; 马拉维克瓦查',
        code: 'MWK'
    },
    {
        display_text: '马来西亚林吉特, MYR',
        search_text: 'MYR; mlxyljt; Malaysian Ringgit; ma lai xi ya lin ji te; 马来西亚林吉特',
        code: 'MYR'
    },
    {
        display_text: '马其顿第纳尔, MKD',
        search_text: 'MKD; mqddne; Macedonian Dinar; ma qi dun di na er; 马其顿第纳尔',
        code: 'MKD'
    },
    {
        display_text: '毛里求斯卢比, MUR',
        search_text: 'MUR; mlqslb; Mauritian Rupee; mao li qiu si lu bi; 毛里求斯卢比',
        code: 'MUR'
    },
    {
        display_text: '毛里塔尼亚乌吉亚, MRO',
        search_text: 'MRO; mltnywjy; Ugiya, Mauritania; mao li ta ni ya wu ji ya; 毛里塔尼亚乌吉亚',
        code: 'MRO'
    },
    {
        display_text: '美元, USD',
        search_text: 'USD; my; Dollar; mei yuan; 美元',
        code: 'USD'
    },
    {
        display_text: '蒙古图格里克, MNT',
        search_text: 'MNT; mgtglk; Mongolian Tugrik; meng gu tu ge li ke; 蒙古图格里克',
        code: 'MNT'
    },
    {
        display_text: '孟加拉国塔卡, BDT',
        search_text: 'BDT; mjlgtk; Taka, Bangladesh; meng jia la guo ta ka; 孟加拉国塔卡',
        code: 'BDT'
    },
    {
        display_text: '秘鲁新索尔, PEN',
        search_text: 'PEN; blxse; New Sol, Peru; bi lu xin suo er; 秘鲁新索尔',
        code: 'PEN'
    },
    {
        display_text: '缅元, MMK',
        search_text: 'MMK; my; Kyat; mian yuan; 缅元',
        code: 'MMK'
    },
    {
        display_text: '摩尔多瓦列伊, MDL',
        search_text: 'MDL; medwly; Moldovan Leu; mo er duo wa lie yi; 摩尔多瓦列伊',
        code: 'MDL'
    },
    {
        display_text: '摩洛哥迪拉姆, MAD',
        search_text: 'MAD; mlgdlm; Moroccan Dirham; mo luo ge di la mu; 摩洛哥迪拉姆',
        code: 'MAD'
    },
    {
        display_text: '莫桑比克梅蒂卡尔, MZN',
        search_text: 'MZN; msbkmdke; Mozambique Meticar; mo sang bi ke mei di ka er; 莫桑比克梅蒂卡尔',
        code: 'MZN'
    },
    {
        display_text: '墨西哥比索, MXN',
        search_text: 'MXN; mxgbs; Mexican Peso; mo xi ge bi suo; 墨西哥比索',
        code: 'MXN'
    },
    {
        display_text: '纳米比亚元, NAD',
        search_text: 'NAD; nmbyy; Namibian dollar; na mi bi ya yuan; 纳米比亚元',
        code: 'NAD'
    },
    {
        display_text: '南非兰特, ZAR',
        search_text: 'ZAR; nflt; South African Rand; nan fei lan te; 南非兰特',
        code: 'ZAR'
    },
    {
        display_text: '尼泊尔卢比, NPR',
        search_text: 'NPR; npelb; Nepalese Rupee; ni po er lu bi; 尼泊尔卢比',
        code: 'NPR'
    },
    {
        display_text: '尼加拉瓜科多巴, NIO',
        search_text: 'NIO; njlgkdb; Nicaragua Cordoba; ni jia la gua ke duo ba; 尼加拉瓜科多巴',
        code: 'NIO'
    },
    {
        display_text: '尼日利亚第纳尔, NGN',
        search_text: 'NGN; nrlydne; Nigerian Dinar; ni ri li ya di na er; 尼日利亚第纳尔',
        code: 'NGN'
    },
    {
        display_text: '挪威克朗, NOK',
        search_text: 'NOK; nwkl; Norwegian Krone; nuo wei ke lang; 挪威克朗',
        code: 'NOK'
    },
    {
        display_text: '欧元, EUR',
        search_text: 'EUR; oy; EUR; ou yuan; 欧元',
        code: 'EUR'
    },
    {
        display_text: '人民币, CNY',
        search_text: 'CNY; rmb; Renminbi; ren min bi; 人民币',
        code: 'CNY'
    },
    {
        display_text: '日元, JPY',
        search_text: 'JPY; ry; JPY; ri yuan; 日元',
        code: 'JPY'
    },
    {
        display_text: '瑞典克朗, SEK',
        search_text: 'SEK; rdkl; Swedish Krona; rui dian ke lang; 瑞典克朗',
        code: 'SEK'
    },
    {
        display_text: '瑞士法郎, CHF',
        search_text: 'CHF; rsfl; Swiss Franc; rui shi fa lang; 瑞士法郎',
        code: 'CHF'
    },
    {
        display_text: '萨尔瓦多科朗, SVC',
        search_text: 'SVC; sewdkl; Salvador Colon; sa er wa duo ke lang; 萨尔瓦多科朗',
        code: 'SVC'
    },
    {
        display_text: '萨摩亚塔拉, WST',
        search_text: 'WST; smytl; Samoan Tara; sa mo ya ta la; 萨摩亚塔拉',
        code: 'WST'
    },
    {
        display_text: '塞尔维亚第纳尔, RSD',
        search_text: 'RSD; sewydne; Serbian Dinar; sai er wei ya di na er; 塞尔维亚第纳尔',
        code: 'RSD'
    },
    {
        display_text: '塞拉利昂利昂, SLL',
        search_text: 'SLL; sllala; Sierra Leone; sai la li ang li ang; 塞拉利昂利昂',
        code: 'SLL'
    },
    {
        display_text: '塞舌尔卢比, SCR',
        search_text: 'SCR; sselb; Seychelles Rupee; sai she er lu bi; 塞舌尔卢比',
        code: 'SCR'
    },
    {
        display_text: '沙特阿拉伯里亚尔, SAR',
        search_text: 'SAR; stalblye; Saudi Arabian Riyal; sha te a la bo li ya er; 沙特阿拉伯里亚尔',
        code: 'SAR'
    },
    {
        display_text: '圣多美多布拉, STD',
        search_text: 'STD; sdmdbl; Sao Tome Dobra; sheng duo mei duo bu la; 圣多美多布拉',
        code: 'STD'
    },
    {
        display_text: '圣赫勒拿镑, SHP',
        search_text: 'SHP; shlnb; St. Helena Pound; sheng he lei na bang; 圣赫勒拿镑',
        code: 'SHP'
    },
    {
        display_text: '斯里兰卡卢比, LKR',
        search_text: 'LKR; sllklb; Sri Lankan Rupee; si li lan ka lu bi; 斯里兰卡卢比',
        code: 'LKR'
    },
    {
        display_text: '斯威士兰里兰吉尼, SZL',
        search_text: 'SZL; swsllljn; Swaziland Rirangini; si wei shi lan li lan ji ni; 斯威士兰里兰吉尼',
        code: 'SZL'
    },
    {
        display_text: '苏丹镑, SDG',
        search_text: 'SDG; sdb; Sudanese pound; su dan bang; 苏丹镑',
        code: 'SDG'
    },
    {
        display_text: '苏里南元, SRD',
        search_text: 'SRD; slny; Surinamese; su li nan yuan; 苏里南元',
        code: 'SRD'
    },
    {
        display_text: '所罗门群岛元, SBD',
        search_text: 'SBD; slmqdy; Solomon Islands Dollar; suo luo men qun dao yuan; 所罗门群岛元',
        code: 'SBD'
    },
    {
        display_text: '索马里先令, SOS',
        search_text: 'SOS; smlxl; Somali shilling; suo ma li xian ling; 索马里先令',
        code: 'SOS'
    },
    {
        display_text: '塔吉克斯坦索莫尼, TJS',
        search_text: 'TJS; tjkstsmn; Tajikistan Somoni; ta ji ke si tan suo mo ni; 塔吉克斯坦索莫尼',
        code: 'TJS'
    },
    {
        display_text: '台币, TWD',
        search_text: 'TWD; tb; Taiwan dollar; tai bi; 台币',
        code: 'TWD'
    },
    {
        display_text: '太平洋法郎, XPF',
        search_text: 'XPF; tpyfl; Pacific Franc; tai ping yang fa lang; 太平洋法郎',
        code: 'XPF'
    },
    {
        display_text: '泰铢, THB',
        search_text: 'THB; tz; Thai baht; tai zhu; 泰铢',
        code: 'THB'
    },
    {
        display_text: '坦桑尼亚先令, TZS',
        search_text: 'TZS; tsnyxl; Tanzanian shilling; tan sang ni ya xian ling; 坦桑尼亚先令',
        code: 'TZS'
    },
    {
        display_text: '特别提款权（国际货币基金）, XDR',
        search_text: 'XDR; tbtkq(gjhbjj); Special Drawing Rights (International Monetary Fund); te bie ti kuan quan（guo ji huo bi ji jin); 特别提款权（国际货币基金）',
        code: 'XDR'
    },
    {
        display_text: '特立尼达和多巴哥元, TTD',
        search_text: 'TTD; tlndhdbgy; Trinidad and Tobago Dollar; te li ni da he duo ba ge yuan; 特立尼达和多巴哥元',
        code: 'TTD'
    },
    {
        display_text: '突尼斯第纳尔, TND',
        search_text: 'TND; tnsdne; Tunisian Dinar; tu ni si di na er; 突尼斯第纳尔',
        code: 'TND'
    },
    {
        display_text: '土耳其里拉, TRY',
        search_text: 'TRY; teqll; Turkish lira; tu er qi li la; 土耳其里拉',
        code: 'TRY'
    },
    {
        display_text: '土库曼斯坦马纳特, TMT',
        search_text: 'TMT; tkmstmnt; Turkmenistan Manat; tu ku man si tan ma na te; 土库曼斯坦马纳特',
        code: 'TMT'
    },
    {
        display_text: '瓦努阿图瓦图, VUV',
        search_text: 'VUV; wnatwt; Vanuatuwatu; wa nu a tu wa tu; 瓦努阿图瓦图',
        code: 'VUV'
    },
    {
        display_text: '危地马拉格查尔, GTQ',
        search_text: 'GTQ; wdmlgce; Guatemalan Quetzal; wei de ma la ge cha er; 危地马拉格查尔',
        code: 'GTQ'
    },
    {
        display_text: '委内瑞拉玻利瓦尔, VEF',
        search_text: 'VEF; wnrlblwe; Venezuelan Bolivar; wei nei rui la bo li wa er; 委内瑞拉玻利瓦尔',
        code: 'VEF'
    },
    {
        display_text: '文莱元, BND',
        search_text: 'BND; wly; Brunei Dollar; wen lai yuan; 文莱元',
        code: 'BND'
    },
    {
        display_text: '乌干达先令, UGX',
        search_text: 'UGX; wgdxl; Ugandan shilling; wu gan da xian ling; 乌干达先令',
        code: 'UGX'
    },
    {
        display_text: '乌克兰格里夫纳, UAH',
        search_text: 'UAH; wklglfn; Ukrainian hryvnia; wu ke lan ge li fu na; 乌克兰格里夫纳',
        code: 'UAH'
    },
    {
        display_text: '乌拉圭比索, UYU',
        search_text: 'UYU; wlgbs; Uruguay Peso; wu la gui bi suo; 乌拉圭比索',
        code: 'UYU'
    },
    {
        display_text: '乌兹别克斯坦索姆, UZS',
        search_text: 'UZS; wzbkstsm; Uzbekistan Som; wu zi bie ke si tan suo mu; 乌兹别克斯坦索姆',
        code: 'UZS'
    },
    {
        display_text: '西非法郎, XOF',
        search_text: 'XOF; xffl; West African Franc; xi fei fa lang; 西非法郎',
        code: 'XOF'
    },
    {
        display_text: '新几内亚基那基那, PGK',
        search_text: 'PGK; xjnyjnjn; New Guinea, Kinakina; xin ji nei ya ji na ji na; 新几内亚基那基那',
        code: 'PGK'
    },
    {
        display_text: '新加坡元, SGD',
        search_text: 'SGD; xjpy; Singapore dollar; xin jia po yuan; 新加坡元',
        code: 'SGD'
    },
    {
        display_text: '新西兰元, NZD',
        search_text: 'NZD; xxly; New Zealand dollar; xin xi lan yuan; 新西兰元',
        code: 'NZD'
    },
    {
        display_text: '匈牙利福林, HUF',
        search_text: 'HUF; xylfl; Hungarian Forint; xiong ya li fu lin; 匈牙利福林',
        code: 'HUF'
    },
    {
        display_text: '叙利亚镑, SYP',
        search_text: 'SYP; xlyb; Syrian pound; xu li ya bang; 叙利亚镑',
        code: 'SYP'
    },
    {
        display_text: '牙买加元, JMD',
        search_text: 'JMD; ymjy; Jamaican dollar; ya mai jia yuan; 牙买加元',
        code: 'JMD'
    },
    {
        display_text: '亚美尼亚德拉姆, AMD',
        search_text: 'AMD; ymnydlm; Armenian Dram; ya mei ni ya de la mu; 亚美尼亚德拉姆',
        code: 'AMD'
    },
    {
        display_text: '也门里亚尔, YER',
        search_text: 'YER; ymlye; Yemeni Rial; ye men li ya er; 也门里亚尔',
        code: 'YER'
    },
    {
        display_text: '伊拉克第纳尔, IQD',
        search_text: 'IQD; ylkdne; Iraqi Dinar; yi la ke di na er; 伊拉克第纳尔',
        code: 'IQD'
    },
    {
        display_text: '伊朗里亚尔, IRR',
        search_text: 'IRR; yllye; Iranian Rial; yi lang li ya er; 伊朗里亚尔',
        code: 'IRR'
    },
    {
        display_text: '以色列谢克尔, ILS',
        search_text: 'ILS; yslxke; Israeli Shekel; yi se lie xie ke er; 以色列谢克尔',
        code: 'ILS'
    },
    {
        display_text: '印度卢比, INR',
        search_text: 'INR; ydlb; Indian Rupee; yin du lu bi; 印度卢比',
        code: 'INR'
    },
    {
        display_text: '印度尼西亚盾, IDR',
        search_text: 'IDR; ydnxyd; Indonesian Shield; yin du ni xi ya dun; 印度尼西亚盾',
        code: 'IDR'
    },
    {
        display_text: '英镑, GBP',
        search_text: 'GBP; yb; GBP; ying bang; 英镑',
        code: 'GBP'
    },
    {
        display_text: '约旦第纳尔, JOD',
        search_text: 'JOD; yddne; Jordanian Dinar; yue dan di na er; 约旦第纳尔',
        code: 'JOD'
    },
    {
        display_text: '越南盾, VND',
        search_text: 'VND; ynd; Vietnamese Shield; yue nan dun; 越南盾',
        code: 'VND'
    },
    {
        display_text: '赞比亚克瓦查, ZMW',
        search_text: 'ZMW; zbykwc; Zambia Kwacha; zan bi ya ke wa cha; 赞比亚克瓦查',
        code: 'ZMW'
    },
    {
        display_text: '直布罗陀镑, GIP',
        search_text: 'GIP; zbltb; Gibraltar Pound; zhi bu luo tuo bang; 直布罗陀镑',
        code: 'GIP'
    },
    {
        display_text: '智利比索, CLF',
        search_text: 'CLF; zlbs; Chilean Peso; zhi li bi suo; 智利比索',
        code: 'CLF'
    },
    {
        display_text: '智利比索, CLP',
        search_text: 'CLP; zlbs; Chilean Peso; zhi li bi suo; 智利比索',
        code: 'CLP'
    },
    {
        display_text: '中非法郎, XAF',
        search_text: 'XAF; zffl; Central African Franc; zhong fei fa lang ; 中非法郎',
        code: 'XAF'
    }]

export default currencies
