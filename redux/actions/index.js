export const shProfile = (prof, position) => { return ({ type: 'SHOW_PROFILE', prof, position }); };
export const service = (name) => { return ({ type: 'CHOOSE_SERVICE', name }); };