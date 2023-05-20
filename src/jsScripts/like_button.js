import {VoiceAssistant} from 'react-wake-up-voice-assistant'
const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
// const e = React.createElement;
// root.render(e(VoiceAssistant));
let element = <VoiceAssistant/>;
root.render(element);