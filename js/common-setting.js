// **************************************************
// 配送相關設定
// - SETTING_SHIPPING_CARRIER (運輸公司)
//  => Y : ヤマト便（黑貓宅急便, 禮拜日沒有配送）
//  => P : ペリカン便（宅配通）
//  => S : SF（順豐）
//  => C : CTW
//  => O : Others（其他）
// - SETTING_NO_SHIPPING_DATES (預設不配送日期)
// - SETTING_CONV_NO_SHIPPING_DATES (超商取貨, 預設不配送日期)
// - SETTING_SF_NO_SHIPPING_DATES (順豐運輸, 預設不配送日期)
// ※ 日期不必 + 0, 否則無法對應, Ex: 2018/01/01
// - SETTING_NO_SHIPPING_PRODUCTS (超過5公斤不能配送)
// ※ 請填寫產品編號, Ex: p001
// - SETTING_NONE_USE_DAY (不要配送的星期)
//  => Ex: [6, 0, 1]
//  => 星期六, 星期日, 星期一
// - SETTING_PAYMENT_LINE_PAY_Limit LinePay定期金額限制
// **************************************************
const SETTING_SHIPPING_CARRIER = 'P';
const SETTING_NO_SHIPPING_DATES = [];
const SETTING_CONV_NO_SHIPPING_DATES = ['2021/1/3', '2021/1/4', '2021/1/5', '2021/2/12', '2021/2/13', '2021/2/14', '2021/2/15', '2021/2/16', '2021/2/17', '2021/2/18', '2021/3/1', '2021/3/2', '2021/3/3', '2021/4/4', '2021/4/5', '2021/4/6', '2021/4/7', '2021/6/14', '2021/6/15', '2021/6/16', '2021/9/20', '2021/9/21', '2021/9/22', '2021/9/23', '2021/10/11', '2021/10/12', '2021/10/13'];
const SETTING_SF_NO_SHIPPING_DATES = ['2018/4/4', '2018/4/5', '2018/4/6', '2018/4/7', '2018/4/8'];
const SETTING_NO_SHIPPING_PRODUCTS = [];
const SETTING_NONE_USE_DAY = [0];
const SETTING_PAYMENT_LINE_PAY_Limit = 99999;

// **************************************************
// 設定不需要的縣市(ZIP)名單, 請填入代碼值即可
// 例如不要離島:
// const SETTING_ZIP_NO_NEED_LIST = [3, 5, 18, 19, 20];
// **************************************************
const SETTING_ZIP_NO_NEED_LIST = [];