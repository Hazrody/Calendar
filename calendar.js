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
        /**
         * Nombre de jours dans un mois
         * @type {number}
         */
        const nbDaysInMonth = new Date(year, month, 0).getDate();
        /**
         * Premier jour du mois
         * @type {number}
         */
        const firstDayInMonth = new Date(year, month - 1, 1).getDay();
        /**
         * Nom du mois demandé
         * @type {string}
         */
        const currentNameMonth = monthNames[month - 1];
        console.log('Nom du mois demandé:', currentNameMonth);
        /**
         * Template du calendrier
         * @type {string}
         */
        let generatedHtmlCalendar = `<h2>${currentNameMonth} ${year}</h2><table><thead><tr><th>Dim</th><th>Lun</th><th>Mar</th><th>Mer</th><th>Jeu</th><th>Ven</th><th>Sam</th></tr></thead><tbody>`;
        /**
         * Jour
         * @type {number}
         */
        let day = 1;
        /**
         * Ici 6 correspond au nombre de semaines possibles dans un mois si le mois commence un autre jour que dimanche
         */
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
        /**
         * On retourne le calendrier pret a être affiché
         */
        return generatedHtmlCalendar;
    } else {
        /**
         * Dans ce cas le mois entré est incorrect
         */
        console.error('Le mois est incorrect');
    }
}

export default createCalendar;
