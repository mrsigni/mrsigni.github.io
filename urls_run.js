function isIOSOrMac() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // 判断是否为 iOS 设备
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

    // 判断是否为 macOS 设备
    const isMac = /Macintosh|Mac OS X/.test(userAgent) && !window.MSStream;

    return isIOS || isMac;
}

function handleRedirectClickFinal(event) {
    event.preventDefault(); // Prevent default link behavior
    const productId = event.currentTarget.getAttribute("data-id"); // Get the product ID from the clicked element
    // 获取id为zhibo_btn的元素
    const zhiboBtn = document.getElementById('zhibo_btn');
    // 取出content的值
    const matchId = zhiboBtn.getAttribute('content');
    const siteGroupId = zhiboBtn.getAttribute('siteGroupId');

    fetch('videoProduct/do/id=' + encodeURIComponent(productId)+ "_"+matchId+ "_" +siteGroupId+ ".js") // Send request to backend with product ID as parameter
        .then(response => response.json())
        .then(data => {
            // Assuming your backend returns the URL in the 'url' field
            let redirectUrl = data.data.url;
            if (!/^https:\/\//.test(redirectUrl)) {
                redirectUrl = 'https://' + redirectUrl.replace(/^(?:f|ht)tps?:\/\//, '');
            }
            if (isIOSOrMac()) {
                // 在iOS设备上，使用window.location.href进行跳转
                window.location.href = redirectUrl;
            } else {
                // 在其他设备上，使用window.open进行跳转
                window.open(redirectUrl, '_blank');
            }
        })
        .catch(error => {
            console.error('Error fetching URL from backend:', error);
        });
}

function handleRedirectClick(event) {
    // 获取id为zhibo_btn的元素
    const zhiboBtn = document.getElementById('zhibo_btn');
    const siteGroupSignalDomain = zhiboBtn.getAttribute('siteGroupSignalDomain');
    const signalDomain = zhiboBtn.getAttribute('signalDomain');
    if (siteGroupSignalDomain === "1") {
        event.preventDefault(); // Prevent default link behavior
        // 获取id为zhibo_btn的元素
        const zhiboBtn = document.getElementById('zhibo_btn');
        // 取出content的值
        const matchId = zhiboBtn.getAttribute('content');
        const siteGroupId = zhiboBtn.getAttribute('siteGroupId');

        // 构建固定域名的URL
        const fixedDomain = "https://" + signalDomain + "/videoProduct/list";
        const redirectUrl = `${fixedDomain}?matchId=${encodeURIComponent(matchId)}&siteGroupId=${encodeURIComponent(siteGroupId)}`;

        window.open(redirectUrl, '_blank');
        return
    }

    event.preventDefault(); // Prevent default link behavior
    const productId = event.currentTarget.getAttribute("data-id"); // Get the product ID from the clicked element
    // 取出content的值
    const matchId = zhiboBtn.getAttribute('content');
    const siteGroupId = zhiboBtn.getAttribute('siteGroupId');

    fetch('videoProduct/do/id=' + encodeURIComponent(productId)+ "_"+matchId+ "_" +siteGroupId+ ".js") // Send request to backend with product ID as parameter
        .then(response => response.json())
        .then(data => {
            // Assuming your backend returns the URL in the 'url' field
            let redirectUrl = data.data.url;
            if (!/^https:\/\//.test(redirectUrl)) {
                redirectUrl = 'https://' + redirectUrl.replace(/^(?:f|ht)tps?:\/\//, '');
            }
            if (isIOSOrMac()) {
                // 在iOS设备上，使用window.location.href进行跳转
                window.location.href = redirectUrl;
            } else {
                // 在其他设备上，使用window.open进行跳转
                window.open(redirectUrl, '_blank');
            }
        })
        .catch(error => {
            console.error('Error fetching URL from backend:', error);
        });
}

function handleRedirectClick2(event) {
    event.preventDefault(); // Prevent default link behavior
    const productId = event.currentTarget.getAttribute("data-id"); // Get the product ID from the clicked element
    fetch('videoRecord/do/id=' + encodeURIComponent(productId)+".js") // Send request to backend with product ID as parameter
        .then(response => response.json())
        .then(data => {
            // Assuming your backend returns the URL in the 'url' field
            let redirectUrl = data.data.url;
            // Open a new window/tab and navigate to the received URL
            if (isIOSOrMac()) {
                // 在iOS设备上，使用window.location.href进行跳转
                window.location.href = redirectUrl;
            } else {
                // 在其他设备上，使用window.open进行跳转
                window.open(redirectUrl, '_blank');
            }
        })
        .catch(error => {
            console.error('Error fetching URL from backend:', error);
        });
}
