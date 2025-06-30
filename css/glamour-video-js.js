// Create popup overlay div
const popup = document.createElement("div");
popup.style.position = "fixed";
popup.style.top = "0";
popup.style.left = "0";
popup.style.width = "100%";
popup.style.height = "100%";
popup.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
popup.style.display = "flex";
popup.style.justifyContent = "center";
popup.style.alignItems = "center";
popup.style.zIndex = "1000";

// Create popup content div
const popupContent = document.createElement("div");
popupContent.style.position = "relative";
popupContent.style.backgroundColor = "white";
popupContent.style.padding = "20px";
popupContent.style.borderRadius = "10px";
popupContent.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

// Create image element
const image = document.createElement("img");
image.src = "https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/gZKrpv/ltDpyitr4UxTQQFcjXOYCJdXa9Wr6nFCUriw7CwE.png";
image.style.maxWidth = "100%";
image.style.height = "auto";

// Create close button (X)
const closeButton = document.createElement("span");
closeButton.innerHTML = "&times;";
closeButton.style.position = "absolute";
closeButton.style.top = "10px";
closeButton.style.right = "10px";
closeButton.style.fontSize = "24px";
closeButton.style.color = "#333";
closeButton.style.cursor = "pointer";
closeButton.style.backgroundColor = "transparent";
closeButton.style.border = "none";

// Append image and close button to popup content
popupContent.appendChild(closeButton);
popupContent.appendChild(image);

// Append popup content to popup
popup.appendChild(popupContent);

// Append the popup to the body
document.body.appendChild(popup);

// Add event listener to close button
closeButton.addEventListener("click", function() {
  popup.style.display = "none";
});





/*----------------------------------------*/


// Get the element with the class 's-contacts'
const contactSection = document.querySelector('.s-contacts');

// Create the link element
const driveLink = document.createElement('a');
driveLink.href = "https://drive.google.com/file/d/1XE-X5PY6bx-UNsAYenodkvD3VVL4OBHn/view?usp=drive_link";
driveLink.target = "_blank";
driveLink.style.display = "block";
driveLink.style.margin = "20px auto 0";
driveLink.style.width = "200px";

// Create the image element
const logoImage = document.createElement('img');
logoImage.src = "https://cdn.salla.sa/form-builder/4cRFEWzh086xjrspPoNiShg369wBauebq7j16ser.webp";
logoImage.alt = "شعار Excelso";
logoImage.style.width = "200px";
logoImage.style.height = "200px";
logoImage.style.display = "block";
logoImage.style.margin = "0 auto";

// Add the image inside the link
driveLink.appendChild(logoImage);

// Create the business number text
const businessText = document.createElement('div');
businessText.textContent = "رقم المنشاة : 1125416824";
businessText.style.textAlign = "center";
businessText.style.marginTop = "10px";
businessText.style.fontWeight = "bold";
businessText.style.fontSize = "16px";

// Append everything to the contact section
contactSection.appendChild(driveLink);
contactSection.appendChild(businessText);
