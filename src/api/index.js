const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api'

export const registerUser = async (username, password) => {
    try {
        const response = await fetch(`${baseURL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // user: {
                //     username: username,
                //     password: password
                // }
                username, password
            })
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.log('error registering user')
        
    }
}

export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${baseURL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // user: {
                //     username,
                //     password
                // }
                username, password
            })
        })

        const result = await response.json();

        return result;

    } catch (ex) {
        console.log('error logging in user')
        
    }
}


export const getUserDetails = async (token) => {
    try {
        const response = await fetch(`${baseURL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

        const result = await response.json();
        return result;

    } catch (ex) {
        console.log('error getting users details')
    }
}

//line 69 /:username do we ${username instead of /:username}
export const getPublicRoutines = async () => {
    try {
        const response = await fetch(`${baseURL}/users/:username/routines`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const result = await response.json();
        return result;

    } catch (error) {
        console.log('error getting Public Routines')
    }
}

console.log(getPublicRoutines)


export const getActivities = async () => {
    try {
        const response = await fetch(`${baseURL}/activities`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const result = await response.json();
        return result;

    } catch (error) {
        console.log('error getting Activities')
    }

}


export const createActivities = async (name, description) => {
    try {
        const response = await fetch(`${baseURL}/activities`, {
            method: "POST",
            body: JSON.stringify({
                name: name,
                description: description
            })

        })
        const result = await response.json();
        return result;

    } catch (error) {
        console.log('error creating Activities')
    }
}


export const updateActivity = async (name, description) => {
    try {
        const response = await fetch(`${baseURL}/activities/:activityId`, {
            method: "PATCH",
            body: JSON.stringify({
                name: name,
                description: description
            })

        })
        const result = await response.json();
        return result;

    } catch (error) {
        console.log('error updating Activities')
    }
}


export const getPublicRoutineActivities = async () => {
    try {
        const response = await fetch(`${baseURL}/activities/:activityId/routines`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const result = await response.json();
        return result;

    } catch (error) {
        console.log('error getting Public Routine Activities')
    }
}

export const getRoutines = async () => {
    try {
        const response = await fetch(`${baseURL}/routines`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const result = await response.json();
        return result;

    } catch (error) {
        console.log('error getting Routines')
    }
}


export const createRoutines = async (name, goal, isPublic) => {
   try { const response = await fetch(`${baseURL}/routines`, {
        method: "POST",
        body: JSON.stringify(
            {
            name: name,
            goal: goal,
            isPublic: isPublic
            //true
        }
        )
    })
        const result = await response.json();
    return result;
} catch (error) {
    console.log('error creating Routines')
}
}

//make sure no [ ] needed for _id on line 191
export const updateRoutines = async ({name, description, isPublic, _id}) => {
    try {
        const response = await fetch(`${baseURL}/routines/${_id}`, {
            method: "PATCH",
            body: JSON.stringify({
                routine: {
                name,
                description,
                isPublic
                }
            })

        })
        const result = await response.json();
        return result;

    } catch (error) {
        console.log('error updating Routines')
    }
}

export const deleteRoutine = async (token, _id) => {
    try {
        const response = await fetch(`${baseURL}/routines/${_id}`, {
  method: "DELETE",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
})
const result = await response.json();
return result;

} catch (error) {
console.log('error deleting Routine')
}
}

export const attachActivityToRoutine = async (activityId, count, duration) => {
    try {
        const response = await fetch(`${baseURL}/routines/:routineId/activities`, {
            method: "POST",
            body: JSON.stringify({
              activityId: activityId,
              count: count, 
              duration: duration
            })
          })

const result = await response.json();
return result;

} catch (error) {
console.log('error attaching activity to Routine')
}
}



export const updateRoutineActivity = async (count, duration) => {
    try {
        const response = await fetch(`${baseURL}/routines_activities/:routineActivityId`, {
            method: "PATCH",
            body: JSON.stringify({
                count: count,
                duration: duration
            })

        })
        const result = await response.json();
        return result;

    } catch (error) {
        console.log('error updating Routines')
    }
}


export const deleteRoutineActivity = async (token) => {
    try {
        const response = await fetch(`${baseURL}/routine_activities/:routineActivityId`, {
  method: "DELETE",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
})
const result = await response.json();
return result;

} catch (error) {
console.log('error deleting routine activities')
}
}


