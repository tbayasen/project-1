// Listen for auth status change
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in: ', user)
    } else {
        console.log('user logged out');
    }
});

// Signup
$('#signup-btn').on('click', function () {
    // grabbing user info
    const email = $('#signup-email').val().trim();
    const password = $('#signup-pass').val().trim();

    console.log(email, password);

    // sign up user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
    });

    $('.validate').val('');
});

// Login
$('#login-btn').on('click', function () {
    const email = $('#login-email').val().trim();
    const password = $('#login-pass').val().trim();

    auth.signInWithEmailAndPassword(email, password).then(cred => {
    });
});

// Logout
$('#logout').on('click', function () {
    auth.signOut().then(cred => {
    });
});
