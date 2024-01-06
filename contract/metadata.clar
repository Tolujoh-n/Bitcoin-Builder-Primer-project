(define-public (update-metadata (token-address principal) (metadata-map map))
  (if (check-sender? token-address)
    (begin
      (map-set? metadata-map "SIP" "19")
      (map-set? metadata-map "update-type" "metadata")
      (map-set? metadata-map "timestamp" (now))
      (map-set? metadata-map "updater" (get-principal))
      (event (concat "metadata-updated:" token-address) metadata-map)
      (ok "Metadata updated successfully."))
    (err "Unauthorized access.")))

(define-private (check-sender? (token-address principal))
  (if (eq? (get-sender) token-address)
      (ok)
      (err "Unauthorized access.")))
