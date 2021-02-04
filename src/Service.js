let alert

function useRefBottomAlert(ref) {
    alert = ref
}

function showBottomAlert(type, title, message, otherFunction) {
    alert.onOpenAlert(type, title, message, otherFunction)
}

export {
    showBottomAlert,
    useRefBottomAlert
}