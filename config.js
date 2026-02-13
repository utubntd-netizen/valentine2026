// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Mỹ Quyên",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Em có đồng ý là Valentine của anh không? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓','👩‍❤️‍👨'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Em có thích anh không?",                                    // First interaction
            yesBtn: "Có",                                             // Text for "Yes" button
            noBtn: "Không",                                               // Text for "No" button
            secretAnswer: "Em không thích anh, em yêu anh!!!👩‍❤️‍👨❤️"           // Secret hover message
        },
        second: {
            text: "Em yêu anh nhiều như thế nào ạ?",                          // For the love meter
            startText: "Nhiều như này này!",                                   // Text before the percentage
            nextBtn: "Tiếp tục ❤️"                                         // Text for the next button
        },
        third: {
            text: "Em có muốn làm Valentine của anh vào ngày 14/2/2026 không? 🌹", // The big question!
            yesBtn: "Có!",                                             // Text for "Yes" button
            noBtn: "Không"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Woww yêu quá nhiều rồi đấy anh thích lắm hehe!! 🥰🚀💝",  // Shows when they go past 5000%
        high: "Nhiều dữ vậy sao! 🚀💝",              // Shows when they go past 1000%
        normal: "Ồ vậy sao! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: " Anh là người may mắn nhất trên thế gian này hjhj love you MQ 🎉💝💖💝💓",
        message: "Lại đây anh thơm má 90 cái còn lại nhaaa!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://stream.nct.vn/NhacCuaTui989/ALittleLove-FionaFung-206213.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
