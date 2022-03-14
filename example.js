const font = new svgFont('svgFont',"DongYun BaBu ^^7",// QUICK BROWN FOX\nJUMPS OVER THE LAZY DOG',//BBAAB\nBBAAB\nAABBBA',
            {size:1, spacing:20, lineHeight:50, strokeWidth:20, animation:"example1"});//, spacing:20, lineHeight:0, spaceAbove:10,
            //strokeWidth:30, leftSpace:50});//, strokeLinecap="butt");

// const font2 = new svgFont('svgFont2','ABBAAB\nBBAAB\nAABBBA',
//             size=0.2, spacing=20, lineHeight=0, spaceAbove=10,
//             strokeWidth=30, leftSpace=50, strokeLinecap="butt");


//@#$%^&*()_+-=[]{}\\|;:\'",<.>/?
const font2 = new svgFont('svgFont2','\
ABCDEFGHIJKLMNOPQRSTUVWXYZ\n\
abcdefghijklmnopqrstuvwxyz\n\
0123456789\n\
!@#$%^&*()_+-=[]{}|\\:;'+"'"+'",.<>/?~\
', {spacing:10, size:0.2, strokeWidth:20, lineHeight:50, animation:"example1"});


// var string = "휇";

// var KOREAN_FIRST_LETTER = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
// var KOREAN_MIDDLE_LETTER = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ']
// var KOREAN_LAST_LETTER = [' ', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']

// var uni = string.charCodeAt(0);

// if (uni>=12593 && uni<=12643) {
//     console.log(string);
// } else if (uni>=44032 && uni<=55203) {
//     console.log(KOREAN_FIRST_LETTER[Math.floor((uni-44032)/588)]);
//     console.log(KOREAN_MIDDLE_LETTER[Math.floor(((uni-44032)%588)/28)]);
//     console.log(KOREAN_LAST_LETTER[Math.floor((uni-44032)%28)]);
// }

// const font3 = new svgFont('svgFont2','A',
//             size=1, spacing=20, lineHeight=0, spaceAbove=20,
//             strokeWidth=50, strokeLinecap="butt");
