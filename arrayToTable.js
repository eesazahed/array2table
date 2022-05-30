export default function arrayToTable(element, array, styled, size) {
  const newTable = document.createElement("table");

  const arrayTitles = [
    ...new Set(array.map((item) => Object.keys(item)).flat()),
  ];

  newTable.innerHTML = `

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
                          item[selectorName] !== (undefined || null)
                            ? typeof item[selectorName] == "object"
                              ? JSON.stringify(item[selectorName])
                              : item[selectorName]
                            : ""
                        }
                        </td>`
              )
              .join("")}<tr>`
  )
  .join("")}
</tbody>
`;

  if (styled === true) {
    newTable.style.cssText = `margin: none; padding: none; border-collapse: collapse; font-size: ${
      size || 9
    }px;`;

    newTable
      .querySelectorAll(`.table-header`)
      .forEach(
        (cell) =>
          (cell.style.cssText = `padding: 0.5em 1em 0.5em 1em; border: 1px solid #bbb; font-weight: bold; background-color: #dddccc;`)
      );
    newTable
      .querySelectorAll(`.table-cell`)
      .forEach(
        (cell) =>
          (cell.style.cssText = `padding: 0.5em 1em 0.5em 1em; border: 1px solid #bbb;`)
      );
  }
  element.append(newTable);
}
