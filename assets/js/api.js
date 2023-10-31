
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/CarolineT9/JS-developer/main/Portfolio%20-%20Projeeto%20base/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}