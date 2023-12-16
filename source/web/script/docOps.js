function docLoad() {
    setupInitiativeRows();
    setupCombatTableRows();
}

function px2cm(pixels) {
    var centimeters = pixels * 2.54 / 96;
    return centimeters;
}

function generateIniativeRow(initNumber = 0, combatants = "&nbsp;") {
    var c = combatants instanceof Array ? combatants.join(", ") : combatants;
    const iniativeRowHTML = `<div class="initiativeRow">
                                <div class="initiativeNumber">${initNumber}</div>
                                <div class="initiativeEntry">
                                    <span class="initiativeNames">${c}</span>
                                    <div class="line"></div>
                                </div>
                            </div>`;

    return generateElement(iniativeRowHTML);
}

function generateElement(html) {
    var div = document.createElement('div');
    div.innerHTML = html.trim();
    return div.firstChild;
}

function setupInitiativeRows() {
    const initiativeList = document.querySelector("#initiativeList");
    const initiativeTracker = document.querySelector("#initiativeTracker");
    const minNumber = Number(initiativeTracker.attributes.min.value) || 0;
    const maxNumber = Number(initiativeTracker.attributes.max.value) || 1;
    for (var i = maxNumber; i >= minNumber; i--) {
        initiativeList.append(generateIniativeRow(i));
    }

}

function generateCombatRow({ name = "&nbsp;", hp = "&nbsp;" }) {
    const combatRowHTML = ` <div class="combatRow">
                                <div class="miniSep"></div>
                                <div class="combatTable-NameColumn">
                                    <span>${name}</span>
                                    <div class="line"></div>
                                </div>
                                <div class="miniSep"></div>
                                <div class="combatTable-HPColumn"> <span>${hp}</span>
                                    <div class="line"></div>
                                </div>
                                <div class="miniSep"></div>
                                <div class="combatTable-ReactionColumn">
                                    <div class="reactionCircle"></div>
                                </div>
                                <div class="miniSep"></div>
                                <div class="combatTable-ConditionColumn"> <span>&nbsp;</span>
                                    <div class="line"></div>
                                </div>
                                <div class="miniSep"></div>
                                <div class="combatTable-ResourcesColumn"> <span>&nbsp;</span>
                                    <div class="line"></div>
                                </div>
                                <div class="miniSep"></div>
                            </div>`;
    return generateElement(combatRowHTML);
}

function setupCombatTableRows(rowCount = 33) {
    const combatTableRowList = document.querySelector("#combatTableRowList");
    for (var i = 0; i < rowCount; i++) {
        let combatRow = generateCombatRow({});
        combatTableRowList.append(combatRow);
    }
}