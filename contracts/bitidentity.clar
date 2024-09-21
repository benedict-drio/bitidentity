;; Define a map to store identities
;; The map key is an ASCII string of up to 36 characters
;; The map value is a tuple containing an ASCII string of up to 256 characters
(define-map identities
  { id: (string-ascii 36) }
  { identity: (string-ascii 256) })

;; Private function to validate the ID
;; Checks if the length of the ID is between 1 and 36 characters
(define-private (is-valid-id (id (string-ascii 36)))
  (and
    (>= (len id) u1)
    (<= (len id) u36)
  )
)

;; Private function to validate the identity
;; Checks if the length of the identity is between 1 and 256 characters
(define-private (is-valid-identity (identity (string-ascii 256)))
  (and
    (>= (len identity) u1)
    (<= (len identity) u256)
  )
)

;; Public function to create a new identity
;; Validates the ID and identity, checks for uniqueness, and inserts into the map
(define-public (create-identity (id (string-ascii 36)) (identity (string-ascii 256)))
  (begin
  ;; Validate the ID
    (asserts! (is-valid-id id) (err u2))
    ;; Validate the identity
    (asserts! (is-valid-identity identity) (err u3))
    ;; Ensure the ID does not already exist
    (asserts! (is-none (map-get? identities { id: id })) (err u1))
    ;; Insert the new identity into the map
    (ok (map-insert identities { id: id } { identity: identity }))
  )
)

;; Read-only function to get an identity by ID
;; Returns the identity if it exists
(define-read-only (get-identity (id (string-ascii 36)))
  (map-get? identities { id: id })
)