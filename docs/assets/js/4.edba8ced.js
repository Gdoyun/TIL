(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{248:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"자바스크립트-제이쿼리-jpub-7장-jquery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#자바스크립트-제이쿼리-jpub-7장-jquery","aria-hidden":"true"}},[t._v("#")]),t._v(" 자바스크립트 & 제이쿼리 (jpub) - 7장 jQuery")]),s("h2",{attrs:{id:"요소-탐색하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#요소-탐색하기","aria-hidden":"true"}},[t._v("#")]),t._v(" 요소 탐색하기")]),s("ul",[s("li",[t._v("계층 탐색\n"),s("ul",[s("li",[t._v("ancestor descendant")]),s("li",[t._v("p>c: 다른 요소의 하위 요소들")]),s("li",[t._v("p+n: 직접적인 자식 요소들(모든 자식요소 하고싶다면 p>*)")]),s("li",[t._v("p~s: 이전 요소의 모든 이웃 요소")])])]),s("li",[t._v("기본 필터\n"),s("ul",[s("li",[t._v(":not(selector): 셀렉터에 부합하는 요소를 제외한 나머지 요소들(div:not('#summary'))")]),s("li",[t._v(":first: 선택된 요소 중 첫 번째 요소")]),s("li",[t._v(":last, even, odd")]),s("li",[t._v(":eq(index): 선택된 요소 중 매개변수로 지정된 인덱스 번호를 가진 요소")]),s("li",[t._v(":gt(index), :lt(index)")]),s("li",[t._v(":header, :animated, :focus")])])]),s("li",[t._v("콘텐츠 필터\n"),s("ul",[s("li",[t._v(":contains('text'): 매개변수로 지정된 텍스트를 가지고 있는 요소들")]),s("li",[t._v(":empty: 자식 요소가 없는 모든 요소들")]),s("li",[t._v(":parent: 위의 반대")]),s("li",[t._v(":has(selector): 선택된 요소 중 매개변수에 지정된 셀렉터에 부합하는 요소를 최소한 하나 이상 가지고 있는 모든 요소 (ex. div:has(p) p요소를 가진 모든 div요소)")])])]),s("li",[t._v("가시성 필터\n"),s("ul",[s("li",[t._v(":hidden: 화면에서 숨겨진 모든 요소들")]),s("li",[t._v(":visible: 페이지의 레이아웃에서 공간을 차지하고 있는 모든 요소들.")])])]),s("li",[t._v("자식 요소 필터\n"),s("ul",[s("li",[t._v(":nth-child(expr): 1부터 시작하는 해당 순번의 요소(ul li:nth-child(2)는 두번째 요소를 의미)")]),s("li",[t._v(":first-child, :last-child, :only-child")])])]),s("li",[t._v("특성 필터\n"),s("ul",[s("li",[t._v("[attribute]: 지정된 특성 갖고있는 요소들")]),s("li",[t._v("[attribute='value']")]),s("li",[t._v("[attribute!='value']")]),s("li",[t._v("[attribute^='value']: 특성값이 지정된 값으로 시작하는 요소들")]),s("li",[t._v("[attribute$='value']: 특성값이 지정된 값으로 끝나는 요소들")]),s("li",[t._v("[attribute*='value']: 특성값이 지정된 값으로 포함되는 요소들")]),s("li",[s("code",[t._v("[attribute][attribute2]")]),t._v(": 지정된 특성 중 하나를 가진 모든 요소들")])])]),s("li",[t._v("폼\n"),s("ul",[s("li",[t._v(":input, :text, :password, :radio...")]),s("li",[t._v(":image, :button")]),s("li",[t._v(":selected: 드롭다운 리스트에서 선택된 모든 요소들")]),s("li",[t._v(":enabled, :disabled, :checked(체크된 요소들을 리턴)")])])])]),s("h2",{attrs:{id:"선택된-요소에-필요한-작업-수행"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#선택된-요소에-필요한-작업-수행","aria-hidden":"true"}},[t._v("#")]),t._v(" 선택된 요소에 필요한 작업 수행")]),s("ul",[s("li",[t._v("콘텐츠 필터\n"),s("ul",[s("li",[t._v("가져오기/수정하기\n"),s("ul",[s("li",[t._v(".html(): 첫 번째 요소들과 그 하위 노드들의 HTML코드를 얻음.")]),s("li",[t._v(".text(): 객체집합 내 모든 요소의 텍스트와 그 하위 요소들의 텍스트 리턴.(input요소나 textarea요소에서 내용 가져오려면 .val()메서드 사용.)")]),s("li",[t._v(".replaceWith(): 일치하는 모든 요소에 새로운 동일한 콘텐츠 추가하고 교체된 요소들을 모두 리턴")]),s("li",[t._v(".remove(): 일치하는 모든 요소들을 제거")])])]),s("li",[t._v("요소\n"),s("ul",[s("li",[t._v(".before(): 선택한 요소 전에")]),s("li",[t._v(".after(): 선택한 요소 다음에")]),s("li",[t._v("prepend(): 선택한 요소의 여는 태그 다음에\n"),s("ul",[s("li",[t._v("a.prepend(b)는 a에 b를 추가한다 / a.prependTo(b)는 b에 a를 추가한다.")])])]),s("li",[t._v("append(): 선택한 요소의 닫는 태그 다음에")]),s("li",[t._v("remove")]),s("li",[t._v("clone")]),s("li",[t._v("unwrap")]),s("li",[t._v("detach")]),s("li",[t._v("empty")]),s("li",[t._v("add: 매개변수로 지정된 셀렉터에 의해 선택된 요소들을 기존 객체집합에 추가")])])]),s("li",[t._v("특성\n"),s("ul",[s("li",[t._v("attr\n"),s("ul",[s("li",[t._v("가져오기: $('li#one').attr('id');")]),s("li",[t._v("수정하기: $('li#one').attr('id', 'hot');")])])]),s("li",[t._v("removeAttr")]),s("li",[t._v("addClass")]),s("li",[t._v("removeClass")]),s("li",[t._v("css\n"),s("ul",[s("li",[t._v("가져오기: bg = $('li').class('background-color');")]),s("li",[t._v("증감하기: $('li').class('padding', '+=20');")]),s("li",[t._v("여러 속성: $('li').css({'color': '#272727', 'font-family': 'Courier'});")])])])])]),s("li",[t._v("폼 값\n"),s("ul",[s("li",[t._v("val: input, select, textarea요소에 주로 사용.")]),s("li",[t._v("isNumeric")])])])])]),s("li",[t._v("요소 탐색\n"),s("ul",[s("li",[t._v("일반\n"),s("ul",[s("li",[t._v("find: 현재 객체집합에서 셀렉터와 일치하는 요소들 리턴")]),s("li",[t._v("closest: 셀렉터와 일치하는 가장 근접한 상위요소(직계부모~최상위요소 모두)를 리턴")]),s("li",[t._v("parent: 현재 객체집합의 직계부모요소 리턴")]),s("li",[t._v("parents: 모든 부모요소")]),s("li",[t._v("children: 모든 자식 요소")]),s("li",[t._v("siblings: 모든 이웃 요소")]),s("li",[t._v("next: 다음 이웃 요소")]),s("li",[t._v("nextAll")]),s("li",[t._v("prev")]),s("li",[t._v("prevAll")])])]),s("li",[t._v("필터/테스트\n"),s("ul",[s("li",[t._v("filter: 두 번째 셀렉터를 이용하여 jQuery객체집합을 필터링")]),s("li",[t._v("not")]),s("li",[t._v("has")]),s("li",[t._v("is: 폼요소가 선택 혹은 체크되어있는지 확인")]),s("li",[t._v(":contains()")])])]),s("li",[t._v("객체집합 내 순서 평가\n"),s("ul",[s("li",[t._v("eq: 인덱스 번호에 해당하는 요소를 리턴")]),s("li",[t._v(":lt")]),s("li",[t._v(":gt")])])])])]),s("li",[t._v("크기/위치\n"),s("ul",[s("li",[t._v("크기\n"),s("ul",[s("li",[t._v("height: 영역의 크기")]),s("li",[t._v("with innerHeight(영역의 높이에 안쪽 여백 더한 값) / innerWidth / outerHeight/ outerWidth")]),s("li",[t._v("$(document).height()")]),s("li",[t._v("$(document).width()")]),s("li",[t._v("$(document).height()")]),s("li",[t._v("$(window).height()")]),s("li",[t._v("$(window).width()")])])]),s("li",[t._v("위치\n"),s("ul",[s("li",[t._v("offset: document객체의 좌측 상단 모서리에서부터 요소까지의 좌표를 가져오거나 지정(offset().top 이런식으로 쓴다)")]),s("li",[t._v("position: 상위 요소 중 기본 흐름 값을 가진 요소로부터 해당 요소까지의 좌표를 가져오거나 지정")]),s("li",[t._v("scrollLeft")]),s("li",[t._v("scrollTop")])])])])]),s("li",[t._v("효과/애니메이션\n"),s("ul",[s("li",[t._v("기본\n"),s("ul",[s("li",[t._v("show: 선택된 아이템을 보이게")]),s("li",[t._v("hide: 숨긴다")]),s("li",[t._v("toggle")])])]),s("li",[t._v("흐림 효과\n"),s("ul",[s("li",[t._v("fadeIn")]),s("li",[t._v("fadeOut")]),s("li",[t._v("fadeTo: 선택된 요소의 불투명도 조절")]),s("li",[t._v("fadeToggle")])])]),s("li",[t._v("슬라이딩 효과\n"),s("ul",[s("li",[t._v("slideDown")]),s("li",[t._v("slideUp")]),s("li",[t._v("slideToggle")])])]),s("li",[t._v("기타\n"),s("ul",[s("li",[t._v("delay: 큐 내의 다음 아이템의 실행을 잠시 지연")]),s("li",[t._v("stop: 현재 실행중인 애니메이션 중단")]),s("li",[t._v("animate: 새로운 임의의 애니메이션 생성")])])])])]),s("li",[t._v("이벤트\n"),s("ul",[s("li",[t._v("문서/파일\n"),s("ul",[s("li",[t._v("ready")]),s("li",[t._v("laod")])])]),s("li",[t._v("사용자 상호작용\n"),s("ul",[s("li",[t._v("on")]),s("li",[t._v("(.click(), .hover(), submit()같은 메서드들도 보게 될것인데, 이벤트 처리를 위한 on()메서드가 나타나며 사라짐)")])])])])])]),s("h3",{attrs:{id:"효과-예제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#효과-예제","aria-hidden":"true"}},[t._v("#")]),t._v(" 효과 예제")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("$")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'h2'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("hide")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("slideDown")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" $li "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("$")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'li'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n$li"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("hide")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("each")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   "),s("span",{attrs:{class:"token comment"}},[t._v("//일단 숨기고, 아이템들이 하나씩 나타나기.")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("$")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("delay")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("700")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("index"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("fadeIn")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("700")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n$li"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("on")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'click'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("$")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("fadeOut")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("700")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"css속성에-애니메이션-적용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css속성에-애니메이션-적용","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS속성에 애니메이션 적용")]),s("ul",[s("li",[t._v("height, width, font-size처럼 값이 숫자로 표현될 수 있는 속성이라면 어떠한 CSS속성이라도 애니메이션에 사용가능.")])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("$")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("animate")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    opacity"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0.0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    paddingLeft"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'+=80'")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("500")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("$")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("remove")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//애니메이션이 완료되면 콜백함수가 아이템을 제거")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"tips"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tips","aria-hidden":"true"}},[t._v("#")]),t._v(" tips")]),s("h3",{attrs:{id:"정보"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#정보","aria-hidden":"true"}},[t._v("#")]),t._v(" 정보")]),s("ul",[s("li",[t._v("획득\n"),s("ul",[s("li",[t._v("jquery객체집합에 둘 이상 요소 저장되어 있으면 ($('li').html()😉 첫번째 요소의 정보만 얻어옴.")]),s("li",[t._v("다른 요소 참조하려면 탐색메서드나 필터 메서드, 혹은 셀렉터 이용.")]),s("li",[t._v("모든 요소 콘텐츠 가져오려면 .each()메서드 사용.")])])]),s("li",[t._v("수정\n"),s("ul",[s("li",[t._v("둘이상 요소 저장되어있고 수정하면 모든 요소 수정됨.")])])])]),s("h3",{attrs:{id:"변수에-캐싱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#변수에-캐싱","aria-hidden":"true"}},[t._v("#")]),t._v(" 변수에 캐싱")]),s("ul",[s("li",[t._v("코드가 동일한 객체집합을 한번 이상 사용할 필요가 있다면 객체에 담아두는게 효과적.")]),s("li",[t._v("$listItems = $('li'); 와 같이 변수에 jQuery객체를 저장할 때 이렇게 하면 다른 변수들과 구분하는데 도움된다.")])]),s("h3",{attrs:{id:"체이닝"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#체이닝","aria-hidden":"true"}},[t._v("#")]),t._v(" 체이닝")]),s("ul",[s("li",[t._v("jQuery객체집합을 "),s("code",[t._v("수정")]),t._v("하기 위한 대부분의 메서드는 체이닝 가능")]),s("li",[t._v("그러나 DOM/브라우저에서 정보를 "),s("code",[t._v("조회")]),t._v("하는 메서드들은 체이닝으로 연결 불가.")])]),s("h3",{attrs:{id:"페이지가-준비되었는지-확인"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#페이지가-준비되었는지-확인","aria-hidden":"true"}},[t._v("#")]),t._v(" 페이지가 준비되었는지 확인")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 이 메서드 내부에 작성하면 코드가 페이지의 다른곳이나 다른 파일에 작성된 경우에도 의도대로 동작한다.")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("$")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("ready")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("//bla bla")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 위 함수의 약식 표현")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("$")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("//bla bla")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v(".load()\n"),s("ul",[s("li",[t._v("load이벤트가 발생할 때 호출.")]),s("li",[t._v(".on()메서드로 대체되었다.")]),s("li",[t._v("페이지와 나머지 모든 리소스(이미지, CSS, 스크립트)가 로드된 이후에 발생")]),s("li",[t._v("스크립트가 반드시 로드되어야 하는 리소스에 의존적일 때 사용.\n"),s("ul",[s("li",[t._v("ex. 스크립트가 이미지의 크기를 알아야 할 때")])])])])]),s("li",[t._v(".ready()\n"),s("ul",[s("li",[t._v("페이지가 빨리 로드된 것처럼 보이도록 브라우저에 DOM이 로드되자마자 실행.")]),s("li",[t._v("그러나 최신 브라우저들에서만 지원.(구버전: laod이벤트 되면 시작)")])])])]),s("h3",{attrs:{id:"컨텐츠를-수정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#컨텐츠를-수정","aria-hidden":"true"}},[t._v("#")]),t._v(" 컨텐츠를 수정")]),s("p",[t._v("현재 선택한 요소들의 콘텐츠를 사용하려는 동시에 수정하려면 함수에 매개변수를 전달하면 된다.")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("$")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'li.hot'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("html")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'<em>'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("$")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("text")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'</em>'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"each"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#each","aria-hidden":"true"}},[t._v("#")]),t._v(" .each()")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("$")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("$")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'li'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("each")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ids "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("//$(this).attr('id')보다 이게 좋다.")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("$")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("append")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'<span class=\"order\">'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" ids "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'</span>'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"this"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this","aria-hidden":"true"}},[t._v("#")]),t._v(" this")]),s("p",[s("code",[t._v("$(this)")]),t._v("처럼 this키워드를 이용해 새로운 jQeury 객체집합을 만드는 경우도 볼 수 있는데,\n이렇게 하면 현재 요소에 대해서도 jQuery메서드들을 사용할 수 있다.")]),s("h3",{attrs:{id:"on"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on","aria-hidden":"true"}},[t._v("#")]),t._v(" .on()")]),s("ul",[s("li",[t._v("매개변수를 2개 받는다. 첫번째는 대응할 이벤트, 두번째는 함수(기명/익명)")]),s("li",[t._v("(*친것들은 onready처럼 작업을 더 쉽게 만들어주는 추가 메서드 제공.)")]),s("li",[t._v("focus, blur, change")]),s("li",[t._v("input, keydown keyup, keypress")]),s("li",[t._v("click, dblclick, mouseup, mousedown, mouseover, mousemove, mouseout, *hover")]),s("li",[t._v("submit, select, change")]),s("li",[t._v("*ready, load, *unload")]),s("li",[t._v("error, resize, scroll")])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("//모바일은 마우스오버가 없으니 클릭도 같이 지정.")]),t._v("\n$listItems"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("on")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'mouseover click'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("functionn")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("//~~")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"event객체"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event객체","aria-hidden":"true"}},[t._v("#")]),t._v(" event객체")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("$")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'li'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("on")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'click'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    eventType "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"속성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#속성","aria-hidden":"true"}},[t._v("#")]),t._v(" 속성")]),s("ul",[s("li",[t._v("type: 이벤트 종류")]),s("li",[t._v("which: 눌려진 버튼이나 키")]),s("li",[t._v("data")]),s("li",[t._v("target: 이벤트가 발생한 DOM요소")]),s("li",[t._v("pageX, pageY")]),s("li",[t._v("timeStamp")]),s("li",[t._v(".preventDefault(): 기본 동작을 취소(ex. 폼 데이터 전송)")]),s("li",[t._v(".stopPropagation(): 상위 객체로 이벤트가 버블링되는 것을 중단.")])]),s("h3",{attrs:{id:"animate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#animate","aria-hidden":"true"}},[t._v("#")]),t._v(" .animate()")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("animate")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("//변경할 스타일들 나열")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" speed"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" easing"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" complete"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// speed: 진행될 시간의 길이 밀리초단위. low/fast도 가능")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// easing: linear(일정속도) / swing(중간은 빨리 처음끝은 느리게)")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// complete: 애니메이션이 종료시 호출될 함수(콜백함수)를 지정 위함")]),t._v("\n\n"),s("span",{attrs:{class:"token function"}},[t._v("$")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("animate")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    opacity"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0.0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    paddingLeft"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'+=80'")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("500")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("$")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("remove")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"오타"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#오타","aria-hidden":"true"}},[t._v("#")]),t._v(" 오타")]),s("p",[t._v("303p attribute$='value'\n322p $('li').clss('~')\n322p 'background-color': '#272727',")])])}],!1,null,null,null);a.default=e.exports}}]);