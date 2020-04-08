/*
=====================================================
檔案名稱：Nextage様js共通ファイル
檔案用途：カスタマイズのjs、タグなどは既にここに書いてある
檔案建立日：2017.08.15
檔案建立人：Bella.Wu 

＊＊ps.增加或修改請一定要備註寫清楚做何用途，感謝＊＊
=====================================================
*/
jQuery(function ($) {
  var time = new Date().getTime();
  var API_script_LINK = 'https://www.cros.tw/lp/development/LP_API/API.js?time' + time;
  var API_script_TAG = $('<script>').prop('src', API_script_LINK);
  $('head').append(API_script_TAG);
});
//window.addEventListener('load', function() { addMomo1(); });
//window.addEventListener('load', function() { addMomo16(); });
// DisableSize();
window.addEventListener("load", function () {
  addPolicy();
  if (window.location.href.indexOf("/vg01/") > -1 ||
    window.location.href.indexOf("/vg01_bk20191218/") > -1 ||
    window.location.href.indexOf("/vg01_bk20190606/") > -1 ||
    window.location.href.indexOf("/vgdm/") > -1 ||
    window.location.href.indexOf("/vgma04/") > -1 ||
    window.location.href.indexOf("/vgma03/") > -1 ||
    window.location.href.indexOf("/vgma01/") > -1 ||
    window.location.href.indexOf("/vgma02/") > -1 ||
    window.location.href.indexOf("/vgdm30/") > -1) {
    edit_tr_HeadMemo3();
  } else {
    // preOrderPromptInit();
  }
  if (
    // window.location.href.indexOf("/vgma01/") > -1 ||
    // window.location.href.indexOf("/vg01/") > -1 ||
    window.location.href.indexOf("/access_form_sample/") > -1 ||
    // window.location.href.indexOf("/vgma02/") > -1 ||
    // window.location.href.indexOf("/vgma03/") > -1 ||
    window.location.href.indexOf("/vgpl01/") > -1
    // window.location.href.indexOf("/vgma04/") > -1
    // window.location.href.indexOf("/vgdm30/") > -1 ||
    // window.location.href.indexOf("/vgdm/") > -1
    ) {
    edit_tr_HeadMemo();
    // disableSize();
    judgePriceTag();
  }
  if (window.location.href.indexOf("/VBULP01/") > -1) {
    edit_tr_HeadMemo2();
    //disableSize2();
  }
  edit_tr_HeadMemo4();
  // preOrderPromptInitAll();
  // disableSize3();
  // addCardMomo();
});

// if (window.location.href.indexOf("/vg01/") > -1 ||
//     window.location.href.indexOf("/vgma01/") > -1 ||
//     window.location.href.indexOf("/vgma02/") > -1 ||
//     window.location.href.indexOf("/vgma03/") > -1) {

// }
/**
 *  #5257依賴，預設選擇商品
 */
var SelectPresetProduct = ["/hd01/", "/hd03/", "/hpma/", "/hpma2/", "/hpma5/", "/hpma7/"];
SelectPresetProduct.map((url) => {
  if (window.location.href.indexOf(url) > -1) {
    window.addEventListener("load", function () {
      jQuery("#productCode")[0].selectedIndex = 0;
    });
  }
});

/* ----------------------------------------------- 共通ポリシーテキスト ----------------------------------------------- */
var policyText =
  "本公司非常重視顧客的隱私權，期許能與顧客建立長久的信賴關係，為落實顧客之個人資料保護，本公司設計了下列個人資料保護方針及進行蒐集前之告知。\n\
\n\
一、蒐集之目的\n\
本公司只會使用您提供的個人資料用於建立顧客資料庫、商品寄送、金融交易及授權、商品推薦及行銷活動、市場分析、寄送活動情報與商品型錄、進行客戶服務等目的，除上述目的外不會利用您的個人資料。\n\
\n\
二、蒐集之個人資料類別\n\
1. 辨識個人者(代號C001)。例如：姓名、地址、行動電話、電子郵件等。\n\
2. 辨識財務者(代號C002)。例如：金融機構帳戶之號碼及姓名、信用卡或簽帳卡之號碼等。\n\
3. 個人描述(代號C011)。例如：年齡、性別、出生年月日、國籍等。\n\
4. 家庭情形(代號C021)。例如：婚姻狀況、有無子女等。\n\
\n\
三、個人資料利用之期間、地區、對象及方式\n\
1. 期間：本公司將於營運期間保存您的個人資料。\n\
2. 地區：您的個人資料將用於台灣、本公司海外總公司及關係企業所在地、本公司業務委外合作公司所在地、與本公司有業務往來之機構營業處所在地等地區。\n\
3. 對象及方式：您的個人資料可能以文件、電子媒體等方式提供給本公司、本公司海外總公司及關係企業、本公司業務委外合作公司，如：物流公司、印刷公司、廣告行銷公司等。本公司將以信件、電子郵件、電話等通訊方式通知您相關行銷活動及進行顧客服務。\n\
\n\
四、對於您提供之個人資料，您可隨時查詢或請求閱覽、請求補充或更正、請求停止蒐集、處理或利用、請求刪除；如有變更個人資料之需求，可以與本公司客服中心聯絡，我們將儘速進行處理。\n\
\n\
五、本公司只會將您的個人資料提供給執行業務之相關合作公司，不會提供給其他第三者。如您不願意提供真實且正確完整的個人資料，將可能導致無法成功訂購商品、無法寄送商品、無法獲得最新資訊以及相關優惠通知。\n\
\n\
六、本公司遵守在台灣當地對於顧客隱私的法律條規，本公司將妥善保存顧客提供的個人資料並盡力以合法程序保障所有顧客的個人資料之安全。如您對個人資料相關事項有任何疑問，可以與本公司客服中心聯絡，我們將儘速進行處理。\n\
\n\
以上內容若確認完畢且按下訂購鍵將視為同意本公司提供產品之規範與說明。";

/* ----------------------------------------------- 共通ポリシーテキスト ----------------------------------------------- */

/*----------------------------------------------function-----------------------------------------*/
//window.onload=function(){
function addPolicy() {
  if (document.getElementById("policy") == null) {
    setTimeout(addPolicy, 1000);
    return;
  }

  policyTitle = document.getElementById("policyTitle");
  policyTitle.innerText = "▼己詳閱並同意以下事項、確認訂購▼";

  policyContact = document.getElementById("policyText");
  policyContact.innerHTML = policyText;
  policyContact.style.display = "";

  //br   = document.createElement('br');
  //document.getElementById('submitBtn').appendChild(label);
  //document.getElementById('submitBtn').appendChild(text);
}

function addCardMomo() {
  if (document.getElementById("tr_paymentMethod") == null) {
    setTimeout(addCardMomo, 1000);
    return;
  }
  $ = jQuery;
  var rightContents = $("#tr_paymentMethod .rightContents");
  // rightContents.append('<br>');
  var contents = $('<span>目前因刷卡系統出現狀況，請使用其他付款方式，或稍後回到購物頁/聯絡客服訂購。造成不便深感抱歉！</span>').css({
    'color': 'red',
    'text-align': 'left',
    'line-height': '2',
    'display': 'block',
    'margin-top': '10px',
  });
  rightContents.append(contents);
}

function addCreditIcon() {
  if (document.getElementById("paymentMethod_card") == null) {
    setTimeout(addCreditIcon, 1000);
    return;
  }

  element = document.getElementById("paymentMethod_card");
  element.nextElementSibling.innerHTML += "<img style='height:16px;vertical-align: initial;min-width:initial;width:initial;' src='" + SETTING_IMAGE_URL + "/icon_creditcard.jpg'>";
}

//edit tr_HeadMemo
function edit_tr_HeadMemo() {
  if (document.getElementById("tr_HeadMemo") == null) {
    setTimeout(edit_tr_HeadMemo, 1000);
    return;
  }
  jQuery("#langHeadMemoTitle").html('注意事項');

  jQuery("#langHeadMemoBody").html('\
      ＜退換貨說明＞<br>\
      本商品屬個人衛生用品，係屬消保法第十九條第一項所稱合理例外情事，<font color="red">個人衛生用品不適用於七天猶豫期之規定，恕無法受理因個人因素之退換貨</font>，敬請見諒。<br>\
      ＜配送說明＞<br>\
      本商品係由日本HRC株式会社委託台灣娜珂黛肌美容事業有限公司在台負責發貨，<font color="red">若您因個人因素多次無法收貨而導致商品被退回，退款金額將扣除運費100元台幣</font>，不便之處敬請見諒。<br>\
      ＜選購指南＞<br>\
      <font color="red">如未出現顏色選項請重新整理網頁後，即可選購。</font><br>\
      <預購說明><br>\
11/20起部分商品改為預購制，請看尺碼後是否有（預購）標識，購買預購商品將於12月16起按預購順序出貨。若購買多入組中包含預購商品，將同預購商品發貨日一起發送。');
  // <br>\
  // <預購說明><br>\
  // <font color="red">10/1起部分商品改為預購制，請看尺碼後是否有（預購）標識，購買（預購）商品將於10月底按預購順序出貨。若購買多入組中包含預購商品，將同預購商品發貨日一起發送。標識為（缺貨）的商品暫時無法預購。</font>
}

//edit tr_HeadMemo2
function edit_tr_HeadMemo2() {
  if (document.getElementById("tr_HeadMemo") == null) {
    setTimeout(edit_tr_HeadMemo2, 1000);
    return;
  }
  jQuery("#langHeadMemoTitle").html('注意事項');

  jQuery("#langHeadMemoBody").html('\
      ＜退換貨說明＞<br>\
      本商品屬個人衛生用品，係屬消保法第十九條第一項所稱合理例外情事，<font color="red">個人衛生用品不適用於七天猶豫期之規定，恕無法受理因個人因素之退換貨</font>，敬請見諒。');
  // <br>\
  // <預購說明><br>\
  // <font color="red">10/1起部分商品改為預購制，請看尺碼後是否有（預購）標識，購買（預購）商品將於10月底按預購順序出貨。若購買多入組中包含預購商品，將同預購商品發貨日一起發送。標識為（缺貨）的商品暫時無法預購。</font>
}

//edit tr_HeadMemo
function edit_tr_HeadMemo3() {
  if (document.getElementById("tr_HeadMemo") == null) {
    setTimeout(edit_tr_HeadMemo3, 1000);
    return;
  }
  jQuery("#langHeadMemoTitle").html('注意事項');

  jQuery("#langHeadMemoBody").html('\
      ＜退換貨說明＞<br>\
      本商品屬個人衛生用品，係屬消保法第十九條第一項所稱合理例外情事，<font color="red">個人衛生用品不適用於七天猶豫期之規定，恕無法受理因個人因素之退換貨</font>，敬請見諒。<br>\
      ＜配送說明＞<br>\
      本商品係由日本HRC株式会社委託台灣娜珂黛肌美容事業有限公司在台負責發貨，<font color="red">若您因個人因素多次無法收貨而導致商品被退回，退款金額將扣除運費100元台幣</font>，不便之處敬請見諒。<br>\
      ＜選購指南＞<br>\
      <font color="red">如未出現顏色選項請重新整理網頁後，即可選購。</font><br>\
      ')
}

//edit tr_HeadMemo
function edit_tr_HeadMemo4() {
  if (document.getElementById("tr_HeadMemo") == null) {
    setTimeout(edit_tr_HeadMemo4, 1000);
    return;
  }
  jQuery("#langHeadMemoTitle").html('注意事項');

  jQuery("#langHeadMemoBody").html('\
  ＜退換貨說明＞<br>\
  本商品屬個人衛生用品，係屬消保法第十九條第一項所稱合理例外情事，<font color="red">個人衛生用品不適用於七天猶豫期之規定，恕無法受理因個人因素之退換貨</font>，敬請見諒。<br>\
  ＜配送說明＞<br>\
  本商品係由日本HRC株式会社委託台灣娜珂黛肌美容事業有限公司在台負責發貨，<font color="red">若您因個人因素多次無法收貨而導致商品被退回，退款金額將扣除運費100元台幣</font>，不便之處敬請見諒。<br>\
  ＜選購指南＞<br>\
  <font color="red">如未出現顏色選項請重新整理網頁後，即可選購。</font><br>\
  ＜購買數量限制＞<br>\
  為保證每位顧客都能體驗到商品，<font color="red">每位顧客每個月限購買10件。</font>超過的自動延期到下個月出貨或取消。\
  ')
  // <預購說明><br>\
  // 因近期商品熱銷，部分商品改為預購制，<font color="red">請看尺碼後是否有（預購）標識，購買預購商品將於2/13起按預購順序出貨。若購買多入組中包含預購商品，將同預購商品發貨日一起發送。</font>');
  // <br>\
  // <預購說明><br>\
  // <font color="red">10/1起部分商品改為預購制，請看尺碼後是否有（預購）標識，購買（預購）商品將於10月底按預購順序出貨。若購買多入組中包含預購商品，將同預購商品發貨日一起發送。標識為（缺貨）的商品暫時無法預購。</font>
}

function DisableSize() {
  if (document.getElementById("productSelection_A") == null) {
    setTimeout(DisableSize, 1000);
    return;
  }

  let allLockData = GetJsonData();

  var pathArray = location.pathname.split('/');
  while (pathArray.includes("")) {
    pathArray.splice(pathArray.indexOf(""), 1)
  }

  for (let urlIndex = 0; urlIndex < Object.keys(allLockData).length; urlIndex++) { // 判斷JSON中有多少URL需要設定，並跑迴圈個別調整。
    if (pathArray.includes(Object.keys(allLockData)[urlIndex])) { // 判斷使用者所在的頁面是否需要設定
      let allLockProductInURL = allLockData[Object.keys(allLockData)[urlIndex]];
      for (let productIndex = 0; productIndex < Object.keys(allLockProductInURL).length; productIndex++) {
        // 將該URL內的每個商品ID上鎖。
        if (jQuery('#' + Object.keys(allLockProductInURL)[productIndex]).length > 0) {
          jQuery('#' + Object.keys(allLockProductInURL)[productIndex]).parent().find(':input').attr('disabled', true);
          jQuery('#' + Object.keys(allLockProductInURL)[productIndex]).empty().append('<option value="0">' +
            allLockProductInURL[Object.keys(allLockProductInURL)[productIndex]].text + '<option>');
        } else {
          throw ('not found ' + Object.keys(allLockProductInURL)[productIndex]);
        }
      }
    }
  }

}

function GetJsonData() {
  let result;
  let rawFile = new XMLHttpRequest();
  let version = Date.now() * 1000 + Math.floor(Math.random() * 1000);
  rawFile.open("GET", 'https://viagebeautybra.com/CommonFiles/js/lock.json?ver=' + version, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        let allText = rawFile.responseText;
        result = JSON.parse(allText);
      }
    }
  }
  rawFile.send(null);
  return result.LockedProduct;
}
//for redmine #22970依賴 把缺貨的商品 櫻花粉S號顯示缺貨並鎖住下拉選項使其無法選購
//for redmine #24339依賴 把缺貨的商品 海軍藍S號顯示缺貨並鎖住下拉選項使其無法選購
function disableSize3() {
  if (document.getElementById("productSelection_A") == null) {
    setTimeout(disableSize3, 1000);
    return;
  }
  // jQuery('.titlefont4:eq(4)').after(jQuery('<div>', {
  //   'class': 'titlefont',
  //   'html': '<font color="red">S號及M號已售完</font>'
  // }));
  jQuery('#A_RD_S').parent().find(':input').attr('disabled', true);
  jQuery('#A_RD_S').empty().append('<option value="0">缺貨<option>');

  jQuery('#A_BL_S').parent().find(':input').attr('disabled', true);
  jQuery('#A_BL_S').empty().append('<option value="0">缺貨<option>');
  
  jQuery('#A_SL_M').parent().find(':input').attr('disabled', true);
  jQuery('#A_SL_M').empty().append('<option value="0">缺貨<option>');
  
  jQuery('#A_SL_SM').parent().find(':input').attr('disabled', true);
  jQuery('#A_SL_SM').empty().append('<option value="0">缺貨<option>');
}

function judgePriceTag() {
  if (!(jQuery('#resetSelectedProductBtn').length && jQuery('#productSelection_A .row').length)) {
    return void setTimeout(judgePriceTag, 500);
  }

  jQuery('#resetSelectedProductBtn').click(function () {
    clearPriceTagText();
  });
  jQuery('#productSelection_A .row').click(function () {
    var prdList = jQuery('#products').val();
    if (prdList) {
      prdList = JSON.parse(prdList);
      if (prdListAmountCal(prdList)) {
        addPriceTag();
      } else {
        clearPriceTagText();
      }
    } else {
      clearPriceTagText();
    }
  });
}

function addPriceTag() {
  if (!(jQuery('#priceShippingTag_right').length && jQuery('#priceShippingTag_bottom').length)) {
    jQuery('#amount_info_payment_amount').after('<span id="priceShippingTag_right">一入運費80元 二入以上免運</span>');
    jQuery('#tr_price').append('<span id="priceShippingTag_bottom">一入運費80元 二入以上免運</span>');
  } else {
    jQuery('#priceShippingTag_right').text('一入運費80元 二入以上免運');
    jQuery('#priceShippingTag_bottom').text('一入運費80元 二入以上免運');
  }
}

function clearPriceTagText() {
  jQuery('#priceShippingTag_right').text('');
  jQuery('#priceShippingTag_bottom').text('');
}

function prdListAmountCal(list) {
  var amount;
  if (list.length > 1) {
    return false;
  } else {
    amount = list.every(function (item) {
      return item.quantity == 1;
    });
    return amount ?
      true :
      false;
  }
}

function preOrderPromptInit() {
  // A_BL_S DARKBLUE S
  // A_BK_S BLACK S
  // A_RD_M PINK M
  // A_BK_M BLACK M
  let $ = jQuery;
  let preOrderProductList = ['#A_RD_L', '#A_BK_S', '#A_BL_L', '#A_BK_L', '#A_LP_L', '#A_LP_M', '#A_SL_L', '#A_BL_SM', '#A_BL_ML', '#A_BL_LL',
    '#A_BK_SM', '#A_BK_ML', '#A_BK_LL', '#A_RD_SM', '#A_RD_ML', '#A_RD_LL', '#A_LP_SM', '#A_LP_ML', '#A_LP_LL', '#A_SL_SM', '#A_SL_ML',
    '#A_SL_LL', '#A_BL_S', '#A_BK_M', '#A_RD_M'
  ];
  // 如果匹配的項目(總和)數量 == 0, 會持續執行迴圈
  if (preOrderProductList.filter(item => $(item).length != 0).length == 0) {
    return void setTimeout(preOrderPromptInit, 500);
  }
  preOrderProductList.forEach(item => {
    let $element = $('<span>', {
      text: '(預購)',
      style: 'color: red; position: absolute;'
    });
    $(item).parent().find('.size-title').append($element);
  });
}

function preOrderPromptInitAll() {
  // A_BL_S DARKBLUE S
  // A_BK_S BLACK S
  // A_RD_M PINK M
  // A_BK_M BLACK M
  let $ = jQuery;
  let preOrderProductList = ['#A_BK_S', '#A_SL_SM', '#A_SL_M', '#A_LP_S', '#A_RD_S', '#A_RD_SM', '#A_BL_S', '#A_BL_SM', '#A_BK_SM', '#A_LP_SM',
   '#A_SL_L', '#A_SL_LL', '#A_LP_L', '#A_LP_LL', '#A_BL_M', '#A_BK_M', '#A_BK_L', '#A_SL_ML', '#A_LP_M', '#A_BK_LL', '#A_RD_M'];
  // 如果匹配的項目(總和)數量 == 0, 會持續執行迴圈
  if (preOrderProductList.filter(item => $(item).length != 0).length == 0) {
    return void setTimeout(preOrderPromptInitAll, 500);
  }
  preOrderProductList.forEach(item => {
    let $element = $('<span>', {
      text: '(預購)',
      style: 'color: red; position: absolute;'
    });
    $(item).parent().find('.size-title').append($element);
  });
}

function callGA() {

  var strUrl = location.search;
  var getPara, ParaVal;
  var aryPara = [];

  if (strUrl.indexOf("?") != -1) {
    var getSearch = strUrl.split("?");
    getPara = getSearch[1].split("&");
    for (i = 0; i < getPara.length; i++) {
      ParaVal = getPara[i].split("=");
      aryPara.push(ParaVal[0]);
      aryPara[ParaVal[0]] = ParaVal[1];
    }
  }

  var ga = "<script>\n\window.dataLayer= window.dataLayer|| []\n\dataLayer.push({\n\'transactionId': '" + aryPara['order_id'] + "',\n\'transactionTotal': " + aryPara['payment_total'] + ",\n\'transactionShipping': 0,\n\'transactionProducts': [{\n\'sku': '" + aryPara['product_code'] + "',\n\'name': '" + aryPara['product_code'] + "',\n\'price': " + aryPara['payment_total'] + ",\n\'quantity': 1\n\}]\n\});\n\</script>";
  document.write(ga);

}


/* function addMomo16() {
  if (document.getElementById("tr_Memo16") == null) {
    setTimeout(addMomo16, 1000);
    return;
  }

  leftContents16 = document.getElementById("leftContents16");
  leftContents16.innerText = "";

  rightContents16 = document.getElementById("rightContents16");
  rightContents16.innerHTML =
    '<center>購買前請詳閱<a class="crosLink" href="javascript:void(0);" onclick="openWindow_ta();" return false;">個人資訊相關事項</a></center>';
} */

/*----------------------------------------------function-----------------------------------------*/

/*----------------------------------------------タグ設置-----------------------------------------*/

/*
function Name:Nextage専用GTM
function 用途:NextageのGoogle Tag Manager
*/

// 全部購物車要埋入的RT tag
function call_RT_tag() {
  // RT tag
  document.write(
    '<script src="https://resultplus.jp/fpc/cookie.js" id="resultplus"></script>\
    <script>\
    (function(){\
    var rp = new ResultplusItpCookie("resultplus");\
    })();\
    </script>'
  );
  //  End RT tag
}

// 全部購物車要埋入的GTM
function callGTM() {
  // Google Tag Manager
  document.write(
    '<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-PZC4KG2" \n\
			height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> \n\
			<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":\n\
			new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],\n\
			j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src= \n\
			"//www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);\n\
			})(window,document,"script","dataLayer","GTM-PZC4KG2");</script>'
  );
  //  End Google Tag Manager
}

// 指定購物車要埋入的GTM (#8812)
function callGTM2() {
  // Google Tag Manager
  document.write(
    '<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-5DPSCTG" \n\
			height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> \n\
			<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":\n\
			new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],\n\
			j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src= \n\
			"//www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);\n\
			})(window,document,"script","dataLayer","GTM-5DPSCTG");</script>'
  );
  //  End Google Tag Manager
}

// 指定購物車要埋入的GTA (#9041)
function callGTA() {
  // Global site tag (gtag.js) - Google Analytics
  document.write(
    "<script async src='https://www.googletagmanager.com/gtag/js?id=UA-120013759-1'></script> \n\
    <script> \n\
    window.dataLayer = window.dataLayer || []; \n\
    function gtag(){dataLayer.push(arguments);} \n\
    gtag('js', new Date()); \n\
    \n\
    gtag('config', 'UA-120013759-1', { 'optimize_id': 'GTM-5DB3G6L'}); \n\
    </script>"
  );
  //  End Global site tag (gtag.js) - Google Analytics
}

/*----------------------------------------------タグ設置-----------------------------------------*/

function linebreakIfSmallScreen() {
  if ($(window).width() < 640) {
    document.write("<br/>");
  }
}

function getJsonFromUrl() {
  var query = location.search.substr(1);
  var result = {};
  query.split("&").forEach(function (part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

// 電子發票條碼驗證區塊
(function () {
  // 判斷電子載具的建構式 function
  function JudgeElectronicInvoice() {
      // 作為私有屬性, 不可外部存取修改, 用來判斷電子載具是否正確的條件
      this._term = false;
      this._browser = '';
  }

  /** 
   * 增加該建構式的方法, 使用prototype存取
   * 單純的建構式新增方法或是用閉包也可以
   * 使用prototype的話可以比較不消耗資源並且也好管理各個實例化的方法
   */
  JudgeElectronicInvoice.prototype = {
      /** 
       * 因使用直接覆蓋prototype的方式新增共用方法
       * 所以原本的constructor來源會不見, 為了能夠辨識出建構來源因此設置該constructor屬性
       */
      constructor: JudgeElectronicInvoice,

      // 初始化綁定事件
      init: function () {
          /** 
           * 因整個建構式包在IIFE裡, 所以執行setTimeout非同步操作會導致目前建構式的scope遺失變成全域(window)
           * return IIFE時把目前的scope(this)作引數傳入匿名function內當參數(scope)
           * 內部執行setTimeout時因為要綁定剛剛傳入的scope, 所以使用匿名function作為callback
           */
          if (!(document.getElementById('carrierPhone') && document.getElementById('submitBtn'))) {
              return void(function (scope) {
                  setTimeout(function () {
                      this.init();
                  }.bind(scope), 500);
              })(this);
          }

          /** 
           * 用bind綁定目前實例化的scope以免在事件中callback呼叫時scope被HTML element取代掉
           * addEventListener第三個參數是設定事件要在哪個階段被觸發, 預設為false(冒泡階段), 在這邊設定true(捕獲階段)來提早攔截
           * 所以將click事件綁定在submitBtn元素上, 以便在送出訂單的事件之前先被"捕獲"並觸發
           */
          this.blurHandler   = this.blurHandler.bind(this);
          this.submitHandler = this.submitHandler.bind(this);
          document.getElementById('carrierPhone').addEventListener('blur', this.blurHandler);
          document.getElementById('submitBtn').addEventListener('click', this.submitHandler, true);

          // 判斷瀏覽器種類使用對應支援的方法
          this._browser = (function () {
              var test = function (regexp) {
                  return regexp.test(window.navigator.userAgent);
              }
              switch (true) {
                  case test(/edge/i):
                      return "edge";
                  case test(/opr/i) && (!!window.opr || !!window.opera):
                      return "opera";
                  case test(/chrome/i) && !!window.chrome:
                      return "chrome";
                  case test(/trident/i):
                      return "ie";
                  case test(/firefox/i):
                      return "firefox";
                  case test(/safari/i):
                      return "safari";
                  default:
                      return "other";
              }
          })();
      },

      // 電子載具輸入欄位blur時觸發的event hanlder
      blurHandler: function (e) {
          if (window.XMLHttpRequest) {
              // 保留目前實例化的scope
              const SELF = this;
              const HTTP_REQUEST = new XMLHttpRequest();
              const REQUEST_URL = 'https://einvoice-proxy.acs-tpkg.com/BIZAPIVAN/biz';
              var carrierPhone = encodeURIComponent(document.getElementById('carrierPhone').value);
              var params = 'version=1.0&\
              action=bcv&\
              barCode=' + carrierPhone + '&\
              TxID=' + new Date().getTime() + '&\
              appId=EINV1201904277061';
              // ES6模板字符串IE不支援
              // 為了方便閱讀將params字串分行串接, 但字串會有空白因此用replace過濾掉空白字元
              params = params.replace(/\s+/g, '');
              HTTP_REQUEST.open('POST', REQUEST_URL, false);
              HTTP_REQUEST.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
              HTTP_REQUEST.onreadystatechange = function () {
                  if (HTTP_REQUEST.readyState === 4 && HTTP_REQUEST.status === 200) {
                      var data = JSON.parse(HTTP_REQUEST.responseText);
                      // 判斷載具是否正確
                      if (data.isExist === 'Y') SELF._term = true
                      else {
                          document.getElementById('carrierPhone').classList.add('error_field');
                          document.getElementById('err_carrierType').innerHTML = '請務必輸入正確: 手機條碼';
                          console.log('驗證失敗(手機條碼輸入錯誤)!');
                          SELF._term = false;
                      }
                  } else {
                      console.error('請求失敗!');
                  }
              };
              try {
                HTTP_REQUEST.send(params);
              } catch(error) {
                console.error(error);
                document.getElementById('carrierPhone').removeEventListener('blur', this.blurHandler);
                document.getElementById('submitBtn').removeEventListener('click', this.submitHandler, true);
                console.error('電子發票認證功能已關閉!');
              }
          }
      },

      // 送出按鈕被點擊時執行的event handler
      submitHandler: function (e) {
          e.preventDefault();
          // 用event本身的屬性target來判斷實際上點了哪個元素, 確認目標來避免元素包元素時的大小差別被誤點擊
          if (e.target.id === 'langSubmitBtnText') {
              var radioChecked = document.getElementById("type_Phone").checked || false;
              // 如果勾選電子載具並且載具錯誤則擋下來跳錯, 反之通過並讓當前事件捕獲及冒泡的傳遞進行下去
              if ((!this._term) && radioChecked) {
                  // 使用事件本身的方法 stopPropagation 讓當前事件的捕獲及冒泡的傳遞停止下來
                  e.stopPropagation();
                  var scrollTarget = document.getElementById('tr_carrierType');

                  document.getElementById('carrierPhone').classList.add('error_field');
                  document.getElementById('err_carrierType').innerHTML = '請務必輸入正確: 手機條碼';

                  // 根據不同的瀏覽器使用相對應支援的方法
                  if (this._browser === 'ie' || this._browser === 'edge') {
                      scrollTarget.scrollIntoView({ behavior: 'smooth' });
                  } else {
                      window.scrollTo({
                          top: scrollTarget.offsetTop,
                          behavior: 'smooth'
                      });
                  }
              }
          } else {
              return;
          }
      }
  };

  // 實例化建構式, 並執行init方法初始化
  var electronicInvoice = new JudgeElectronicInvoice();
  electronicInvoice.init();
})();