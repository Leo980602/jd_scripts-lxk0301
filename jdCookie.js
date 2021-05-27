/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  webp=1; visitkey=30082888823058762; shshshfpa=dbf11dc5-9014-91b1-20ac-9b1beb79eea6-1579004251; shshshfpb=lSzxESWdeYLclczBkkXqwsA==; __jda=122270672.1622098294464128300338.1622098294.1622098294.1622098294.1; __jdb=122270672.1.1622098294464128300338|1.1622098294; __jdv=122270672|direct|-|none|-|1622098294465; __jdc=122270672; mba_sid=16220982944665526127294029057.1; mba_muid=1622098294464128300338; shshshfp=fc1b89180cae246abed81737a5628b06; shshshsID=25e525a08c80dfa644453834251caa7a_1_1622098299632; 3AB9D23F7A4B3C9B=IRC4TFVP2A6LIP2KNUVVTLZZH2HPIXIAOVJWOVEDBEMIJZZY3AIX3NTHNDWNE6ABYQY7ECPNDU5LU6T7EF3F46STX4; jcap_dvzw_fp=AFA4d4hsPJKgWx76EkC0o7G0M484yYrai_PmB93CpShVNAt0SrjUyDVeE1yJb5CG2Z9ZBA==; TrackerID=oLBgkFzPpogcyUAgHgj7EbK3NnTS9RBux9a5H7NJZ37fqBYC7lCNSuDQR6FLZDI2WOCg-iXWE0R4Dk0bVISAjOMXfWMD8ydqUPPEf1n6JXcO-0mdLiudi9H_9Y5C7RVGii0iN5oNIq3TiyLYM2PU_A; pt_key=AAJgr0GWADAgtVvlPvkxrAZ4heX-RuTAVNvYFYUyx8LxHR9HcBjdHquypwFdOcTcDGqRA0j4Sdg; pt_pin=366785103-535991; pt_token=n7mvzxby; pwdt_id=366785103-535991; sfstoken=tk01mdb281d3ca8sM3gxeDIrM3gzgtyH5PLil+cw4yFetvb38ySxnoz+1BwlIvwvC+D3WO6eAXZpK6suzcFUcfxFNk3c; whwswswws=; __jd_ref_cls=MLoginRegister_SMSLoginSuccess
  '',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  '',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
