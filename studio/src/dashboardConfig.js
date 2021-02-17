export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602d7b84b686c93da1ad22b7',
                  title: 'Sanity Studio',
                  name: 'chorizo-burrito-gatsby-studio',
                  apiId: 'f1f7a976-7350-4148-8eea-5a385e710498'
                },
                {
                  buildHookId: '602d7b8406370a44e95c54b9',
                  title: 'Blog Website',
                  name: 'chorizo-burrito-gatsby',
                  apiId: '18bda8e9-cc5e-4242-ac11-697447ca53d5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tmytrn/chorizo-burrito-gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://chorizo-burrito-gatsby.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
