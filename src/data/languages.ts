export interface Language {
    name: string;
    code: string; // ISO 3166-1 alpha-2 code for flagcdn
}

export const languages: Language[] = [
    { name: 'Arabic', code: 'sa' },
    { name: 'Bulgarian', code: 'bg' },
    { name: 'Chinese', code: 'cn' },
    { name: 'Croatian', code: 'hr' },
    { name: 'Czech', code: 'cz' },
    { name: 'Danish', code: 'dk' },
    { name: 'Dutch', code: 'nl' },
    { name: 'English', code: 'gb' }, // Using GB or US
    { name: 'Filipino', code: 'ph' },
    { name: 'Finnish', code: 'fi' },
    { name: 'French', code: 'fr' },
    { name: 'German', code: 'de' },
    { name: 'Greek', code: 'gr' },
    { name: 'Hindi', code: 'in' },
    { name: 'Hungarian', code: 'hu' },
    { name: 'Indonesian', code: 'id' },
    { name: 'Italian', code: 'it' },
    { name: 'Japanese', code: 'jp' },
    { name: 'Korean', code: 'kr' },
    { name: 'Malay', code: 'my' },
    { name: 'Norwegian', code: 'no' },
    { name: 'Polish', code: 'pl' },
    { name: 'Romanian', code: 'ro' },
    { name: 'Russian', code: 'ru' },
    { name: 'Slovak', code: 'sk' },
    { name: 'Spanish', code: 'es' },
    { name: 'Swedish', code: 'se' },
    { name: 'Tamil', code: 'lk' }, // Or IN
    { name: 'Turkish', code: 'tr' },
    { name: 'Ukrainian', code: 'ua' },
    { name: 'Vietnamese', code: 'vn' },
];
