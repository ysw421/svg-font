const KOREAN_FIRST_LETTER = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
const KOREAN_MIDDLE_LETTER = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ']
const KOREAN_LAST_LETTER = [' ', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
const KOREAN_TYPE_1 = ['ㅏ','ㅐ','ㅑ','ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅣ'];
const KOREAN_TYPE_2 = ['ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ'];
const KOREAN_TYPE_3 = ['ㅘ', 'ㅙ', 'ㅚ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅢ'];

class svgFont {
    //id: svg의 id
    //text: 출력할 텍스트
    //fontName: 폰트 이름
    //size: 폰트 크기
    //spacing: 폰트 사이 간격
    //lineHeight: 폰트 줄 간격
    //spaceAbove: 폰트 위에 있는 공백
    //strokeWidth: 폰트 외곽선 크기
    //strokeLinecap: 폰트 외곽선 모양
    //leftSpace: 폰트 왼쪽 공백
    //animation: 폰트 애니메이션 이름
    constructor(Id, text, {size=0.5, spacing=40, lineHeight=50, spaceAbove=20, strokeWidth=2, leftSpace=20, strokeLinecap="round", fontName="basic", animation="svg-font-class"}){//, fontName, fontSize, fontColor, fontWeight, fontStyle, fontFamily) {
        this.div = document.getElementById(Id);
        this.text = text;


        var x = 0;
        var totalWidth = [];
        for (var i = 0; i < this.text.length; i++) {
            if (this.text[i] == '\n') {
                totalWidth.push((x+strokeWidth)*size);
                x = 0;
            } else {
                x += svgFontData[fontName][this.text[i]]["width"]+spacing;
            }
        }
        totalWidth.push((x+strokeWidth)*size);
        totalWidth = Math.max(...totalWidth)+(leftSpace+100)*size;
        var numOfLine = text.split('\n').length;
        var totalHeight = (numOfLine-1)*(spaceAbove+195+strokeWidth)*size;
        totalHeight += (195+strokeWidth+lineHeight)*size;
        this.div.style.width = totalWidth+"px";
        this.div.style.height = totalHeight+"px";
        this.div.setAttribute("viewBox", "0 0 "+totalWidth+" "+totalHeight);

        var inner;
        var x = 0;
        var y = 0;
        var delayTime = 0.2;
        for (var i = 0; i < this.text.length; i++) {
            var uni = this.text[i].charCodeAt(0);
            if (uni>=12593 && uni<=12643) {}
            else if (uni>=44032 && uni<=55203) {
                var firstLetter = KOREAN_FIRST_LETTER[Math.floor((uni-44032)/588)];
                var middleLetter = KOREAN_MIDDLE_LETTER[Math.floor(((uni-44032)%588)/28)];
                var lastLetter = KOREAN_LAST_LETTER[Math.floor((uni-44032)%28)];
                
                if (lastLetter == ' ') {

                }
                else {

                }
            }
            else if (svgFontData[fontName]["listOfFonts"].includes(this.text[i])) {
                if (this.text[i] == ' ') {
                    x += svgFontData[fontName][this.text[i]]["width"]+spacing;
                    delayTime += 0.2;
                } else {
                    inner = "";
                    var realSize = (100-strokeWidth/2)*size/100;
                    var data = svgFontData[fontName][this.text[i]];
                    for (var j = 0; j < data["d"].length; j++) {
                        var length = data["lenght"][j];
                        inner +='<path class="svg-font-path" d="'+data["d"][j]+'" stroke="black" stroke-width="'+strokeWidth+'" fill="none" stroke-linecap="'+
                        strokeLinecap+'" style="stroke-dashoffset: '+length+'px; stroke-dasharray: '+length+'px; animation: '+animation+' '+data["delay_time"][j]*0.5+'s '+delayTime*0.5+'s ease forwards;"/>';// infinite;"/>';
                        delayTime += data["delay_time"][j]*1;
                    }
                    delayTime -= 0.8;
                    
                    this.div.innerHTML += '<g transform="matrix('+
                                    realSize+',0,0,'+realSize+','+
                                    (strokeWidth/2*realSize+(leftSpace+x)*size)+','+(strokeWidth/2*realSize+(spaceAbove+y*(195+lineHeight))*size)+')">'
                                    +inner+'</g>';
                    x += data["width"]+spacing;
                }
            }
            else if (this.text[i] == '\n') {
                x = 0;
                y += 1;
                delayTime -= 0.5;
            }
        }
    }
}