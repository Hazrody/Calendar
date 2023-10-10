const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

/**
 *
 * @param month Nombre du mois
 * @param year Année désiré
 * @returns {string} Un format html du calendrier genéré
 */
function createCalendar(month, year) {
    if (month > 0 && month <= 12) {
        const nbDaysInMonth = new Date(year, month, 0).getDate();
        console.log('Nombre de jour dans le mois:', nbDaysInMonth);

        const firstDayInMonth = new Date(year, month - 1, 1).getDay();
        console('Premier jour du mois:',firstDayInMonth);

        const currentNameMonth = monthNames[month - 1];
        console.log('Nom du mois demandé:', currentNameMonth);

        let generatedHtmlCenlendar = `<h2>${currentNameMonth} ${year}</h2><table><thead><tr><th>Dim</th><th>Lun</th><th>Mar</th><th>Mer</th><th>Jeu</th><th>Ven</th><th>Sam</th></tr></thead><tbody>`;

        let day = 1;
        // Ici 6 corresponds au nombre de semaine possible dans un mois si il commence un autre jour que dimanche
        for (let i = 0; i < 6; i++) {
            if (day > nbDaysInMonth) {
                break;
            }
            generatedHtmlCenlendar += "<tr>";
            for (let days = 0; days < 7; days++) {
                if ((i === 0 && days < firstDayInMonth) || day > nbDaysInMonth) {
                    generatedHtmlCenlendar += "<td></td>";
                } else {
                    generatedHtmlCenlendar += <td>${day}</td>;
                    day++;
                }
            }
            generatedHtmlCenlendar += "</tr>";
        }

        generatedHtmlCenlendar += "</tbody></table>";
        return generatedHtmlCenlendar;

    } else {
        console.error('Le mois est incorrect');
    }
}

module.exports = createCalendar;
