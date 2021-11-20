(this["webpackJsonpsudoku-game"]=this["webpackJsonpsudoku-game"]||[]).push([[0],[,,,,,,function(e,n,l){e.exports={IntroPage:"IntroPage_IntroPage__1XiCt",Hidden:"IntroPage_Hidden__2aKkK",Heading:"IntroPage_Heading__xxID0",HeadingTitle:"IntroPage_HeadingTitle__eqg0n",glowOnHover:"IntroPage_glowOnHover__755ML",HeadingInfo:"IntroPage_HeadingInfo__30r_x",Options:"IntroPage_Options__3i2na",OptionSide:"IntroPage_OptionSide__zUvN8",OptionDetails:"IntroPage_OptionDetails__3kRYM"}},function(e,n,l){e.exports={Feedback:"Feedback_Feedback__OO24w",Success:"Feedback_Success__39QXJ",Danger:"Feedback_Danger__Fd_OO",Visible:"Feedback_Visible__3EXhu"}},function(e,n,l){e.exports={Header:"Header_Header__1xrSh",Row:"Header_Row__1P6ty",ModeDetails:"Header_ModeDetails__3d3To",GlowOnHover:"Header_GlowOnHover__1XX1Q",glowOnHover:"Header_glowOnHover__28GA3"}},,function(e,n,l){e.exports={GameRules:"GameRules_GameRules__dPtGx",Visible:"GameRules_Visible__1dgDD",List:"GameRules_List__3y4BJ"}},,,function(e,n,l){e.exports={Sudoku:"Sudoku_Sudoku__3ZujJ",Solved:"Sudoku_Solved__HnUhn",Content:"Sudoku_Content__35bsb"}},function(e,n,l){e.exports={Cell:"Cell_Cell__JGzUO",Default:"Cell_Default__15Zir",Invalid:"Cell_Invalid__2ljSu"}},,function(e,n,l){e.exports={CellInput:"CellInput_CellInput__3Y550",Value:"CellInput_Value__1mStn",ClearCell:"CellInput_ClearCell__HS-td"}},function(e,n,l){e.exports={RadioGroup:"RadioGroup_RadioGroup__mY_Rn",BtnContainer:"RadioGroup_BtnContainer__1eAKW",RadioGroupTitle:"RadioGroup_RadioGroupTitle__18VpK"}},function(e,n,l){e.exports={RadioButton:"RadioButton_RadioButton__2HdoT",RadioInput:"RadioButton_RadioInput__16C2w",RadioLabel:"RadioButton_RadioLabel__4mB_T"}},function(e,n,l){e.exports={AuthorInfo:"AuthorInfo_AuthorInfo__3R_V7",AuthorText:"AuthorInfo_AuthorText__f5MiQ",AuthorLink:"AuthorInfo_AuthorLink__qE4mb"}},,,function(e,n,l){e.exports={SudokuBoxes:"SudokuBoxes_SudokuBoxes__2tKkY",Solved:"SudokuBoxes_Solved__1suF7",GridBox:"SudokuBoxes_GridBox__2WjD4"}},function(e,n,l){e.exports={Layout:"Layout_Layout__2kcOK",BgVideo:"Layout_BgVideo__2QN5B"}},function(e,n,l){e.exports={OptionSide:"OptionSide_OptionSide__bJdEU",OptionDetails:"OptionSide_OptionDetails__-zkR2",Options:"OptionSide_Options__1ltjW"}},function(e,n,l){e.exports={Button:"Button_Button__3h9Fb",Inline:"Button_Inline__MtcvC"}},,,,function(e,n,l){e.exports={SudokuBox:"SudokuBox_SudokuBox__3I-8r"}},function(e,n,l){e.exports={CellInputs:"CellInputs_CellInputs__2R0t9"}},function(e,n,l){e.exports={SudokuBoardContainer:"SudokuBoardContainer_SudokuBoardContainer__3xpWF"}},function(e,n,l){e.exports={Controls:"Controls_Controls__qf-mV"}},,,,,,,function(e,n,l){},function(e,n,l){},,,,,,,,,,,,function(e,n,l){"use strict";l.r(n);var t=l(1),u=l.n(t),o=l(11),a=l.n(o),r=(l(39),l(40),l(2)),i=l(33),c=l(5),s=l(13),d=l(14),v=l(0),b=function(e){var n=[d.Cell],l="0";e.isDefault&&(n.push(d.Default),l=""),e.isInvalid&&n.push(d.Invalid);return Object(v.jsx)("div",{tabIndex:l,onFocus:function(){e.cellFocusHandler(e.row,e.column)},className:n.join(" "),children:e.value})},f="TOGGLE_INTRO_COMPONENT",j="TOGLE_GAME_RULES",p="SET_ACTIVE_CELL_STATE",O="SET_SUDOKU_STATE",h="SET_INVALID_CELLS",_="SET_INVALID_ROWS",m="SET_INVALID_COLUMNS",S="SET_PUZZLE_AND_SOLVED_PUZZLE",k="SOLVE_PUZZLE",x=" SUDOKU_IS_SOLVED",C="SET_INVALID_BOXES_AND_NUMBERS",I="SOLVE_SUDOKU_FOR_USER",y="SET_GAME_MODE",A="INIT_USER_INPUT_SUDOKU_TO_SOLVE",z="SET_DIFFICULTY",g="CLEAR_ACTIVE_CELL",w=function(){return{type:S}},E=function(){return{type:A}},N=function(e){return{type:y,payload:{mode:e}}},B=function(){return{type:f}},R=function(){return{type:g}},U=l(29),P=function(){return Object(v.jsx)("div",{className:U.SudokuBox})},L=l(34),T=l(22),D=Object(c.b)((function(e){return{sudokuState:e.sudoku.sudokuState,isSudokuSolved:e.sudoku.isSudokuSolved}}),(function(e){return{setInvalidBoxesAndNumbers:function(n,l){return e(function(e,n){return{type:C,payload:{invalidBoxesArr:e,invalidNumbersArr:n}}}(n,l))}}}))((function(e){Object(t.useEffect)((function(){u()}),[e.sudokuState]);var n=[],l=[],u=function(){var t=e.sudokuState,u=[].concat(Object(r.a)(t[0].slice(0,3)),Object(r.a)(t[1].slice(0,3)),Object(r.a)(t[2].slice(0,3))),o=[].concat(Object(r.a)(t[0].slice(3,6)),Object(r.a)(t[1].slice(3,6)),Object(r.a)(t[2].slice(3,6))),a=[].concat(Object(r.a)(t[0].slice(6,9)),Object(r.a)(t[1].slice(6,9)),Object(r.a)(t[2].slice(6,9))),i=[].concat(Object(r.a)(t[3].slice(0,3)),Object(r.a)(t[4].slice(0,3)),Object(r.a)(t[5].slice(0,3))),c=[].concat(Object(r.a)(t[3].slice(3,6)),Object(r.a)(t[4].slice(3,6)),Object(r.a)(t[5].slice(3,6))),s=[].concat(Object(r.a)(t[3].slice(6,9)),Object(r.a)(t[4].slice(6,9)),Object(r.a)(t[5].slice(6,9))),d=[].concat(Object(r.a)(t[6].slice(0,3)),Object(r.a)(t[7].slice(0,3)),Object(r.a)(t[8].slice(0,3))),v=[].concat(Object(r.a)(t[6].slice(3,6)),Object(r.a)(t[7].slice(3,6)),Object(r.a)(t[8].slice(3,6))),b=[].concat(Object(r.a)(t[6].slice(6,9)),Object(r.a)(t[7].slice(6,9)),Object(r.a)(t[8].slice(6,9))),f=[];[u,o,a,i,c,s,d,v,b].forEach((function(e,n){var t=[];e.forEach((function(e,n){null!==e&&t.push(e)}));var u=Object(L.a)(t);u.forEach((function(e,n){e&&!l.includes(e)&&l.push(e)})),u.length>0&&f.push(n+1)})),n=[].concat(f),e.setInvalidBoxesAndNumbers(n,l)},o=new Array(9).fill("0").map((function(e,n){return Object(v.jsx)(P,{},n)})),a=[T.SudokuBoxes];return e.isSudokuSolved&&a.push(T.Solved),Object(v.jsx)("div",{className:a.join(" "),children:o})})),H=l(15),G="MODE_PLAY",M="MODE_SOLVE",V="EASY_PUZZLE",F="MEDIUM_PUZZLE",J="HARD_PUZZLE",Z=l(7),K=function(e){var n;return Object(t.useEffect)((function(){var n=setTimeout((function(){e.unmountMe()}),2e3);return function(){return clearTimeout(n)}}),[]),n=e.show?[Z.Feedback,Z.Visible]:[Z.Feedback],"success"===e.type?n.push(Z.Success):"danger"===e.type&&n.push(Z.Danger),Object(v.jsx)("div",{className:n.join(" "),children:Object(v.jsx)("p",{children:e.message})})},Y=l(10),W=function(e){var n=[Y.GameRules];return e.show&&n.push(Y.Visible),Object(v.jsxs)("div",{className:n.join(" "),children:[Object(v.jsx)("h3",{children:"Rules of the game"}),Object(v.jsxs)("ul",{className:Y.List,children:[Object(v.jsx)("li",{children:"Each row must contain the numbers from 1 to 9, without repetitions"}),Object(v.jsx)("li",{children:"Each column must contain the numbers from 1 to 9, without repetitions"}),Object(v.jsx)("li",{children:"The digits can only occur once per block"})]}),Object(v.jsx)("h3",{children:"Tips"}),Object(v.jsxs)("ul",{className:Y.List,children:[Object(v.jsx)("li",{children:" Don\u2019t Repeat Any Numbers"}),Object(v.jsx)("li",{children:"Don't guess, keep scanning till you see an opportunity"}),Object(v.jsx)("li",{children:"Use the process of elimination (start with rows, columns or blocks that are almost completely filled)"}),Object(v.jsxs)("li",{children:["Complete beginner?"," ",Object(v.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://sudoku.com/how-to-play/sudoku-rules-for-complete-beginners/",children:"Learn Sudoku here"})]})]})]})},X=l(4),Q=l.n(X),q=Object(c.b)((function(e){return{showGameRules:e.appUI.showGameRules,activeCell:e.appUI.activeCell,sudokuState:e.sudoku.sudokuState,invalidNumbersArr:e.sudoku.invalidNumbersArr,isAnyCellJustUpdated:e.sudoku.isAnyCellJustUpdated,invalidRows:e.sudoku.invalidRowsArr,invalidColumns:e.sudoku.invalidColumnsArr,invalidBoxesArr:e.sudoku.invalidBoxesArr,invalidBoxesNumbersArr:e.sudoku.invalidBoxesNumbersArr,allValuesAreDefault:e.sudoku.allValuesAreDefault,defaultCellCoordinates:e.sudoku.defaultCellCoordinates,isSudokuSolved:e.sudoku.isSudokuSolved,doesUserInputtedPuzzleHaveError:e.sudoku.doesUserInputtedPuzzleHaveError,isUserInputtedPuzzleSolvable:e.sudoku.isUserInputtedPuzzleSolvable,isUserInputtedPuzzleSolved:e.sudoku.isUserInputtedPuzzleSolved}}),(function(e){return{setActivateCellState:function(n,l){return e(function(e,n){return{type:p,payload:{row:e,column:n}}}(n,l))},setInvalidNumbers:function(n){return e(function(e){return{type:h,payload:{invalidNumbersArr:e}}}(n))},setInvalidRows:function(n){return e(function(e){return{type:_,payload:{invalidRows:e}}}(n))},setInvalidColumns:function(n){return e(function(e){return{type:m,payload:{invalidColumns:e}}}(n))},setSudokuStateToSolved:function(){return e({type:x})}}}))((function(e){Object(t.useEffect)((function(){a()}),[e.isAnyCellJustUpdated]),Object(t.useEffect)((function(){o(e.isSudokuSolved||e.doesUserInputtedPuzzleHaveError)}),[e.isSudokuSolved,e.doesUserInputtedPuzzleHaveError]);var n=Object(t.useState)(!1),l=Object(i.a)(n,2),u=l[0],o=l[1],a=function(){var n=function(n){var l=[],t=[];return n.forEach((function(e,n){var u=[{val:1,count:0},{val:2,count:0},{val:3,count:0},{val:4,count:0},{val:5,count:0},{val:6,count:0},{val:7,count:0},{val:8,count:0},{val:9,count:0}];e.forEach((function(e,n){if(null!==e){var l=u.findIndex((function(n){return n.val===e}));if(-1!==l){var t={val:e,count:u[l].count+1};u[l]=t}}}));var o=[],a=u.filter((function(e){return e.count>1}));for(var r in a){var i=a[r].val;o.push(i),t.push(n+1)}l=l.concat(o)})),e.setInvalidRows(t),l}(e.sudokuState),l=function(n){var l=[],t=[];return n.map((function(e,n,l){var t=[];return e.forEach((function(e,u){var o=l[u][n];t.push(o)})),t})).forEach((function(e,n){var u=[{val:1,count:0},{val:2,count:0},{val:3,count:0},{val:4,count:0},{val:5,count:0},{val:6,count:0},{val:7,count:0},{val:8,count:0},{val:9,count:0}];e.forEach((function(e,n){if(null!==e){var l=u.findIndex((function(n){return n.val===e}));if(-1!==l){var t={val:e,count:u[l].count+1};u[l]=t}}}));var o=[],a=u.filter((function(e){return e.count>1}));for(var r in a){var i=a[r].val;t.push(n+1),o.push(i)}l=l.concat(o)})),e.setInvalidColumns(t),l}(e.sudokuState),t=Object(r.a)(new Set([].concat(Object(r.a)(n),Object(r.a)(l))));d(n,l,t),e.setInvalidNumbers(t)},c=function(n,l){e.setActivateCellState(n,l)},d=function(n,l,t){var u=!Object(r.a)(e.sudokuState).flat().includes(null),o=!Boolean(n.length),a=!Boolean(l.length),i=!Boolean(t.length);u&&o&&a&&i&&e.setSudokuStateToSolved()},f=[s.Sudoku];e.isSudokuSolved&&f.push(s.Solved);return Object(v.jsxs)("div",{className:f.join(" "),children:[Object(v.jsx)(W,{show:e.showGameRules}),Object(v.jsx)(D,{}),Object(v.jsx)("div",{className:s.Content,children:e.sudokuState.flat().map((function(n,l){var t=Math.floor(l/9)+1,u=(l+1)%9===0?9:(l+1)%9,o=function(e,n){var l={row:+e,column:+n};return[1,2,3].includes(l.row)&&[1,2,3].includes(l.column)?1:[1,2,3].includes(l.row)&&[4,5,6].includes(l.column)?2:[1,2,3].includes(l.row)&&[7,8,9].includes(l.column)?3:[4,5,6].includes(l.row)&&[1,2,3].includes(l.column)?4:[4,5,6].includes(l.row)&&[4,5,6].includes(l.column)?5:[4,5,6].includes(l.row)&&[7,8,9].includes(l.column)?6:[7,8,9].includes(l.row)&&[1,2,3].includes(l.column)?7:[7,8,9].includes(l.row)&&[4,5,6].includes(l.column)?8:[7,8,9].includes(l.row)&&[7,8,9].includes(l.column)?9:null}(t,u),a=e.invalidNumbersArr.includes(n)&&(e.invalidRows.includes(t)||e.invalidColumns.includes(u)),r=e.invalidBoxesArr.includes(o)&&e.invalidBoxesNumbersArr.includes(n);return Object(v.jsx)(b,{value:n,cellFocusHandler:c,row:t,column:u,isInvalid:a||r,isDefault:e.defaultCellCoordinates.some((function(e){return e[0]===t&&e[1]===u}))},l)}))}),u?Object(v.jsx)(K,{show:!0,type:e.isSudokuSolved?"success":"danger",message:e.isSudokuSolved?"Solved":"That's not solvable. Valid Sudoku don't contain error. Fix errors and try again",unmountMe:function(){o(!1)}}):null]})}));b.propTypes={showGameRules:Q.a.bool,activeCell:Q.a.object,sudokuState:Q.a.array,invalidNumbersArr:Q.a.array,isAnyCellJustUpdated:Q.a.any,invalidRows:Q.a.array,invalidColumns:Q.a.array,invalidBoxesArr:Q.a.array,invalidBoxesNumbersArr:Q.a.array,allValuesAreDefault:Q.a.bool,defaultCellCoordinates:Q.a.array,isSudokuSolved:Q.a.bool,doesUserInputtedPuzzleHaveError:Q.a.bool,isUserInputtedPuzzleSolvable:Q.a.bool,isUserInputtedPuzzleSolved:Q.a.bool,setActivateCellState:Q.a.func,setInvalidNumbers:Q.a.func,setInvalidRows:Q.a.func,setInvalidColumns:Q.a.func,setSudokuStateToSolved:Q.a.func};var $=l(30),ee=l(16),ne=function(e){var n=[ee.CellInput];e.isClear&&n.push(ee.ClearCell);return Object(v.jsx)("div",{className:n.join(" "),onClick:function(){e.isClear?e.cellInputClickedHandler(null):e.cellInputClickedHandler(+e.value)},children:Object(v.jsx)("p",{className:ee.Value,children:e.value})})},le=["C",1,2,3,4,5,6,7,8,9],te=Object(c.b)((function(e){return{activeCell:e.appUI.activeCell}}),(function(e){return{setSudokuState:function(n,l,t){return e(function(e,n,l){return{type:O,payload:{row:e,column:n,value:l}}}(n,l,t))}}}))((function(e){Object(t.useEffect)((function(){var e=function(e){l(e)};return document.body.addEventListener("keydown",e),function(){document.body.removeEventListener("keydown",e)}}),[e.activeCell]);var n=function(n){var l=e.activeCell,t=l.row,u=l.column;e.setSudokuState(t,u,n)},l=function(e){var l=e.key;["1","2","3","4","5","6","7","8","9","Backspace"].includes(l)&&n("Backspace"===l?null:+l)};return Object(v.jsx)("div",{className:$.CellInputs,children:le.map((function(e,l){return Object(v.jsx)(ne,{value:e,cellInputClickedHandler:n,isClear:"C"===e},l)}))})})),ue=l(26),oe=l(3),ae=function(e,n){return Object(oe.a)(Object(oe.a)({},n),{},{activeCell:{row:e.payload.row,column:e.payload.column}})},re=function(e,n){return Object(oe.a)(Object(oe.a)({},n),{},{activeCell:{row:null,column:null}})},ie=function(e,n){return Object(oe.a)(Object(oe.a)({},n),{},{showIntroComponent:!n.showIntroComponent,activeCell:{row:null,column:null}})},ce=function(e,n){return Object(oe.a)(Object(oe.a)({},n),{},{showGameRules:!n.showGameRules})},se={isAnyCellActive:!1,activeCell:{row:null,column:null},showIntroComponent:!0,showGameRules:!1},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p:var l=ae(n,e);return l;case g:var t=re(0,e);return t;case f:var u=ie(0,e);return u;case j:var o=ce(0,e);return o;default:return e}},ve=function(e,n){return Object(oe.a)(Object(oe.a)({},n),{},{currentMode:e.payload.mode,invalidNumbersArr:[],invalidRowsArr:[],invalidColumnsArr:[],invalidBoxesArr:[],invalidBoxesNumbersArr:[],isAnyCellJustUpdated:"foo",isSudokuSolved:!1,difficulty:n.difficulty,doesUserInputtedPuzzleHaveError:!1,isUserInputtedPuzzleSolvable:!0,isUserInputtedPuzzleSolved:!1})},be=function(e,n){var l=e.payload.difficulty;return Object(oe.a)(Object(oe.a)({},n),{},{difficulty:l})},fe=function(e,n){var l=function(e){var n=Object(H.makepuzzle)(),l=n.map((function(e){return 0===e?9:e})),t=Object(H.solvepuzzle)(n).map((function(e){return 0===e?9:e})),u=l.map((function(e,n){return null==e?{index:n}:{index:"empty"}})).filter((function(e){return"empty"!==e.index})),o=0;o=e===V?10:e===F?30:e===J?50:10;for(var a=l,i=u.length,c=0;c<i-o;c++){var s=u.length,d=Math.floor(Math.random()*s),v=u[d].index;u.splice(d,1),a[v]=t[v]}return{puzzle:[Object(r.a)(a.slice(0,9)),Object(r.a)(a.slice(9,18)),Object(r.a)(a.slice(18,27)),Object(r.a)(a.slice(27,36)),Object(r.a)(a.slice(36,45)),Object(r.a)(a.slice(45,54)),Object(r.a)(a.slice(54,63)),Object(r.a)(a.slice(63,72)),Object(r.a)(a.slice(72,81))],solvedPuzzle:[Object(r.a)(t.slice(0,9)),Object(r.a)(t.slice(9,18)),Object(r.a)(t.slice(18,27)),Object(r.a)(t.slice(27,36)),Object(r.a)(t.slice(36,45)),Object(r.a)(t.slice(45,54)),Object(r.a)(t.slice(54,63)),Object(r.a)(t.slice(63,72)),Object(r.a)(t.slice(72,81))]}}(n.difficulty),t=l.puzzle,u=l.solvedPuzzle,o=[];return t.forEach((function(e,n,l){e.forEach((function(e,l,t){if(null!==e){var u=n+1,a=l+1;o.push([u,a])}}))})),Object(oe.a)(Object(oe.a)({},n),{},{sudokuState:t,solvedState:u,defaultCellCoordinates:o,invalidRowsArr:[],invalidColumnsArr:[],invalidNumbersArr:[],isSudokuSolved:!1})},je=function(e,n){var l=[];return n.solvedState.forEach((function(e,n,t){e.forEach((function(e,t,u){if(null!==e){var o=n+1,a=t+1;l.push([o,a])}}))})),Object(oe.a)(Object(oe.a)({},n),{},{sudokuState:n.solvedState,invalidRowsArr:[],invalidColumnsArr:[],invalidNumbersArr:[],isSudokuSolved:!0,defaultCellCoordinates:l})},pe=function(e,n){var l=n.sudokuState.map((function(n,l){if(l===e.payload.row-1){var t=n.map((function(n,l){return l===e.payload.column-1?e.payload.value:n}));return t}return n}));return Object(oe.a)(Object(oe.a)({},n),{},{sudokuState:l,isAnyCellJustUpdated:"foo"===n.isAnyCellJustUpdated?"bar":"foo"})},Oe=function(e,n){var l=Object(r.a)(e.payload.invalidNumbersArr);return Object(oe.a)(Object(oe.a)({},n),{},{invalidNumbersArr:l})},he=function(e,n){return Object(oe.a)(Object(oe.a)({},n),{},{invalidRowsArr:Object(r.a)(e.payload.invalidRows),isSudokuSolved:!1})},_e=function(e,n){return Object(oe.a)(Object(oe.a)({},n),{},{invalidColumnsArr:Object(r.a)(e.payload.invalidColumns),isSudokuSolved:!1})},me=function(e,n){return Object(oe.a)(Object(oe.a)({},n),{},{isSudokuSolved:!0})},Se=function(e,n){var l=e.payload.invalidBoxesArr,t=e.payload.invalidNumbersArr;return Object(oe.a)(Object(oe.a)({},n),{},{invalidBoxesArr:l,invalidBoxesNumbersArr:t})},ke=function(e,n){var l=0===n.invalidNumbersArr.length,t=0===n.invalidRowsArr.length,u=0===n.invalidColumnsArr.length,o=0===n.invalidBoxesArr.length,a=0===n.invalidBoxesNumbersArr.length,i=l&&t&&u&&o&&a,c=function(e){var n=e.flat().map((function(e){return 9===e?0:e})),l=Object(H.solvepuzzle)(n);if(null===l)return null;var t=l.map((function(e){return 0===e?9:e}));return[Object(r.a)(t.slice(0,9)),Object(r.a)(t.slice(9,18)),Object(r.a)(t.slice(18,27)),Object(r.a)(t.slice(27,36)),Object(r.a)(t.slice(36,45)),Object(r.a)(t.slice(45,54)),Object(r.a)(t.slice(54,63)),Object(r.a)(t.slice(63,72)),Object(r.a)(t.slice(72,81))]}(n.sudokuState);if(i){if(null===c)return console.log("Not solvable"),Object(oe.a)(Object(oe.a)({},n),{},{isUserInputtedPuzzleSolvable:!1,isUserInputtedPuzzleSolved:!1,doesUserInputtedPuzzleHaveError:!1});var s=[];return c.forEach((function(e,n,l){e.forEach((function(e,l,t){if(null!==e){var u=n+1,o=l+1;s.push([u,o])}}))})),Object(oe.a)(Object(oe.a)({},n),{},{sudokuState:c,isUserInputtedPuzzleSolvable:!0,isUserInputtedPuzzleSolved:!0,isSudokuSolved:!0,defaultCellCoordinates:s,doesUserInputtedPuzzleHaveError:!1})}return Object(oe.a)(Object(oe.a)({},n),{},{doesUserInputtedPuzzleHaveError:!0,isUserInputtedPuzzleSolvable:!1,isUserInputtedPuzzleSolved:!1})},xe=function(e,n){return Object(oe.a)(Object(oe.a)({},n),{},{sudokuState:[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]],defaultCellCoordinates:[],isSudokuSolved:!1})},Ce={sudokuState:[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]],solvedState:null,invalidNumbersArr:[],invalidRowsArr:[],invalidColumnsArr:[],invalidBoxesArr:[],invalidBoxesNumbersArr:[],isAnyCellJustUpdated:"foo",defaultCellCoordinates:[],isSudokuSolved:!1,difficulty:null,doesUserInputtedPuzzleHaveError:!1,isUserInputtedPuzzleSolvable:!0,isUserInputtedPuzzleSolved:!1,currentMode:null},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case y:var l=ve(n,e);return l;case z:var t=be(n,e);return t;case S:var u=fe(0,e);return u;case k:var o=je(0,e);return o;case O:var a=pe(n,e);return a;case h:var r=Oe(n,e);return r;case _:var i=he(n,e);return i;case m:var c=_e(n,e);return c;case x:var s=me(0,e);return s;case C:var d=Se(n,e);return d;case I:var v=ke(0,e);return v;case A:var b=xe(0,e);return b;default:return e}},ye=l(23),Ae=l.p+"static/media/video.697d9c04.mp4",ze=function(e){return Object(v.jsxs)("div",{className:ye.Layout,children:[Object(v.jsx)("div",{className:ye.BgVideo,children:Object(v.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,src:Ae})}),e.children]})},ge=l(31),we=function(e){return Object(v.jsx)("div",{className:ge.SudokuBoardContainer,children:e.children})},Ee=l(6),Ne=l(24),Be=l(25),Re=function(e){var n=[Be.Button];return e.inlineBtn&&n.push(Be.Inline),Object(v.jsx)("button",{className:n.join(" "),onClick:e.clicked,disabled:e.disabled,children:e.children})},Ue=function(e){return Object(v.jsxs)("div",{className:Ne.OptionSide,children:[Object(v.jsx)("h3",{children:e.heading}),Object(v.jsxs)("div",{className:Ne.OptionDetails,children:[Object(v.jsx)("p",{children:e.details}),e.children]}),Object(v.jsx)(Re,{disabled:e.btnDisabledCondition,clicked:e.btnCTA,children:e.btnLabel})]})},Pe=l(17),Le=l(18),Te=function(e){return Object(v.jsxs)("div",{className:Le.RadioButton,children:[Object(v.jsx)("label",{className:Le.RadioLabel,htmlFor:e.id,children:e.label}),Object(v.jsx)("input",{className:Le.RadioInput,id:e.id,name:e.name,type:"radio",onChange:e.checked})]})},De=function(e){var n=e.radioBtns;return Object(v.jsxs)("div",{className:Pe.RadioGroup,children:[Object(v.jsx)("p",{className:Pe.RadioGroupTitle,children:e.radioGroupTitle}),Object(v.jsx)("div",{className:Pe.BtnContainer,children:n.map((function(n,l){return Object(v.jsx)(Te,{label:n.radioLabel,checked:n.radioAction,id:l,name:e.radioGroupName},l)}))})]})},He=Object(c.b)((function(e){return{difficulty:e.sudoku.difficulty,shouldShowIntroComponent:e.appUI.showIntroComponent}}),(function(e){return{setDifficulty:function(n){e(function(e){return{type:z,payload:{difficulty:e}}}(n))},setPuzzleAndSolvedPuzzle:function(){e(w()),e(N(G)),e(B())},setBoardToEmpty:function(){e(E()),e(N(M)),e(B())}}}))((function(e){var n=[Ee.IntroPage];e.shouldShowIntroComponent||n.push(Ee.Hidden);var l=[{radioLabel:"Easy",radioAction:function(){e.setDifficulty(V)}},{radioLabel:"Medium",radioAction:function(){e.setDifficulty(F)}},{radioLabel:"Hard",radioAction:function(){e.setDifficulty(J)}}];return Object(v.jsxs)("div",{className:n.join(" "),children:[Object(v.jsxs)("div",{className:Ee.Heading,children:[Object(v.jsxs)("h1",{className:Ee.HeadingTitle,children:["Welcome to Sudoku ",Object(v.jsx)("span",{children:"\u2668\ufe0e"})]}),Object(v.jsx)("h3",{className:Ee.HeadingInfo,children:"Select a game mode below to get started"})]}),Object(v.jsxs)("div",{className:Ee.Options,children:[Object(v.jsx)(Ue,{heading:"Play Sudoku",details:"Gives you a random sudoku game to solve. Cut your coat according to you size, choose your desired difficulty level below",btnLabel:"Play now",btnDisabledCondition:!e.difficulty,btnCTA:e.setPuzzleAndSolvedPuzzle,children:Object(v.jsx)(De,{radioGroupTitle:"Select a difficulty level:",radioBtns:l,radioGroupName:"difficulty button"})}),Object(v.jsx)(Ue,{heading:"Solve my Sudoku",details:'Maybe you have a sudoku that is yet to be solved\ud83e\udd14, enter all the values of the unsolved sudoku in the corresponding grid, click the "Solve button" and let the magic happen\ud83d\ude43',btnLabel:"Solve now",btnDisabledCondition:null,btnCTA:e.setBoardToEmpty})]})]})})),Ge=l(8),Me=Object(c.b)((function(e){return{showGameRules:e.appUI.showGameRules,currentMode:e.sudoku.currentMode,difficulty:e.sudoku.difficulty}}),(function(e){return{toggleIntroComponent:function(){return e(B())},toggleGameRules:function(){return e({type:j})}}}))((function(e){var n="";return e.difficulty===V?n="easy":e.difficulty===F?n="semi-hard":e.difficulty===J&&(n="hard"),Object(v.jsxs)("div",{className:Ge.Header,children:[Object(v.jsxs)("div",{className:Ge.Row,children:[Object(v.jsxs)("h1",{className:Ge.GlowOnHover,children:["Sudoku Game ",Object(v.jsx)("span",{children:"\u2668\ufe0e"})]}),Object(v.jsx)(Re,{clicked:e.toggleIntroComponent,children:"\u21a9\ufe0e Back to menu"})]}),Object(v.jsxs)("div",{className:Ge.Row,children:[Object(v.jsx)("p",{className:Ge.ModeDetails,children:e.currentMode===G?"Solve the ".concat(n," sudoku below!"):"Enter the sudoku I should solve!"}),Object(v.jsx)(Re,{inlineBtn:!0,clicked:e.toggleGameRules,children:e.showGameRules?"Hide rules":"Show rules"})]})]})})),Ve=l(32),Fe=Object(c.b)((function(e){return{currentMode:e.sudoku.currentMode,isThereSolvedState:e.sudoku.isUserInputtedPuzzleSolvable,doesUserInputtedPuzzleHaveError:e.sudoku.doesUserInputtedPuzzleHaveError,isSudokuSolved:e.sudoku.isSudokuSolved}}),(function(e){return{setPuzzleAndSolvedPuzzle:function(){e(R()),e(w())},setBoardToEmpty:function(){e(R()),e(E())},solvePuzzle:function(){e(R()),e({type:k})},solvePuzzleForUser:function(){e(R()),e({type:I})}}}))((function(e){var n,l;return e.currentMode===G?(n=e.solvePuzzle,l=Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Re,{clicked:n,disabled:e.isSudokuSolved,children:"Give up"}),Object(v.jsx)(Re,{clicked:e.setPuzzleAndSolvedPuzzle,children:"New game"})]})):e.currentMode===M&&(n=e.solvePuzzleForUser,l=Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Re,{clicked:e.setBoardToEmpty,children:"Clear All"}),Object(v.jsx)(Re,{clicked:n,disabled:e.isSudokuSolved,children:"Solve"})]})),Object(v.jsx)("div",{className:Ve.Controls,children:l})})),Je=l(19),Ze=function(){return Object(v.jsx)("div",{className:Je.AuthorInfo,children:Object(v.jsxs)("p",{className:Je.AuthorText,children:["Built by"," ",Object(v.jsx)("a",{className:Je.AuthorLink,rel:"noreferrer",target:"_blank",href:"https://tiskae.netlify.app",children:"Ibrahim Adedokun"})]})})},Ke=Object(ue.b)(Object(ue.a)({appUI:de,sudoku:Ie}));var Ye=function(){return Object(v.jsx)(c.a,{store:Ke,children:Object(v.jsxs)(ze,{children:[Object(v.jsx)(He,{}),Object(v.jsx)(Me,{}),Object(v.jsxs)(we,{children:[Object(v.jsx)(q,{}),Object(v.jsx)(te,{})]}),Object(v.jsx)(Fe,{}),Object(v.jsx)(Ze,{})]})})},We=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,53)).then((function(n){var l=n.getCLS,t=n.getFID,u=n.getFCP,o=n.getLCP,a=n.getTTFB;l(e),t(e),u(e),o(e),a(e)}))};a.a.render(Object(v.jsx)(u.a.StrictMode,{children:Object(v.jsx)(Ye,{})}),document.getElementById("root")),We()}],[[52,1,2]]]);
//# sourceMappingURL=main.e1c8c5df.chunk.js.map