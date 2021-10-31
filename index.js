const characters = {
    "a": "Ⓐⓐ⒜AaẠạÅåÄäẢảḀḁẤấẦầẨẩȂȃẪẫẬậẮắẰằẲẳẴẵẶặĀāĄąȀȁǺǻȦȧÁáǞǟǍǎÀàÃãǠǡÂâȺⱥÆæǢǣǼǽⱯꜲꜳꜸꜹꜺꜻⱭ℀⅍℁4Ʌ⅄",
    "b": "Ⓑⓑ⒝BbḂḃḄḅḆḇƁɃƀƂƃƄƅℬẞß",
    "c": "Ⓒⓒ⒞CcḈḉĆćĈĉĊċČčÇçƇƈȻȼℂ℃ƆꜾꜿℭ℅℆℄",
    "d": "Ⓓⓓ⒟DdḊḋḌḍḎḏḐḑḒḓĎďƊƋƌƉĐđȡǱǲǳǄǅǆȸⅅⅆ⅁ℌ",
    "e": "Ⓔⓔ⒠EeḔḕḖḗḘḙḚḛḜḝẸẹẺẻẾếẼẽỀềỂểỄễỆệĒēĔĕĖėĘęĚěÈèÉéÊêËëȄȅȨȩȆȇƎⱻɆɇƏǝℰⱸℯ℮ℇƐȼ3ℨ",
    "f": "Ⓕⓕ⒡FfḞḟƑƒꜰℲⅎꟻℱ℻ℌℑℐɍẛẜẝƭ",
    "g": "GgƓḠḡĜĝĞğĠġǤǥǦǧǴℊ⅁ǵĢģ",
    "h": "Ⓗⓗ⒣HhḢḣḤḥḦḧḨḩḪḫĤĥȞȟĦħⱧⱨꜦℍǶẖℏℎℋℌꜧ",
    "i": "Ⓘⓘ⒤IiḬḭḮḯĲĳÍíÌìÎîÏïĨĩĪīĬĭĮįǏǐıƚỺⅈⅉℹℑℐℒ",
    "j": "Ⓙⓙ⒥JjĴĵɈɉȷⱼǰℑℐℒ℘",
    "k": "Ⓚⓚ⒦KkḰḱḲḳḴḵĶķƘƙꝀꝁꝂꝃꝄꝅǨǩⱩⱪĸ",
    "l": "Ⓛⓛ⒧LlḶḷḸḹḺḻḼḽĹĺĻļĽľĿŀŁłỈỉⱠⱡȽꝉꝈⱢǇǈǉỊİịꞁ⅃⅂ȈȉȊȋℓℒ",
    "m": "Ⓜⓜ⒨MmḾḿṀṁṂṃꟿꟽⱮƜℳ",
    "n": "Ⓝⓝ⒩NnṄṅṆṇṈṉṊṋŃńŅņŇňǸǹÑñȠƞŊŋƝŉǊǋǌȵℕ№",
    "o": "Ⓞⓞ⒪OoÖöṎṏṌṍṐṑṒṓȪȫȬȭȮȯȰȱǪǫǬǭỌọỎỏỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợƠơŌōŎŏŐőÒòÓóÔôÕõǑǒȌȍȎȏŒœØøǾǿꝊꝎꝏ⍥⍤ℴℚ℺0",
    "p": "Ⓟⓟ⒫℗PpṔṕṖṗƤƥⱣℙǷꟼ℘",
    "q": "Ⓠⓠ⒬QqɊɋℚ℺ȹ",
    "r": "Ⓡⓡ⒭RrŔŕŖŗŘřṘṙṚṛṜṝṞṟȐȑȒȓɌɍƦꝚꝛⱤ℞ℜℛ℟ℝ",
    "s": "Ⓢⓢ⒮SsṠṡṢṣṤṥṦṧṨṩŚśŜŝŞşŠšȘșȿꜱƧƨϨϩẞßẛẜẝ℠ℌ",
    "t": "Ⓣⓣ⒯TtṪṫṬṭṮṯṰṱŢţŤťŦŧȚțȾⱦƬƮƫƭẗȶ℡™",
    "u": "ⓤ⒰UuṲṳṴṵṶṷṸṹṺṻỦủỤụỨứỪừỬửỮữỰựŨũŪūŬŭŮůŰűǙǚǗǘǛǜŲųǓǔȔȕÛûȖȗÙùÚúÜüƯưɄƲƱ",
    "v": "Ⓥⓥ⒱VvṼṽṾṿɅ℣Ỽⱱⱴⱽ",
    "w": "Ⓦⓦ⒲WwẀẁẂẃẄẅẆẇẈẉŴŵⱲⱳϢϣẘ",
    "x": "Ⓧⓧ⒳XxẊẋẌẍℵ×",
    "y": "Ⓨⓨ⒴yYẎẏỾỿỲỳỴỵỶỷỸỹŶŷƳƴŸÿÝýɎɏȲȳƔẙ⅄ℽ",
    "z": "Ⓩⓩ⒵ZzẐẑẒẓẔẕŹźŻżŽžȤȥⱫⱬƵƶɀℨℤ"
};

function NearMatch(pattern) {
    return pattern.split("").map((v, i, a) => characters[v.toLowerCase()] && a[i - 1] !== "\\" ? "[" + [ v, ...(characters[v.toLowerCase()])].join("") + "]" : v).join("");
}

module.exports = NearMatch;