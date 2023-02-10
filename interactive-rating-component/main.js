let count = 0;

function getButtonClicked(index) {
    const rate = document.querySelector('.rate');
    const buttons = [...rate.children];
    if (index === undefined) return buttons;
    return buttons[index - 1];
}

function toggleSelected(index) {
    const elementClassList = getButtonClicked(index).classList;
    if (elementClassList.contains('selected')) {
        elementClassList.remove('selected');
        count--;
    } else {
        elementClassList.add('selected');
        count++;
    }
}

function getPages() {
    const card = document.querySelector('.card');
    return [...card.children];
}

function openThankYou() {
    const pages = getPages();
    const currentPage = pages[0];
    currentPage.classList.remove('reveal');
    currentPage.classList.add('hide');
    const newPage = pages[1];
    newPage.classList.remove('hide');
    newPage.classList.add('reveal');
}

function closeThankYou() {
    const pages = getPages();
    const currentPage = pages[1];
    currentPage.classList.remove('reveal');
    currentPage.classList.add('hide');
    const newPage = pages[0];
    newPage.classList.remove('hide');
    newPage.classList.add('reveal');
    count = 0;
}

function clearAllSelections() {
    getButtonClicked().forEach((button) => {
        button.classList.remove('selected');
    });
}

function submit() {
    openThankYou();
    clearAllSelections();
    countSelected();
}

function getTextCount() {
    const selectedSection =
        document.getElementsByClassName('selected-section')[0];
    return [...selectedSection.children][0];
}

function countSelected() {
    const textCount = getTextCount();
    textCount.textContent = `You selected ${count}`;
}
