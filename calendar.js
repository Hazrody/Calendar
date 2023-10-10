const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

/**
 * Génère un calendrier HTML pour un mois donné.
 *
 * @param {number} month - Numéro du mois (1 pour janvier, 2 pour février, etc.).
 * @param {number} year - Année souhaitée.
 * @returns {string} - Format HTML du calendrier généré.
 */
function createCalendar(month, year) {
    if (month > 0 && month <= 12) {
        const nbDaysInMonth = new Date(year, month, 0).getDate();
        console.log('Nombre de jours dans le mois:', nbDaysInMonth);

        const firstDayInMonth = new Date(year, month - 1, 1).getDay();
        console.log('Premier jour du mois:', firstDayInMonth);

        const currentNameMonth = monthNames[month - 1];
        console.log('Nom du mois demandé:', currentNameMonth);

        let generatedHtmlCalendar = `<h2>${currentNameMonth} ${year}</h2><table><thead><tr><th>Dim</th><th>Lun</th><th>Mar</th><th>Mer</th><th>Jeu</th><th>Ven</th><th>Sam</th></tr></thead><tbody>`;

        let day = 1;
        // Ici 6 correspond au nombre de semaines possibles dans un mois si le mois commence un autre jour que dimanche
        for (let i = 0; i < 6; i++) {
            if (day > nbDaysInMonth) {
                break;
            }
            generatedHtmlCalendar += "<tr>";
            for (let days = 0; days < 7; days++) {
                if ((i === 0 && days < firstDayInMonth) || day > nbDaysInMonth) {
                    generatedHtmlCalendar += "<td></td>";
                } else {
                    generatedHtmlCalendar += `<td>${day}</td>`;
                    day++;
                }
            }
            generatedHtmlCalendar += "</tr>";
        }

        generatedHtmlCalendar += "</tbody></table>";
        return generatedHtmlCalendar;
    } else {
        console.error('Le mois est incorrect');
    }
}

export default createCalendar;
