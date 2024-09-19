(define-map identities
  { id: (string-ascii 36) }
  { identity: (string-ascii 256) })

(define-private (is-valid-id (id (string-ascii 36)))
  (and
    (>= (len id) u1)
    (<= (len id) u36)
  )
)

(define-private (is-valid-identity (identity (string-ascii 256)))
  (and
    (>= (len identity) u1)
    (<= (len identity) u256)
  )
)

(define-public (create-identity (id (string-ascii 36)) (identity (string-ascii 256)))
  (begin
    (asserts! (is-none (map-get? identities { id: id })) (err u1))
    (ok (map-insert identities { id: id } { identity: identity }))
  )
)

(define-read-only (get-identity (id (string-ascii 36)))
  (map-get? identities { id: id })
)