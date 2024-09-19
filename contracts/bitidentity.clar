(define-map identities
  { id: (string-ascii 36) }
  { identity: (string-ascii 256) })

(define-public (create-identity (id (string-ascii 36)) (identity (string-ascii 256)))
  (ok (map-insert identities { id: id } { identity: identity }))
)