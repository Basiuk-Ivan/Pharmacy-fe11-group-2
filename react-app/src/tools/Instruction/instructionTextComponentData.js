export const instructionTextComponentData = product => {
  return [
    { id: 'compound', title: 'Склад', value: product?.instruction?.compound },
    { id: 'dosageForm', title: 'Лікарська форма', value: product?.productForm },
    { id: 'pharmGroup', title: 'Фармакотерапевтична група', value: product?.instruction?.pharmGroup },
    { id: 'indications', title: 'Показання', value: product?.instruction?.indications },
    { id: 'contraindications', title: 'Противопоказання', value: product?.instruction?.contraindications },
    { id: 'howToTake', title: 'Спосіб застосування', value: product?.instruction?.howToTake },
    { id: 'adverseReactions', title: 'Побочні реакції', value: product?.instruction?.adverseReactions },
    { id: 'bestBeforeDate', title: 'Термін придатності', value: product?.bestBeforeDate },
    { id: 'storageConditions', title: 'Умови зберігання', value: product?.instruction?.storageConditions },
    { id: 'manufacturer', title: 'Виробник', value: product?.manufacturer }];
};
