export default function array2table(element, array) {
  const arrayTitles = [
    ...new Set(array.map((item) => Object.keys(item)).flat()),
  ];

  element.innerHTML = `
        <thead class="table-head">
            <tr class="table-row">
                ${arrayTitles
                  .map((item) => `<th class="table-header">${item}</th>`)
                  .join("")}
            </tr>
        </thead>
        <tbody class="table-body">
        ${array
          .map(
            (item) =>
              `<tr class="table-row">
                    ${arrayTitles
                      .map(
                        (selectorName) =>
                          `<td class="table-cell">
                                ${
                                  typeof item[selectorName] == "object"
                                    ? JSON.stringify(item[selectorName])
                                    : item[selectorName] != null
                                    ? item[selectorName]
                                    : ""
                                }
                                </td>`
                      )
                      .join("")}<tr>`
          )
          .join("")}
    </tbody>
    `;
}
