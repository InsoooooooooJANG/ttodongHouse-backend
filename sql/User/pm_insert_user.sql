
DELIMITER $$
CREATE FUNCTION `PM_INSERT_USER`
(
    NICKNAME    VARCHAR(45),
    KAKAOID     VARCHAR(45),
    EMAIL       VARCHAR(45),
    PRIV        INT,
    POINT     INT,
    RESERVCOUNT INT
) RETURNS INT
BEGIN
    DECLARE ID INT;

    INSERT INTO TBL_USER
    (
        COL_NICKNAME,
        COL_KAKAO_ID,
        COL_EMAIL,
        COL_PRIV,
        COL_POINT,
        COL_RESERV_COUNT
    )
    VALUES
    (
        NICKNAME,
        KAKAOID,
        EMAIL,
        PRIV,
        POINT
    );

    SELECT LAST_INSERT_ID() INTO ID;
    
    RETURN ID;
END $$
DELIMITER ;