---
name: Overview
route: /Messages/Overview
menu: Messages
---

# Messages Overview

## Specification Status

| Version | Status |
---------- | ---------
| 0.2     | Tentative |

## Purpose
1. Describe the form and content of DSNP Messages posted to the blockchain used for all Liberty Platform activities. Only some of these activities will have the full message posted to chain. Examples:
    * Public messages (profile changes, public posts, reactions)
    * Direct messages between accounts (dead drop, inbox)
    * Key changes (private graph KeyList, encryption KeyList, public key rotation)
    * Graph changes (follow/unfollow)
1. Specify an on-chain message format
1. Provide data size estimations
1. Facilitate use of SDK and interpretation of on-chain data

## Assumptions
* Chain messages are on Ethereum
* Message data is posted via [Ethereum log events](https://medium.com/mycrypto/understanding-event-logs-on-the-ethereum-blockchain-f4ae7ba50378)
* Signature algorithm is [secp256k1](https://en.bitcoin.it/wiki/Secp256k1). This allows the use of `ecreover`
  to get public keys. A public key also need not be included in a log event for ease of validation.
* content hashes are created via the same [keccak-256 hashing algorithm](https://en.wikipedia.org/wiki/SHA-3) used by Ethereum.

## DSNP Message Formats
We have seriously considered two possibilities, a [variable message format](#Variable-Message-Format), and a [unified message format](#unified-message-format).  Others are listed at the end of this page.

### Variable Message Format
This format is the current preference.

* All actions are posted to chain with some or all pertinent information about the action
* Different information is posted depending on the action.
* **Advantages**
    * can index all actions without requesting off-chain data
    * can validate most actions without requesting off-chain data
    * can archive some actions without requesting off-chain data
* **Disadvantages**
    * more data (likely more costly up front) than a simple URI

**Log message format **

This is what would be posted as a Log event in Ethereum:

| field | description | type |
|-------|-------------|------|
| topic | Ethereum log topic | bytes32 |
| dsnpType | DSNP message type |number/enum |
| dsnpData | serialized, possibly compressed message data| bytes |

#### Some other options:
* Emit no topic, have a single contract that subscribers watch for events from.  Subscribers can perform filtering based on the `dsnpTopic` field.
* The topic is the dsnpType (possibly not an enum).  Subscribers could listen for desired topics.

### DSNP Messages
These messages would be serialized, compressed where feasible, and emitted in the log event as the `DSNPData` field.

For details on how messages are serialized, see [DSNP Message Serialization](/Messages/Serialization)

#### Broadcast
a public post (was Announcement)

| dsnpData field | description | type |
| ------------- |------------- | ---- |
| fromAddress | ID of the sender | bytes20
| messageID | keccak-256 hash of content stored at URI |  bytes32
| uri       | content URI | string


#### Reply
a public reply post

| dsnpData field | description | type |
| ------------- |------------- | ---- |
| inReplyTo | ID of the message the reply references |  bytes32
| messageID | keccak-256 hash of content stored at uri |  bytes32
| fromAddress | ID of the sender | bytes20
| uri       | content uri | string


#### Drop
a dead drop message

| dsnpData field | description | type |
| ------------- |------------- | ---- |
| deadDropID | The Dead Drop ID (See [DeadDrops](TBD) | bytes32
| uri  | content uri  |  string
| messageID | keccak-256 hash of content |  bytes32

#### GraphChange
a public follow/unfollow

| dsnpData field | description | type |
| ------------- |------------- | ---- |
| fromAddress | ID of the sender | bytes20
| actionType | follow/unfollow| number/enum

#### KeyList, PrivateGraphKeyList, EncryptionKeyList

a KeyList rotation

| dsnpData field | description | type |
| ------------- |------------- | ---- |
| fromAddress | ID of the sender | bytes20
| keyList | new list of valid keys | bytes[]

#### Inbox
a direct message

| dsnpData field | description | type |
| ------------- |------------- | ---- |
| toAddress | ID of the recipient | bytes20
| fromAddress | id of the sender | bytes20
| messageID | keccak-256 hash of content | bytes32
| uri  | content uri  | string

#### EncryptedInbox
an encrypted direct message.
This describes the format once decrypted.
Possibly combine both of these and expect that all Inbox messages are encrypted.

| dsnpData field | description | type |
| ------------- |------------- | ---- |
| toAddress | ID of the recipient | bytes20
| fromAddress | ID of the sender | bytes20
| messageID | keccak-256 hash of content | bytes32
| uri  | content uri  | string

#### Reaction
a visual reply to a post

| dsnpData field | description | type |
| ------------- |------------- | ---- |
| inReplyTo | ID of the message the reaction references |  bytes32
| fromAddress | id of the sender | bytes20
| emoji | the encoded reaction  | number / UTF-8 bytes[]

### Possible Message Types

#### Profile
a profile update such as name or icon change

| dsnpData field | description | type |
| ------------- |------------- | ---- |
| fromAddress | id of the sender | bytes20
| uri    | uri for the profile data  |string
| messageID |  keccak-256 hash of content at uri | bytes32

#### Private
An encrypted message of unknown type.
See [DSNP Message Types: Private Messages](/Messages/Types#private-messages) for details.

| dsnpData field | description | type |
| ------------- |------------- | ---- |
| fromAddress | id of the sender | bytes20
| data | encrypted graph change data | string
| messageID | keccak-256 hash of unencrypted content | bytes32

#### PrivateBroadcast
An encrypted Broadcast decipherable by specific accounts.
This describes the format once decrypted.

| dsnpData field | description | type |
| ------------- |------------- | ---- |
| fromAddress | id of the sender | bytes20
| inReplyTo | ID of the message the broadcast references |  bytes32
| messageID      | keccak-256 hash of content stored at URI |  bytes32
| uri       | content uri | string


### Unified Message Format
This is currently not the recommended solution, but is presented as a comparison.

* All actions are posted to the chain with some pertinent information about the action
* The same information is posted regardless of action
* The rest of the information for the action is stored off chain.
* **Advantages**
    * less data on chain --> lower up-front costs and lower node storage requirements
    * privacy management is easier -- for example, "right to be forgotten" is easier to comply with since
        data is external, off-chain.
* **Disadvantages**
    * indexing requires retrieving content @ uri
    * archiving requires retrieving more content @ uri
    * validation requires retrieving more content @ uri
    * cost savings may be minimal

| field | description | type
|-------|-------------| ---|
| topic | Ethereum log topic |  bytes
| action type | the type of action | bytes
| fromAddress | social identity | bytes
| uri | uri of stored action information | string

### All data on chain
One possibility is not to have any data stored off-chain; instead, even the ActivityPub content would be posted to chain.
The disadvantages far outweigh the advantages:

* **Advantages**
    * Validation, indexing, discovery are much easier
* **Disadvantages**
    * This amount of data would rapidly slow down the network
    * The posting of illegal content could potentially shut down the network
    * Garbage collection, validation, privacy concerns, and dealing with illegal content become interdependent, and would pose conflicting interests.
    * Would still need archive to store at least some content
    * Unknown, likely chilling effect on incentive models

### No data except hashes on chain
Only hashes of the events are stored on chain; everything else is interpreted via API(s)