var pages = [
    {
        url: 'http://localhost:3000',
        steps: [
            {
                method: 'wait',
                args: [
                    1000
                ]
            },
            // {
            //     method: 'insert',
            //     args: [
            //         '.loan-details-form [name="loanAmount"]',
            //         '0'
            //     ]
            // },
            // {
            //     method: 'wait',
            //     args: [
            //         1000
            //     ]
            // },
            // {
            //     method: 'type',
            //     args: [
            //         '.loan-details-form [name="loanAmount"]',
            //         '25000'
            //     ]
            // },
            {
                method: 'select',
                args: [
                    '.loan-details-form select',
                    'Home Improvement'
                ]
            },
            {
                method: 'wait',
                args: [
                    1000
                ]
            }
        ]
    },
    {
        url: 'http://localhost:3000/#/offers',
        steps: []
    }
]

module.exports = {
    screenshotDir: 'screenshot',
    // Note: showWindow will mess up the height of the screenshots.
    showWindow: false,
    debug: true,
    views: {
        mobile: {
            path: 'mobile',
            viewport: {
                width: 400,
                height: 800
            },
            pages
        },
        desktop: {
            path: 'desktop',
            viewport: {
                width: 1024,
                height: 800
            },
            pages
        }
    }
}
