const SELECT_OL = document.querySelector(`ol`);
const OL_CHILD4 = SELECT_OL.children[4];
const OL_CHILD0 = SELECT_OL.children[0];


SELECT_OL.insertBefore(OL_CHILD4,OL_CHILD0);

const SELECT_MAIN = document.querySelector(`main`);
const SELECT_SECTION_2 = SELECT_MAIN.children[1];
const SELECT_H2_2 = SELECT_SECTION_2.children[0];

const SELECT_SECTION_3 = SELECT_MAIN.children[2];
const SELECT_CHILD_3 = SELECT_SECTION_3.children[0];
const SELECT_H2_3 = SELECT_CHILD_3.children[0];

const SELECT_P_3 = SELECT_CHILD_3.querySelector(`p`);
const SELECT_P_2 = SELECT_SECTION_2.querySelector(`p`);

SELECT_CHILD_3.insertBefore(SELECT_H2_2,SELECT_P_3);
SELECT_SECTION_2.insertBefore(SELECT_H2_3,SELECT_P_2);

SELECT_SECTION_3.remove();



