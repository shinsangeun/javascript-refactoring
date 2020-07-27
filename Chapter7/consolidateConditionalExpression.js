// before
function disabilityAmount(anEmployee) {
    if (anEmployee.senitory < 2) return 0;
    if (anEmployee.monthsDisabled > 12) return 0;
    if (anEmployee.isPartTime) return 0;
    // 장애 수단 계산
}

// after
function disabilityAmount(anEmployee) {
    //장애 수당 계산
    if(isNotEligibleForDisability()) return 0;

    // 장애 수당 적용 여부 확인
    function isNotEligibleForDisability() {
        return ((anEmployee.senitory < 2)
            || (anEmployee.monthsDisabled > 12)
            || (anEmployee.isPartTime));
    }
}