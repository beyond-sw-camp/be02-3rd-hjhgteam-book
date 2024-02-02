<template> 
    <section style="width: 640px;" class="w_exposed_cell css-1tywu13" data-rowindex="8">
        <div class="css-1gkas1x-Grid e1689zdh0">
            <div class="css-1y901al-Row emmoxnt0">
                <header class="css-1ue9xs6"><h2 class="css-1wtjsst">별점
                    그래프</h2><span class="css-14yj34l-RatingStatHeaderTopRight e1dk30cn0"><h4 style="margin: 0">평균 ★4.2</h4><strong>(22명)</strong></span>
                </header>
            </div>
        </div>
        <div class="css-1gkas1x-Grid e1689zdh0">
            <div class="css-1y901al-Row emmoxnt0">
                <div class="css-wqfuxa">
                    <div class="css-g1q7ln">
                        <div class="css-hugi8h"><span prefix="1" class="css-111q860-Bar"></span>
                        </div>
                        <div class="css-hugi8h"><span prefix="2" class="css-5vyahd-Bar"></span>
                        </div>
                        <div class="css-hugi8h"><span prefix="3" class="css-himw0d-Bar"></span>
                        </div>
                        <div class="css-hugi8h"><span prefix="4" class="css-3zcnds-Bar"></span>
                        </div>
                        <div class="css-hugi8h"><span prefix="5" class="css-mr14ik-Bar"></span>
                        </div>
                    </div>
                </div>
                <hr class="css-hn83j">
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "RateGraphComponent",
    props: [" "]
}

</script>
 



<style scoped>
html {
   line-height: normal;
   font-family: 'Noto Sans KR', sans-serif;
}
.css-1tywu13 {
   padding: 8px 0 0;
}
.css-1y901al-Row {
   margin: 0 20px;
}
.css-1ue9xs6 {
   overflow: hidden;
}
.css-1wtjsst {
   float: left;
   color: #000;
   font-size: 19px;
   font-weight: 700; 
   letter-spacing: -0.7px;
   line-height: 28px;
   margin: 8px 0;
   display: block; 
   margin-block-start: 0.83em;
   margin-block-end: 0.83em;
   margin-inline-start: 0px;
   margin-inline-end: 0px;
}

.css-14yj34l-RatingStatHeaderTopRight {
   float: right;
   color: #282828;
   font-size: 17px;
   font-weight: 400; 
   letter-spacing: -0.7px;
   line-height: 22px;
   text-align: right;
   margin: 10px 0 0;
}
h4 {
   
   margin: 0; /*  */
   display: block;
   margin-block-start: 1.33em;
   margin-block-end: 1.33em;
   margin-inline-start: 0px;
   margin-inline-end: 0px;
   font-weight: bold;
}
.css-14yj34l-RatingStatHeaderTopRight > strong {
   font-size: 14px;
   font-weight: 400; 
   letter-spacing: -0.3px;
   line-height: 19px;
   color: #787878;
}

.css-wqfuxa {
   max-width: 375px;
   margin: 58px auto 0;
}
.css-g1q7ln { 
   display: flex; 
   align-items: flex-end;
   text-align: center;
   margin: 0 -1px;
}
.css-hugi8h {  
   flex: 1 1 0%;
   box-sizing: border-box;
   padding: 0 1px;
}
.css-111q860-Bar {
   display: block;
   position: relative;
   background: #ffdd63;
   color: #a0a0a0;
   vertical-align: bottom;
   font-size: 12px;
   font-weight: 400; 
   letter-spacing: -0.2px;
   line-height: 16px;
   text-align: left;
   height: 1px;
   margin: 0 0 22px;
}
.css-111q860-Bar::after {
   content: "1";
   display: block;
   position: absolute;
   right: 0;
   bottom: -22px;
   left: 0;
   text-align: center;
}
.css-hn83j {
   border: 0;
   border-bottom: 1px solid #f0f0f0;
   margin: 24px 0 0;
}
.css-5vyahd-Bar {
   display: block;
   position: relative;
   background: rgb(255, 221, 99);
   color: rgb(160, 160, 160);
   vertical-align: bottom;
   font-size: 12px;
   font-weight: 400;
   letter-spacing: -0.2px;
   line-height: 16px;
   text-align: left;
   height: 6.248px;
   margin: 0px 0px 22px;
}
.css-5vyahd-Bar::after {
   content: "2";
   display: block;
   position: absolute;
   right: 0px;
   bottom: -22px;
   left: 0px;
   text-align: center;
}
.css-himw0d-Bar {
   display: block;
   position: relative;
   background: rgb(255, 221, 99);
   color: rgb(160, 160, 160);
   vertical-align: bottom;
   font-size: 12px;
   font-weight: 400;
   letter-spacing: -0.2px;
   line-height: 16px;
   text-align: left;
   height: 6.248px;
   margin: 0px 0px 22px;
}
.css-himw0d-Bar::after {
   content: "3";
   display: block;
   position: absolute;
   right: 0px;
   bottom: -22px;
   left: 0px;
   text-align: center;
}

.css-3zcnds-Bar {
   display: block;
   position: relative;
   background: rgb(255, 221, 99);
   color: rgb(160, 160, 160);
   vertical-align: bottom;
   font-size: 12px;
   font-weight: 400;
   letter-spacing: -0.2px;
   line-height: 16px;
   text-align: left;
   height: 12.584px;
   margin: 0px 0px 22px;
}
.css-3zcnds-Bar::after {
   content: "4";
   display: block;
   position: absolute;
   right: 0px;
   bottom: -22px;
   left: 0px;
   text-align: center;
}
.css-mr14ik-Bar {
   display: block;
   position: relative;
   background: rgb(255, 221, 99);
   color: #a0a0a0;
   vertical-align: bottom;
   font-size: 12px;
   font-weight: 400; 
   letter-spacing: -0.2px;
   line-height: 16px;
   text-align: left;
   height: 88px;
   margin: 0 0 22px;
}
.css-mr14ik-Bar::after {
   content: "5";
   display: block;
   position: absolute;
   right: 0;
   bottom: -22px;
   left: 0;
   text-align: center;
}



   </style>