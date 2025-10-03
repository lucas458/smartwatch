Math.clamp = (value, min, max) => {
    if (value < min) return min;
    if (value > max) return max;
    return value;
};


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function map(x, in_min, in_max, out_min, out_max) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


function shuffleArray( arr = [] ){
    for (let i = arr.length - 1; i >= 1; i--){
        let j = getRandomInt(0, i + 1);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}


function fatorial(n){
    if (n > 1) {
        return n * fatorial(n - 1);
    }
    return n;
}

function leapYear(year){
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

const DATES = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const MONTHS = [
    "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
];

const DAYS = [
    "DOMINGO", "SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO"
];




function getOffsetByDistance( D, d ){
    return (D - Math.sqrt((D/2)**2 - d**2) * 2) / 2;
}



const calculator_keyMap = [

    {
        0: '7',
        1: '8',
        2: '9',
        3: '/',
        4: 'C',
        5: '4',
        6: '5',
        7: '6',
        8: '*',
        9: '=',
        10: '1',
        11: '2',
        12: '3',
        13: '-',
        14: 'A',
        16: '0',
        17: '.',
        18: '+',
    },

    {
        0: 'π',
        1: 'sin',
        2: 'cos',
        3: 'tan',
        4: 'e',
        6: 'log',
        7: '!',
        8: '(',
        9: ')',
        11: '^',
        12: '√',
        14: 'A'
    }

];





const SCREEN_BASE = {

    'heartRate': `
        <div class="heartRate_wrapper_wrapper">
            <div class="heartRate_wrapper_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" viewBox="0 0 16 16"><path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9H1.475Z"></path><path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.88Z"></path></svg>
            </div>
            <div class="heartRate_value"> </div>
        </div>
    `,





    'stopwatch': `
        <div class="stopwatch_wrapper" paused="true">
            
            <div class="stopwatch_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#576dff" viewBox="0 0 16 16"><path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z"></path></svg>
            </div>

            <div class="stopwatch_content_wrapper">
                <div class="stopwatch_digit_big">00:</div>
                <div class="stopwatch_digit_big">00:</div>    
                <div class="stopwatch_digit_tiny">00</div>   
            </div>

            <div class="stopwatch_controls">
                <div class="stopwatch_button" id="stopwatch_startStop" onclick="stopwatchStartStop(this)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>    
                </div>
                <div class="stopwatch_button" id="stopwatch_reset" onclick="stopwatchReset()" style="width: 0" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/><path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/></svg>   
                </div>
            </div>

        </div>
    `,





    'compass': `
        <div class="compass_wrapper">
            
            <div class="compass_line_mark_list">
                <div style="transform: rotate(0deg);"><div></div></div>
                <div style="transform: rotate(30deg);"><div></div></div>
                <div style="transform: rotate(60deg);"><div></div></div>
                <div style="transform: rotate(90deg);"><div></div></div>
                <div style="transform: rotate(120deg);"><div></div></div>
                <div style="transform: rotate(150deg);"><div></div></div>
                <div style="transform: rotate(180deg);"><div></div></div>
                <div style="transform: rotate(210deg);"><div></div></div>
                <div style="transform: rotate(240deg);"><div></div></div>
                <div style="transform: rotate(270deg);"><div></div></div>
                <div style="transform: rotate(300deg);"><div></div></div>
                <div style="transform: rotate(330deg);"><div></div></div>
            </div>

            <div class="compass_content_wrapper">
                <div class="compass_content">
                    <div>O</div>
                    <div>L</div>
                </div>
                <div class="compass_content">
                    <div>N</div>
                    <div>S</div>
                </div>
            </div>

            <div class="compass_needle_wrapper">
                <div class="compass_needle">
                    <div></div>
                    <div></div>
                </div>
            </div>

        </div>
    `,





    'music': `
        <div class="music_wrapper">

            <div class="music_content">
                <div class="music_title"></div>
                <div class="music_subTitle"></div>    
            </div>

            <div class="music_progress">
                <div class="music_progress_track" onclick="musicTrackClick(this, event)">
                    <div class="music_progress_fill"></div>
                </div>
            </div>

            <div class="music_controls">
                <div class="music_button" onclick="musicBack()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>
                </div>
                <div class="music_button" id="music_playPause" onclick="musicPlayPause()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>
                </div>
                <div class="music_button" onclick="musicNext()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
                </div>
            </div>
            
            <div class="music_controls">
                <div class="music_button" onclick="musicVolumeDown()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/></svg>
                </div> 
                <div class="music_button" onclick="musicVolumeUp()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/><path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/></svg>
                </div>
            </div>

            <div class="music_progress" style="padding: 0 64px; height: 2px">
                <div class="music_progress_track">
                    <div class="music_progress_fill music_progress_volumeFill"></div>
                </div>
            </div>

        </div>
    `,





    'camera': `
        <div class="camera_wrapper">
            <div class="camera_button">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" viewBox="0 0 16 16"><path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path><path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"></path></svg>    
            </div>
        </div>
    `,
    




    'dial': `
        <div class="dial_wrapper">
            <div class="dial_keypad">
                <div class="dial_lcd"> </div>
                <div class="dial_key">1</div>
                <div class="dial_key">2</div>
                <div class="dial_key">3</div>
                <div class="dial_key">4</div>
                <div class="dial_key">5</div>
                <div class="dial_key">6</div>
                <div class="dial_key">7</div>
                <div class="dial_key">8</div>
                <div class="dial_key">9</div>

                <div class="dial_key dial_key_call">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#28a745" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
                </div>

                <div class="dial_key">0</div>

                <div class="dial_key dial_key_backspace">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/></svg>
                </div>
            </div>
        </div>
    `,





    'calculator': `
        <div class="calculator_wrapper ">
            <div class="calculator_lcd"></div>
            <div class="calculator_keypad">
                <div class="calculator_key">7</div>
                <div class="calculator_key">8</div>
                <div class="calculator_key">9</div>
                <div class="calculator_key">/</div>
                <div class="calculator_key">C</div>
                <div class="calculator_key">4</div>
                <div class="calculator_key">5</div>
                <div class="calculator_key">6</div>
                <div class="calculator_key">*</div>
                <div class="calculator_key">=</div>
                <div class="calculator_key">1</div>
                <div class="calculator_key">2</div>
                <div class="calculator_key">3</div>
                <div class="calculator_key">-</div>
                <div class="calculator_key">A</div>
                <div class="calculator_key"></div>
                <div class="calculator_key">0</div>
                <div class="calculator_key">.</div>
                <div class="calculator_key">+</div>
            </div>
        </div>
    `


};








var main_content_screen_list = document.getElementById('main_content_screen_list');
var mainContentScreenTouchInit = {x: 0, y: 0};
var thresholdAxis = {x: false, y: false};
var touchInitAbsolute = {x: 0, y: 0};


main_content_screen_list.ontouchstart = (event) => {
    mainContentScreenTouchInit.x = event.touches[0].clientX - main_content_screen_list.offsetLeft;
};


main_content_screen_list.ontouchmove = (event) => {
    let posX = event.touches[0].clientX - main_content_screen_list.parentElement.offsetLeft - mainContentScreenTouchInit.x;
    if  ( thresholdAxis.x ){
        posX = Math.clamp(posX, -main_content_screen_list.offsetWidth * (main_content_screen_list.children.length - 1), 0);
        main_content_screen_list.style.transition = '';
        main_content_screen_list.style.left = posX + 'px';
    }
};


main_content_screen_list.ontouchend = () => {
    const indexScreen = Math.abs( Math.round((main_content_screen_list.offsetLeft - main_content_screen_list.parentElement.offsetLeft) / main_content_screen_list.offsetWidth) );
    main_content_screen_list.style.transition = '100ms';
    main_content_screen_list.style.left = -(indexScreen * main_content_screen_list.offsetWidth) + 'px';

    if ( indexScreen < 2 ){
        document.querySelectorAll('.screen_deletable').forEach(e => e.remove());
    }

};


var menu_item_list = document.getElementById('menu_item_list');
var menuItemListTouchInit = 0;
var indexItem = 0;



function menuAjust( delay = '' ){
    for (let i = 0; i < menu_item_list.children.length; i++){
        const d = menu_item_list.offsetTop - 104 + menu_item_list.children[i].offsetTop; 
        const offset = getOffsetByDistance(240, d);
        menu_item_list.children[i].style.transition = delay;
        menu_item_list.children[i].style.left = offset + 'px'; 
    }
}


function menuItemMoveByIndex( indexItem = 0 ){
    const heightWithOffset = (main_content_screen_list.offsetHeight/2 - menu_item_list.firstElementChild.offsetHeight/2);
    menu_item_list.style.top = (heightWithOffset + indexItem * (-menu_item_list.firstElementChild.offsetHeight - 8)) + 'px';
    menuItemMainViewByIndex(indexItem);
    menuAjust(); // delay opcioanl 100ms
}


function menuItemMainViewByIndex( indexItem = 0 ){
    document.querySelectorAll('.menu_item_mainView').forEach(e => e.classList.remove('menu_item_mainView'));
    menu_item_list.children[indexItem].classList.add('menu_item_mainView');
}


menu_item_list.ontouchstart = (event) => {
    menuItemListTouchInit = event.touches[0].clientY - menu_item_list.offsetTop;
};


menu_item_list.ontouchmove = (event) => {
    if ( thresholdAxis.y ){
        let posY = event.touches[0].clientY - menuItemListTouchInit;
        const heightWithOffset = (main_content_screen_list.offsetHeight/2 - menu_item_list.firstElementChild.offsetHeight/2);
        posY = Math.clamp(posY, heightWithOffset- menu_item_list.offsetHeight + menu_item_list.firstElementChild.offsetHeight, heightWithOffset );
        menu_item_list.style.transition = '';
        menu_item_list.style.top = (posY) + 'px';
        indexItem = Math.abs( Math.round((posY - heightWithOffset) / (menu_item_list.firstElementChild.offsetHeight + 8)) );
        menuItemMainViewByIndex(indexItem);
        menuAjust();
    }
};


menu_item_list.ontouchend = () => {
    const heightWithOffset = (main_content_screen_list.offsetHeight/2 - menu_item_list.firstElementChild.offsetHeight/2);
    indexItem = Math.abs( Math.round((menu_item_list.offsetTop - heightWithOffset) / (menu_item_list.firstElementChild.offsetHeight + 8)) );
    menuItemMoveByIndex(indexItem);
};


document.querySelectorAll('.menu_item').forEach((e, i) => {
    e.onclick = () => {
        if ( e.classList.contains('menu_item_mainView') ){
            console.log('click:', e.lastElementChild.innerHTML );
            generateScrennByApp(e.ariaValueText);
        }
        menuItemMoveByIndex(i);
    };
});

    







ontouchstart = (event) => {
    touchInitAbsolute = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
    };
};


ontouchmove = (event) => {
    if ( Math.abs(event.touches[0].clientX - touchInitAbsolute.x) > 10 && !thresholdAxis.y ){
        thresholdAxis.x = true;
    }else if ( Math.abs(event.touches[0].clientY - touchInitAbsolute.y) > 10 && !thresholdAxis.x ){
        thresholdAxis.y = true;
    }
};


ontouchend = () => {
    touchInitAbsolute = {x: 0, y: 0};
    thresholdAxis = {x: false, y: false};
};









// TOGGLE CLOCK MODE: DIGITAL / ANALOG
screen_main.onclick = () => {
    const flag = clock_digital.classList.contains('screen_main_clock_type_wrapper_visible');
    document.querySelector('.screen_main_clock_type_wrapper_visible').classList.remove('screen_main_clock_type_wrapper_visible');
    document.querySelectorAll('.screen_main_clock_type_wrapper')[flag? 1 : 0].classList.add('screen_main_clock_type_wrapper_visible')
};


function generateDotMark(){
    screen_main_clock_digital_mark_list.innerHTML = '';
    for (let i = 0; i < 60; i++){
        let dot = document.createElement('div');
        dot.innerHTML = '<div></div>';
        dot.style.transform = `rotate(${i * 6 - 90}deg)`;
        screen_main_clock_digital_mark_list.appendChild(dot);
    }
}


function setDotMarkValue( value = 0 ){
    for (let i = 0; i < screen_main_clock_digital_mark_list.children.length; i++){
        screen_main_clock_digital_mark_list.children[i].classList.toggle('mark_active', i <= value);
    }
}





var muteState = false;

function generateScrennByApp( name ){

    // CLOSE
    document.querySelectorAll('.screen_deletable').forEach(e => e.remove());

    if ( name == 'muteToggle' ){
        muteState = !muteState;
        return;
    }

    // CREATE SCREEN
    let screenElement = document.createElement('div');
    screenElement.classList.add('screen', 'screen_deletable');
    screenElement.ariaValueText = name; 
    main_content_screen_list.appendChild(screenElement);

    // SET CONTENT
    screenElement.innerHTML = SCREEN_BASE[name];
    
    // ANIMATION MOVE
    main_content_screen_list.style.left = (-main_content_screen_list.offsetWidth * 2) + 'px';
    
    switch (name) {
        case 'calculator':
            generateCalulatorKeypad(false);
            break;
        case 'dial':
            document.querySelectorAll('.dial_key').forEach(e => {
                e.onclick = () => {
                    const dial_lcd = document.querySelector('.dial_lcd');
                    if ( e.classList.contains('dial_key_backspace') ){
                        dial_lcd.innerHTML = dial_lcd.innerHTML.substring(0, dial_lcd.innerHTML.length - 1);
                        if ( dial_lcd.innerHTML.length == 0 ){
                            dial_lcd.innerHTML = ' ';
                        }
                        return;
                    }
                    if ( e.classList.contains('dial_key_call') ){
                        dial_lcd.innerHTML = ' ';
                        return;
                    }
                    dial_lcd.innerHTML = String(dial_lcd.innerHTML).replaceAll(' ', '');
                    dial_lcd.innerHTML += e.innerHTML;
                    dial_lcd.innerHTML = dial_lcd.innerHTML.substring(0, 16);
                };
            });
            break;
    
        default:
            break;
    }


}





/****** APP HEART RATE ******/
function updateHeartRate( value = 0 ){
    if ( document.querySelector('.heartRate_value') == null ) return;
    document.querySelector('.heartRate_value').innerHTML = value + ' bpm';

}





/****** APP STOPWATCH ******/
var startTime;
var elapsedPausedTime = 0;
var stopwatch_paused = true;
var stopwatch_reseted = true;

function startStopwatch(){
    startTime = new Date().getTime() - elapsedPausedTime;
    stopwatch_reseted = false;
}

function stopStopwatch(){
    elapsedPausedTime = new Date().getTime() - startTime;
    stopwatch_reseted = false;
}

function resetStopwatch(){
    stopStopwatch();
    elapsedPausedTime = 0;
    stopwatch_reseted = true;
}

function updateStopwatch(){
    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - startTime;
    return isNaN(elapsedTime) ? 0 : elapsedTime;
}

function pad(number){
    return (number < 10 ? "0" : "") + number;
}


function stopwatchStartStop(e){

    if ( stopwatch_paused ){
        startStopwatch();  
        stopwatch_paused = false;
        e.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/></svg>`;
        return;
    }

    stopStopwatch();
    e.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>`;
    stopwatch_paused = true; 
    
}


function stopwatchReset(){
    resetStopwatch(); 
    document.querySelector('.stopwatch_wrapper').setAttribute('paused', 'true');
    let digits = document.querySelector('.stopwatch_content_wrapper').children;
    digits[0].innerHTML = '00:';
    digits[1].innerHTML = '00:';
    digits[2].innerHTML = '00'; 
}






function update(){ 

    const date = new Date();
    let timeArray = date.toLocaleTimeString().split(':');

    // DIGITAL CLOCK
    if ( timeArray[0] > 12 ){
        timeArray[0] -= 12;
        timeArray[0] = timeArray[0].toString();
    }
    
    if ( timeArray[0] < 10 ){
        timeArray[0] = ' ' + parseInt(timeArray[0]);
    }

    if ( parseInt(timeArray[0]) == 0 ){
        timeArray[0] = '12';
    } 

    document.querySelectorAll('.screen_main_clock_digital_digit')[0].innerHTML = timeArray[0][0];
    document.querySelectorAll('.screen_main_clock_digital_digit')[1].innerHTML = timeArray[0][1];
    document.querySelectorAll('.screen_main_clock_digital_digit')[2].innerHTML = timeArray[1][0];
    document.querySelectorAll('.screen_main_clock_digital_digit')[3].innerHTML = timeArray[1][1];
    screen_main_clock_amPm.innerHTML = date.getHours() >= 12 ? 'PM' : 'AM';
    screen_main_clock_date.innerHTML = DAYS[ date.getDay() ].substr(0, 3) + ' ' + (date.getDate());
    setDotMarkValue( date.getSeconds() );

    // ANALOG CLOCK
    analog_pointer_hour.style.transform = `rotate(${ date.getHours() * 30 - 90 }deg)`;
    analog_pointer_min.style.transform = `rotate(${ date.getMinutes() * 6 - 90 }deg)`;
    analog_pointer_sec.style.transform = `rotate(${ date.getSeconds() * 6 - 90 }deg)`;
    

    //// APP STOPWATCH
    if ( document.querySelector('.stopwatch_wrapper') ){
        
        if ( !stopwatch_reseted ){ 
            let digits = document.querySelector('.stopwatch_content_wrapper').children;
            const value = (!stopwatch_paused) ? updateStopwatch() : elapsedPausedTime;
            const sec = parseInt(value / 1000 % 60);
            const ms  = parseInt(value / 10 % 100);
            const min = parseInt(sec / 60 % 60);

            digits[0].innerHTML = pad(min) + ':';
            digits[1].innerHTML = pad(sec) + ':';
            digits[2].innerHTML = pad(ms);
            
            if ( stopwatch_paused ){
                stopwatch_startStop.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>`;
            }else{
                stopwatch_startStop.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/></svg>`;
            } 

        }

        const showReset = !stopwatch_reseted && stopwatch_paused;
        stopwatch_reset.style.borderColor = (showReset)? '': 'transparent';
        stopwatch_reset.style.width = (showReset)? '': '0';
        stopwatch_reset.style.transform = (showReset)? '': 'scale(0)'; 
    }
    


    //// APP MUSIC
    if ( document.querySelector('.music_wrapper') ){
        musicUpdateInfo();
    }
    

    /****** MAIN HEADER ICONS ******/
    stopwatch_alertIcon.classList.toggle('screen_main_header_icon_visible', !stopwatch_reseted);
    mute_alertIcon.classList.toggle('screen_main_header_icon_visible', muteState);

}




setInterval(()=>{
    upadteCompass( getRandomInt(0, 360) );
    updateHeartRate( getRandomInt(60, 65) );
}, 1000);





/****** APP COMPASS ******/
function upadteCompass(angle){
    let compass_wrapper = document.querySelector('.compass_wrapper');
    if ( compass_wrapper == null ) return;
    compass_wrapper.querySelector('.compass_needle').style.transform = `rotate(${angle}deg)`;
}



// SENSOR START
// let magSensor = new Magnetometer({ frequency: 10 });

// magSensor.addEventListener("reading", (e) => {
//     console.log(`Magnetic field along the X-axis ${magSensor.x}`);
//     console.log(`Magnetic field along the Y-axis ${magSensor.y}`);
//     console.log(`Magnetic field along the Z-axis ${magSensor.z}`);
//     console.log(magSensor);
// });
// magSensor.start();

// SENSOR END




/****** APP CALCULATOR ******/

function generateCalulatorKeypad( extended = false ){

    let calculator_wrapper = document.querySelector('.calculator_wrapper');
    if ( calculator_wrapper == null ) return;

    calculator_wrapper.classList.toggle('calculator_extendedMode', extended);

    document.querySelectorAll('.calculator_key').forEach((e, i) => {
        const keypadIndex = extended ? 1 : 0;
        const hasKey = calculator_keyMap[keypadIndex][i] != null;
        e.innerHTML = hasKey ? calculator_keyMap[keypadIndex][i] : 'x';
        e.style.visibility = hasKey ? '' : 'hidden';

        e.onclick = () => {
            const key = calculator_keyMap[keypadIndex][i];
            const lcd = document.querySelector('.calculator_lcd'); 
            
            if ( lcd.innerHTML == Infinity || lcd.innerHTML == 'Error' ){
                lcd.innerHTML = '';
                return;
            }


            // Toggle Keypad Mode
            if ( key == 'A' ){
                toggleCalulatorKeypadMode();
            }
            
            // Clear
            else if ( key == 'C' ){
                lcd.innerHTML = '';
            }
            
            // Calculate
            else if ( key == '=' ){

                try{
                    let dataInput = lcd.innerHTML;
                    dataInput = dataInput.replaceAll('sin', 'Math.sin');
                    dataInput = dataInput.replaceAll('cos', 'Math.cos');
                    dataInput = dataInput.replaceAll('tan', 'Math.tan');
                    dataInput = dataInput.replaceAll('log', 'Math.log');
                    dataInput = dataInput.replaceAll('π', 'Math.PI');
                    dataInput = dataInput.replaceAll('e', 'Math.E');
                    dataInput = dataInput.replaceAll('√', 'Math.sqrt');
                    dataInput = dataInput.replaceAll('^', '**');
                    dataInput = dataInput.replaceAll('!', 'fatorial');

                    const openCount  = dataInput.split('(').length - 1;
                    const closeCount = dataInput.split(')').length - 1;
                    const remains    = openCount - closeCount;

                    if ( remains > 0 ){
                        dataInput += ')'.repeat(remains);
                    }

                    out = +parseFloat(eval(dataInput)).toFixed(10);
                    out = +parseFloat(out).toPrecision(8);

                    if ( out != undefined && !isNaN(out) ){
                        lcd.innerHTML = out;
                    }

                } catch (e){
                    lcd.innerHTML = 'Error';
                }

            }
            
            // Dot
            else if ( key == '.' ){
                if ( lcd.innerHTML.length == 0 ){
                    lcd.innerHTML += '0';
                }
                lcd.innerHTML += key;
            }
            
            // Numeric
            else if ( !isNaN(parseInt(key)) ){
                const lastContent = lcd.innerHTML[ lcd.innerHTML.length - 1 ];
                if ( lcd.innerHTML.length < 16 ){
                    lcd.innerHTML += key;
                    lcd.innerHTML = lcd.innerHTML.substr(0, lcd.innerHTML.length - 1);
                    lcd.innerHTML += key;
                }
            }
            
            // Operator
            else if ( key == '+' || key == '-' || key == '*' || key == '/' ){
                const lastContent = lcd.innerHTML[ lcd.innerHTML.length - 1 ];
                const lastContentIsOperator = lastContent == '+' || lastContent == '-' || lastContent == '*' || lastContent == '/';
                if ( lcd.innerHTML.length > 0 || key == '-' ){
                    if ( lcd.innerHTML.length != 1 || !isNaN(parseInt(lastContent)) ){
                        if ( lastContentIsOperator ){
                            lcd.innerHTML = lcd.innerHTML.substr(0, lcd.innerHTML.length - 1);
                        }
                        lcd.innerHTML += key;
                    }
                }

            }


            // Extended Keys
            else{
                const lastContent = lcd.innerHTML[ lcd.innerHTML.length - 1 ];
                if ( !isNaN(parseInt(lastContent)) ){
                    if ( key != ')' && key != '^' ){
                        lcd.innerHTML += '*';
                    }
                }

                if ( key != '(' && key != ')' && key != 'e' && key != 'π' ){
                    lcd.innerHTML += key + '(';
                }else{   
                    lcd.innerHTML += key;
                }

            }


        };

    });

}

function toggleCalulatorKeypadMode(){
    let calculator_wrapper = document.querySelector('.calculator_wrapper');
    if ( calculator_wrapper == null ) return;
    const extended = calculator_wrapper.classList.contains('calculator_extendedMode');
    generateCalulatorKeypad(!extended);
}









/****** APP MUSIC ******/

var audio_manager = new Audio();
var SONG_INDEX = 0;

const SONGS = [

    {
        title: 'Art School Wannabe',
        artist: 'Sorority Noise',
        album: 'Joy, Departed',
        artwork: 'https://f4.bcbits.com/img/a1445726047_16.jpg',
        src: 'url here'
    },

    {
        title: 'Smoke Me Out',
        artist: 'American Secrets',
        album: "Wasn't Our Season EP",
        artwork: 'https://f4.bcbits.com/img/a0188121758_16.jpg',
        src: 'url here'
    },

    {
        title: 'Change the World',
        artist: 'Scott Sellers',
        album: 'Power Hungry',
        artwork: 'https://f4.bcbits.com/img/a1767863702_16.jpg',
        src: 'url here'
    }

];


function musicUpdateInfo(){

    let music_wrapper = document.querySelector('.music_wrapper');
    if ( music_wrapper == null ) return;

    music_wrapper.querySelector('.music_title').innerHTML = SONGS[SONG_INDEX].title;
    music_wrapper.querySelector('.music_subTitle').innerHTML = SONGS[SONG_INDEX].artist;

    if ( audio_manager.paused ){
        document.querySelector('#music_playPause').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path></svg>`
    }else{
        document.querySelector('#music_playPause').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/></svg>`;
    }
    
    music_wrapper.querySelector('.music_progress_fill').style.width = (audio_manager.currentTime / audio_manager.duration * 100)+ '%';
    music_wrapper.querySelector('.music_progress_volumeFill').style.width = (audio_manager.volume * 100) + '%';
    
    navigator.mediaSession.metadata = new MediaMetadata({
        title: SONGS[SONG_INDEX].title,
        artist:  SONGS[SONG_INDEX].artist,
        album: SONGS[SONG_INDEX].album,
        artwork: [{src: SONGS[SONG_INDEX].artwork}]
    });

    navigator.mediaSession.setActionHandler("previoustrack", SONG_INDEX == 0? null : musicBack);
    navigator.mediaSession.setActionHandler("nexttrack", SONG_INDEX >= SONGS.length - 1? null : musicNext);

}



function musicLoadPlay(){
    audio_manager.src = SONGS[SONG_INDEX].src;
    audio_manager.play().then(()=>{
        musicUpdateInfo();
    }).catch(()=>{});
}

function musicPlayPause(){
    if ( audio_manager.paused ){

        if ( audio_manager.src == '' ){
            audio_manager.src = SONGS[SONG_INDEX].src;
        }
        audio_manager.play().then(()=>{
            musicUpdateInfo();
        }).catch(()=>{});

    }else{
        audio_manager.pause();
    }
}

function musicNext(){
    if ( SONG_INDEX + 1 >= SONGS.length ) {
        if ( document.querySelector('.music_progress_fill') ){
            document.querySelector('.music_progress_fill').style.width = '0';
            SONG_INDEX = 0;
            audio_manager.src = SONGS[SONG_INDEX].src;
        }
        return;
    };
    SONG_INDEX = Math.clamp(SONG_INDEX + 1, 0, SONGS.length - 1)
    musicLoadPlay();
}

function musicBack(){
    if ( SONG_INDEX == 0 ) return;
    SONG_INDEX = Math.clamp(SONG_INDEX - 1, 0, SONGS.length - 1)
    musicLoadPlay();
}

    
function musicVolumeUp(){
    audio_manager.volume = Math.clamp(audio_manager.volume + 0.1, 0, 1);
}

function musicVolumeDown(){
    audio_manager.volume = Math.clamp(audio_manager.volume - 0.1, 0, 1);
}


audio_manager.onended = musicNext;



navigator.mediaSession.setActionHandler("play", () => {
    if ( audio_manager.src == '' ){
        audio_manager.src = SONGS[SONG_INDEX].src;
    }
    audio_manager.play().then(()=>{
        musicUpdateInfo(); 
    }).catch(()=>{});
});


navigator.mediaSession.setActionHandler("pause", () => {
    audio_manager.pause();
});



function musicTrackClick( music_progress_track, event ){
    event.stopImmediatePropagation();
    const totalTrack = music_progress_track.offsetWidth;
    const atualFill = event.clientX - main_wrapper.offsetLeft - music_progress_track.offsetLeft;
    const percent = atualFill / totalTrack;
    
    if ( audio_manager.src != '' ){
        audio_manager.currentTime = percent * audio_manager.duration;
    }
}




onload = () => {
    menuAjust();
    generateDotMark();
    update();
    setInterval(update, 20);
};














//////////////////// BATTERY

navigator.getBattery().then((battery) => {
    function updateAllBatteryInfo() {
        updateChargeInfo();
        updateLevelInfo();
        updateChargingInfo();
        updateDischargingInfo();
    }
    updateAllBatteryInfo();

    battery.addEventListener("chargingchange", () => {
        updateChargeInfo();
    });
    function updateChargeInfo(){
        setBatteryIconCharging(battery.charging);
        updateLevelInfo();
    }

    battery.addEventListener("levelchange", () => {
        updateLevelInfo();
    });
    function updateLevelInfo() {
        if ( !battery.charging ){
            setBateryLevel( battery.level * 10 );
        }
    }

    
    battery.addEventListener("chargingtimechange", () => {
        updateChargingInfo();
    });
    function updateChargingInfo() {}

    battery.addEventListener("dischargingtimechange", () => {
        updateDischargingInfo();
    });
    function updateDischargingInfo() {}

});



function setBateryLevel( level = 0 ){
    if ( screen_main_clock_battery.querySelectorAll('path').length > 2 ) return;
    level = Math.clamp(level, 0, 10);
    screen_main_clock_battery.querySelector('path').setAttribute('d', `M2 6h${level}v4H2V6z`);
}

function setBatteryIconCharging( isCharging = false ){
    
    if ( isCharging ){
        screen_main_clock_battery.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z"/>
            <path d="M2 4h4.332l-.94 1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.38l-.308 1H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
            <path d="M2 6h2.45L2.908 7.639A1.5 1.5 0 0 0 3.313 10H2V6zm8.595-2-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.405z"/>
            <path d="M12 10h-1.783l1.542-1.639c.097-.103.178-.218.241-.34V10zm0-3.354V6h-.646a1.5 1.5 0 0 1 .646.646zM16 8a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"/>
        </svg>
        `;
        return;
    }

    screen_main_clock_battery.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path d="M2 6h10v4H2V6z"/>
        <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"/>
    </svg>`

}


////////////////////