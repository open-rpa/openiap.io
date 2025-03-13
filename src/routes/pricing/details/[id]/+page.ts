import type { PageLoad } from "./$types.js";

export const load: PageLoad = async ({ parent, params }) => {

    return { id: params.id }

};
