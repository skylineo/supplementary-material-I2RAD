(function () {
  const config = window.I2R_AD_SITE || {};

  function createCaseCard(item, outcome) {
    const card = document.createElement("article");
    card.className = `case-card ${outcome}`;

    const frame = document.createElement("div");
    frame.className = "video-frame";

    const placeholder = document.createElement("div");
    placeholder.className = "video-placeholder";
    const placeholderTitle = document.createElement("span");
    placeholderTitle.textContent = "Video placeholder";
    const placeholderPath = document.createElement("code");
    placeholderPath.textContent = item.src;
    placeholder.appendChild(placeholderTitle);
    placeholder.appendChild(placeholderPath);

    const video = document.createElement("video");
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.src = item.src;
    video.addEventListener("loadeddata", () => placeholder.classList.add("hidden"));
    video.addEventListener("error", () => placeholder.classList.remove("hidden"));

    const info = document.createElement("div");
    info.className = "case-info";

    const label = document.createElement("p");
    label.className = "case-label";
    label.textContent = item.scene || "Editable scene";

    const title = document.createElement("h3");
    title.textContent = item.title || "Video case";

    info.appendChild(label);
    info.appendChild(title);

    if (item.caption) {
      const caption = document.createElement("p");
      caption.textContent = item.caption;
      info.appendChild(caption);
    }

    frame.appendChild(placeholder);
    frame.appendChild(video);
    card.appendChild(frame);
    card.appendChild(info);
    return card;
  }

  function renderCases(targetId, items, outcome) {
    const target = document.getElementById(targetId);
    const list = Array.isArray(items) ? items : [];
    const count = document.getElementById(`${outcome}-count`);
    if (count) count.textContent = String(list.length);
    list.forEach((item) => target.appendChild(createCaseCard(item, outcome)));
  }

  renderCases("success-case-grid", config.successCases, "success");
  renderCases("failure-case-grid", config.failureCases, "failure");
  renderCases("representation-case-grid", config.representationCases, "representation");
})();
