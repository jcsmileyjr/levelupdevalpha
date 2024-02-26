
/**
 * 
 * @param {string} action - slug use to call the page 
 * @returns http://localhost:3000/Action/skills
 */
const Action = ({params: {action}}) => {
    return (
        <main>
            Hello Action {action}!!!
        </main>
    )
}

export default Action;