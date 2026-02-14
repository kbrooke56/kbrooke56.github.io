const chatButton = document.getElementById("bf-chatbot-button");
const chatWindow = document.getElementById("bf-chatbot");
const closeChat = document.getElementById("bf-chatbot-close");
const sendBtn = document.getElementById("bf-chatbot-send");
const input = document.getElementById("bf-chatbot-input");
const messages = document.getElementById("bf-chatbot-messages");

// open & close
chatButton.onclick = () => chatWindow.style.display = "flex";
closeChat.onclick = () => chatWindow.style.display = "none";

// send message
sendBtn.onclick = sendMessage;
input.addEventListener("keypress", function(e){
    if(e.key === "Enter") sendMessage();
});

function sendMessage(){
    const userText = input.value.trim();
    if(userText === "") return;

    addMessage(userText, "user-message");
    botReply(userText.toLowerCase());
    input.value = "";
}

function addMessage(text, className){
    const msg = document.createElement("div");
    msg.className = className;
    msg.textContent = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}

// Bot responses
function botReply(text){
    let reply = "I'm sorry, I didn't understand that. Please check our FAQ page.";

    if(text.includes("delivery"))
        reply = "Delivery typically takes 3–5 working days.";
    else if(text.includes("return"))
        reply = "You can return products within 30 days with proof of purchase.";
    else if(text.includes("warranty"))
        reply = "All BlendForge appliances include a 2-year warranty.";
    else if(text.includes("repair") || text.includes("broken") || text.includes("not working"))
        reply = "Our repair service can be arranged via the Contact Us page.";
    else if(text.includes("hello") || text.includes("hi") || text.includes("hey"))
        reply = "Hello! 👋 Welcome to BlendForge support. How can I help you today?";
    else if(text.includes("hours") || text.includes("open") || text.includes("opening times"))
        reply = "Our support team is available Monday–Friday, 9am–5pm.";
    else if(text.includes("contact") || text.includes("email") || text.includes("phone"))
        reply = "You can contact us via the contact form on our website, by email at support@blendforge.co.uk, or by phone on 0000 000 0000.";
    else if(text.includes("price") || text.includes("cost"))
        reply = "Prices vary depending on the appliance model. Please visit the shop page to view the full product range and pricing.";
    else if(text.includes("smart home") || text.includes("assistant") || text.includes("voice control"))
    	reply = "Many BlendForge smart appliances now integrate with our own BlendForge Voice Assistant, Forger. It allows hands-free control, automated routines, and seamless connectivity with your home ecosystem.";
    else if(text.includes("quiet") || text.includes("noise") || text.includes("loud"))
        reply = "Our latest appliances use noise-reduction technology with vibration-dampening materials for quieter operation.";
    else if(text.includes("sustain") || text.includes("eco") || text.includes("recycle"))
        reply = "BlendForge is developing eco-friendly appliances using recycled and bio-based materials to reduce environmental impact.";
    else if(text.includes("thanks") || text.includes("thank you"))
        reply = "You're welcome! 😊 If you have any other questions, feel free to ask.";
    else if(text.includes("fusion") || text.includes("fusion 5000") || text.includes("new range"))
        reply = "The Fusion 5000 range is our newest collection of smart appliances, featuring noise reduction, smart-home connectivity, and improved energy efficiency.";

    setTimeout(() => addMessage(reply, "bot-message"), 500);
}


// Adjust chatbot button near footer
window.addEventListener("scroll", adjustChatButton);

function adjustChatButton() {
    const chatBtn = document.getElementById("bf-chatbot-button");
    const footer = document.querySelector("footer");

    if (!chatBtn || !footer) return;

    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if footer is coming into view
    if (footerRect.top < windowHeight) {
        // Move button up so it doesn't cover footer
        chatBtn.style.bottom = (windowHeight - footerRect.top + 20) + "px";
    } else {
        // Reset button to default
        chatBtn.style.bottom = "20px";
    }
}