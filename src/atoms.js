// atoms.js
import { atom } from 'jotai';

export const isAuthenticatedAtom = atom(false);
export const redirectPathAtom = atom('/chrimata');
export const member = atom({
    firstName: '',
    lastName: '',
    libraryCode: '',
    isoNumber: '',
})
