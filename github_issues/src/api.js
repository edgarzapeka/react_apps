export const getIssues = () => {
    return [
        {
            id: 1,
            title: 'Issue viewer issue number one is right here!',
            body: 'Hi there I noticed you have a problem with the code in this repo. Can you please fix it?',
            tags: ['Priority', 'Bug']
        },
        {
            id: 2,
            title: 'How about a second issue',
            body: 'Hi there I noticed you have a problem with the code in this repo. Can you please fix it?',
            tags: ['Label', 'Bug']
        },
        {
            id: 3,
            title: 'Third',
            body: '',
            tags: ['Priority', 'Bug']
        },
        {
            id: 4,
            title: 'The issue is a pull request, so make sure the icon is there!',
            body: 'Hi there I noticed you have a problem with the code in this repo. Can you please fix it?',
            tags: ['Priority']
        }
    ];
};